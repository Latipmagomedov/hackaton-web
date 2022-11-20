<template>
  <div class="bottom-curtain">
    <div class="bottom-curtain__wrapper container">
      <div class="bottom-curtain__header">
        <div class="bottom-curtain__header-title">Рядом</div>
        <div class="bottom-curtain__header-line"></div>
        <div class="bottom-curtain__header-btn" @click="$emit('close')">
          <img src="@/assets/images/icons/close.svg" alt="close">
        </div>
      </div>
    </div>
    <div class="bottom-curtain__slider">
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
</template>

<script setup>
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
]
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
}
</style>
