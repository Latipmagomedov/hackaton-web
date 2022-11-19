<template>
  <div class="map-container">
    <div class="container">
      <VInput class="map-container__search"
              v-model="search"
              placeholder="Поиск мест и адресов"
              @focus="searchWindowShow = true">
        <template #rightIcon>
          <img src="@/assets/images/icons/search.svg" class="map-container__search-icon" alt="search">
        </template>
      </VInput>
    </div>

    <transition name="slide-fade">
      <SearchWindow class="map-container__search-window"
                    @close="searchWindowShow = false"
                    v-if="searchWindowShow"/>
    </transition>
    <div ref="mapContainer" class="map-container__map"></div>
    <AddressSlider class="map-container__address-slider"/>
  </div>
</template>

<script setup>
import directions from '@/api/directions'
import {onMounted, ref} from "vue";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import AddressSlider from '@/components/AddressSlider'
import SearchWindow from '@/components/SearchWindow'

const accessToken = 'pk.eyJ1IjoibGF0aXBqcyIsImEiOiJjbGFtenMxeDQwa2wxM291cnQ5amI2MzdnIn0.Q0ZA4_hTGydrIv453cLoqA'
mapboxgl.accessToken = accessToken;

const mapContainer = ref(null)
const map = ref(null)
const userPosition = ref({})
const directionsList = ref([])

const search = ref('')
const searchWindowShow = ref(false)


const getDirections = async () => {
  const body = {
    coordinates: {
      from: userPosition.value,
      to: {
        lon: '47.4957403',
        lat: '42.9706087'
      }
    },
    query: {
      geometries: 'geojson',
      access_token: accessToken,
    }
  }

  try {
    const response = await directions.getDirections(body.coordinates, body.query)
    directionsList.value = response.routes[0].geometry.coordinates
    console.log(response.routes[0].geometry.coordinates)

    const data = {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': directionsList.value
        }
      }
    }

    map.value.addSource('route', data)
    map.value.addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#2329EF',
        'line-width': 5
      }
    });
  } catch (error) {
    console.log(error)
  }
}
const init = () => {
  map.value = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [47.5048717, 42.9830241],
    zoom: 11,
  });

  const location = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  })


  map.value.addControl(location);

  location.on('geolocate', function (e) {
    userPosition.value = {
      lon: e.coords.longitude,
      lat: e.coords.latitude
    }
    console.log(userPosition.value);
    getDirections()
  });
  const el = document.createElement('div');
  el.innerHTML =
      `
      <div class="custom-marker">
         <img src="https://cachizer2.2gis.com/reviews-photos/25528228-eeae-40d3-9d71-e73d7ce822c6.jpg?w=1920"
              class="custom-marker__img"
              alt="marker">
         <div class="custom-marker__name">Джума-мечеть</div>
         <img src="${require('../../assets/images/icons/triangle.svg')}"
              class="custom-marker__triangle"
              alt="triangle">
      </div>
      `

  el.className = 'marker';

  const marker = new mapboxgl.Marker(el)
      .setLngLat([47.4957403, 42.9706087])
      .addTo(map.value);

  map.value.on('load', () => {
    location.trigger()
  })
}

onMounted(() => init())
</script>

<style scoped lang="scss">
.map-container {
  position: relative;
  height: 100vh;

  &__map {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;

    &::v-deep(.mapboxgl-ctrl-bottom-right), &::v-deep(.mapboxgl-ctrl-logo), &::v-deep(.mapboxgl-ctrl-geolocate) {
      display: none;
    }
  }

  &::v-deep(.custom-marker) {
    position: relative;
    padding: 4px 10px 4px 4px;
    margin-top: -62px;
    margin-left: -50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);

    &__img {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      object-fit: cover;
    }

    &__name {
      max-width: 105px;
      margin-left: 10px;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__triangle {
      position: absolute;
      right: 30%;
      bottom: -18px;
    }
  }

  &__search {
    position: absolute;
    top: 9px;
    left: 0;
    z-index: 99;
  }

  &__address-slider {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 108px;
    z-index: 99;
  }
}
</style>
