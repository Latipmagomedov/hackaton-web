<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import directions from '@/api/directions'

import {onMounted, ref} from "vue";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const accessToken = 'pk.eyJ1IjoibGF0aXBqcyIsImEiOiJjbGFtenMxeDQwa2wxM291cnQ5amI2MzdnIn0.Q0ZA4_hTGydrIv453cLoqA'

mapboxgl.accessToken = accessToken;

const mapContainer = ref(null)
const map = ref(null)
const userPosition = ref({})
const directionsList = ref([])

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
        'line-color': '#1771F1',
        'line-width': 8
      }
    });
  } catch (error) {
    console.log(error)
  }
}

const init = () => {
  map.value = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/dark-v10',
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

  const marker = new mapboxgl.Marker()
      .setLngLat([47.4957403, 42.9706087])
      .addTo(map.value);

  return
  map.value.on('load', () => {
    const data = {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [
              47.467622,
              42.985149
            ],
            [
              47.467864,
              42.985303
            ],
            [
              47.469092,
              42.984346
            ],
            [
              47.469725,
              42.983132
            ],
            [
              47.470842,
              42.982842
            ],
            [
              47.470712,
              42.982717
            ],
            [
              47.470986,
              42.982507
            ],
            [
              47.476361,
              42.97911
            ],
            [
              47.478477,
              42.980879
            ],
            [
              47.481845,
              42.976841
            ],
            [
              47.483682,
              42.975453
            ],
            [
              47.484357,
              42.975125
            ],
            [
              47.484355,
              42.974953
            ],
            [
              47.485581,
              42.974079
            ],
            [
              47.485917,
              42.974111
            ],
            [
              47.486552,
              42.974649
            ],
            [
              47.489656,
              42.972955
            ],
            [
              47.490458,
              42.973723
            ],
            [
              47.492251,
              42.972717
            ],
            [
              47.492118,
              42.972583
            ],
            [
              47.495971,
              42.970665
            ],
            [
              47.495858,
              42.970548
            ]
          ]
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
        'line-color': '#1771F1',
        'line-width': 8
      }
    });
  })
}

onMounted(() => init())
</script>

<style scoped lang="scss">
.map-container {
  width: 100%;
  height: 100vh;

  &::v-deep(.mapboxgl-ctrl-bottom-right), &::v-deep(.mapboxgl-ctrl-logo) {
    display: none;
  }
}
</style>
