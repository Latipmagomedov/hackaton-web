<template>
  <div class="bottom-curtain" :class="{'bottom-curtain_open': isOpen}">
    <div class="bottom-curtain__wrapper container">
      <div class="bottom-curtain__header">
        <div class="bottom-curtain__header-title">Рядом</div>
        <div class="bottom-curtain__header-line" @click="toggle"></div>
        <div class="bottom-curtain__header-btn" @click="$emit('close')">
          <img src="@/assets/images/icons/close.svg" alt="close">
        </div>
      </div>

      <VInput class="bottom-curtain__search"
              v-if="isOpen"
              v-model="search"
              placeholder="Поиск мест и адресов"
              @focus="searchWindowShow = true">
        <template #rightIcon>
          <img src="@/assets/images/icons/search.svg" class="map-container__search-icon" alt="search">
        </template>
      </VInput>
    </div>

    <div class="bottom-curtain__slider" :class="{'bottom-curtain__slider_open': isOpen}">
      <div class="bottom-curtain__slider-row">
        <div class="bottom-curtain__slide"
             v-for="address in addresses"
             :key="address.id">
          <img :src="address.icon" class="bottom-curtain__slide-icon" alt="icon">
          <div class="bottom-curtain__slide-title">{{ address.title }}</div>
        </div>
      </div>
    </div>
  </div>


  <transition name="slide-fade">
    <SearchWindow class="map-container__search-window"
                  @close="searchWindowShow = false"
                  v-if="searchWindowShow"/>
  </transition>
</template>

<script setup>
import {ref} from "vue";
import SearchWindow from '@/components/SearchWindow'

const addresses = [
  {
    id: 1,
    icon: require('../../assets/images/icons/beside/food.svg'),
    title: 'Где поесть'
  },
  {
    id: 2,
    icon: require('../../assets/images/icons/beside/hotel.svg'),
    title: 'Гостиница'
  },
  {
    id: 3,
    icon: require('../../assets/images/icons/beside/shop.svg'),
    title: 'Магазин'
  },
  {
    id: 4,
    icon: require('../../assets/images/icons/beside/parks.svg'),
    title: 'Парки'
  },
  {
    id: 5,
    icon: require('../../assets/images/icons/beside/atms.svg'),
    title: 'Банкоматы'
  },
  {
    id: 1,
    icon: require('../../assets/images/icons/beside/food.svg'),
    title: 'Где поесть'
  },
  {
    id: 2,
    icon: require('../../assets/images/icons/beside/hotel.svg'),
    title: 'Гостиница'
  },
  {
    id: 3,
    icon: require('../../assets/images/icons/beside/shop.svg'),
    title: 'Магазин'
  },
  {
    id: 4,
    icon: require('../../assets/images/icons/beside/parks.svg'),
    title: 'Парки'
  },
  {
    id: 5,
    icon: require('../../assets/images/icons/beside/atms.svg'),
    title: 'Банкоматы'
  },
]

const search = ref('')
const isOpen = ref(false)
const searchWindowShow = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.bottom-curtain {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 186px;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  z-index: 100;
  transition: .3s;

  &_open {
    height: 100vh;
    overflow-x: auto;
    padding-bottom: 20px;
  }

  &__header {
    margin-top: 18px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__header-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -4px;
    width: 40px;
    height: 5px;
    border-radius: 8px;
    background-color: #CFCCD4;
  }

  &__header-title {
    font-size: 16px;
    font-weight: 600;
  }

  &__header-btn {
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__search {
    margin-top: 16px;
  }

  &__slider {
    width: 100%;
    margin-top: 16px;
    padding: 0 16px;
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__slider-row {
    display: flex;
  }

  &__slider_open &__slider-row {
    width: 100%;
    flex-direction: column;
  }

  &__slide {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background-color: $light-gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
      margin-left: 8px;
    }
  }

  &__slider_open &__slide {
    width: 100%;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:not(:first-child) {
      margin-left: 0;
      margin-top: 8px;
    }
  }

  &__slide-icon {
    width: 40px;
    height: 40px;
  }

  &__slide-title {
    margin-top: 4px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }

  &__slider_open &__slide-title {
    margin-left: 16px;
    font-size: 14px;
  }
}
</style>
