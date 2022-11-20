<template>
  <div class="detail-place">
    <div class="detail-place__btn-back" @click="$emit('close')">
      <img src="@/assets/images/icons/arrow-left.svg" alt="arrow">
    </div>

    <carousel :items-to-show="1" class="detail-place__slider">
      <slide v-for="slide in 1" :key="slide">
        <img :src="location.image" class="detail-place__slider-img" alt="location">
      </slide>

      <template #addons>
        <pagination class="detail-place__slider-pag"/>
      </template>
    </carousel>

    <div class="detail-place__wrapper container">
      <div class="detail-place__title">{{ location.title }}</div>
      <p class="detail-place__description">{{location.description}}</p>

      <div class="detail-place__btns">
        <div class="detail-place__btn">
          <div class="detail-place__btn-left">
            <img src="@/assets/images/icons/heart.svg" alt="hear">
            <div class="detail-place__btn-name">Добавить в любимое</div>
          </div>
          <img src="@/assets/images/icons/arrow-right.svg" alt="hear">
        </div>
        <div class="detail-place__btn">
          <div class="detail-place__btn-left">
            <img src="@/assets/images/icons/navigation.svg" alt="hear">
            <div class="detail-place__btn-name">Проложить маршрут</div>
          </div>
          <img src="@/assets/images/icons/arrow-right.svg" alt="hear">
        </div>
        <div class="detail-place__btn">
          <div class="detail-place__btn-left">
            <img src="@/assets/images/icons/video.svg" alt="hear">
            <div class="detail-place__btn-name">Просмотреть видео</div>
          </div>
          <img src="@/assets/images/icons/arrow-right.svg" alt="hear">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

defineProps({
  location: Object
})
</script>

<style scoped lang="scss">
.detail-place {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
  overflow-y: scroll;
  background-color: #fff;
  z-index: 100;

  &::-webkit-scrollbar {
    display: none;
  }

  &__btn-back {
    position: absolute;
    top: 8px;
    left: 16px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.48);
    z-index: 9;

    img {
      width: 24px;
      height: 24px;
    }
  }

  &__slider {
    position: relative;
    width: 100%;
  }

  &__slider-img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  &__slider-pag {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    &::v-deep(.carousel__pagination-button::after) {
      width: 6px;
      height: 6px;
      border-radius: 50px;
      background-color: rgba(255, 255, 255, 0.4);;
    }

    &::v-deep(.carousel__pagination-button--active::after) {
      background-color: #fff;
    }
  }

  &__title {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 600;
  }

  &__description {
    margin-top: 8px;
    font-size: 14px;
  }

  &__btns {
    margin-top: 32px;
  }

  &__btn {
    width: 100%;
    height: 48px;
    padding: 0 12px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $light-gray;

    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__btn-left {
    display: flex;
    align-items: center;
  }

  &__btn-name {
    margin-left: 8px;
    font-size: 14px;
  }
}
</style>
