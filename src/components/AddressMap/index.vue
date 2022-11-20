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
                    @result="searchReasult"
                    v-if="searchWindowShow"/>
    </transition>
    <div ref="mapContainer" class="map-container__map"></div>
    <AddressSlider class="map-container__address-slider"
                   :addresses="recommendedAddresses"
                   @selectedRecommendedAddresses="selectedRecommendedAddresses"/>
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

const recommendedAddresses = [
  {
    name: 'Село Гуниб',
    coordinates: [46.9646632, 42.3870221],
    img: 'https://img.geliophoto.com/gunib/07_gunib.jpg',
    time: '3 ч 21 мин'
  },
  {
    name: 'Veranda',
    coordinates: [47.5108414, 42.9793247],
    img: 'https://avatars.mds.yandex.net/get-altay/1938975/2a00000176252ea29e9b75fb17286fd95c81/XXL',
    time: '21 мин'
  },
  {
    name: 'Gambit',
    coordinates: [47.5197927, 42.9744487],
    img: 'https://img.restaurantguru.com/rce8-Restoran-Gambit-Dostavka-24-chasa-exterior.jpg',
    time: '21 мин'
  },
]

const searchReasultCoordinates = ref([])
const searchReasult = (res) => {
  searchWindowShow.value = false
  searchReasultCoordinates.value = res
  getDirections(searchReasultCoordinates.value.geometry.coordinates, searchReasultCoordinates.value.text)

  console.log(res)
}

const selectedRecommendedAddresses = (address) => {
  getDirections(address.coordinates, address.name, address.img)
}

const getDirections = async (coordinates, text, img) => {
  const body = {
    coordinates: {
      from: userPosition.value,
      to: {
        lon: coordinates[0],
        lat: coordinates[1]
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


    createMarkers(coordinates, text, img)
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

const createMarkers = (coordinates, text, img) => {
  const el = document.createElement('div');
  if (img) {
    el.innerHTML =
        `
      <div class="custom-marker">
         <img src="${img}"
              class="custom-marker__img"
              alt="marker">
         <div class="custom-marker__name">${text}</div>
         <img src="${require('../../assets/images/icons/triangle.svg')}"
              class="custom-marker__triangle"
              alt="triangle">
      </div>
      `
  } else {
    el.innerHTML =
        `
      <div class="custom-marker">
         <div class="custom-marker__img"></div>
         <div class="custom-marker__name">${text}</div>
         <img src="${require('../../assets/images/icons/triangle.svg')}"
              class="custom-marker__triangle"
              alt="triangle">
      </div>
      `
  }

  el.className = 'marker';

  const marker = new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .addTo(map.value);

  // marker.remove();
  console.log(marker[0])
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

  });


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
      background-color: #696969;
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
