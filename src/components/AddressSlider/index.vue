<template>
  <div class="address-slider">
    <div class="address-slider__slides">
      <div class="address-slider__slide">
        Село Гуниб <span class="address-slider__slide-blue">3 ч 21 мин</span>
      </div>
      <div class="address-slider__slide">
        Veranda <span class="address-slider__slide-blue">30 мин</span>
      </div>
      <div class="address-slider__slide">
        Село Гуниб <span class="address-slider__slide-blue">3 ч 21 мин</span>
      </div>
      <div class="address-slider__slide">
        Село Гуниб <span class="address-slider__slide-blue">3 ч 21 мин</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.address-slider {
  width: 100%;
  height: 52px;
  padding: 0 16px;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &__slides {
    display: flex;
  }

  &__slide {
    width: max-content;
    padding: 16px;
    border-radius: 10px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;

    &:not(:first-child) {
      margin-left: 12px;
    }
  }

  &__slide-blue {
    color: $brand-col;
  }
}
</style>
