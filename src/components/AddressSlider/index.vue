<template>
  <div class="address-slider">
    <div class="address-slider__slides">
      <div class="address-slider__slide"
           v-for="(address, index) in addresses"
           :key="index"
           @click="$emit('selectedRecommendedAddresses', address)">
        {{ address.name }} <span class="address-slider__slide-blue" v-if="address.time">{{ address.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  addresses: Array
})
</script>

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
