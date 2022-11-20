<template>
  <div class="location-card">
    <img :src="image"
         class="location-card__image"
         alt="location">

    <div class="location-card__title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
})
</script>

<style scoped lang="scss">
.location-card {
  text-decoration: none;
  color: #000;

  &__image {
    width: 100%;
    height: 44vw;
    border-radius: 10px;
    object-fit: cover;
  }

  &__title {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
