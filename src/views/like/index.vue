<template>
  <div class="like">
    <div class="like__wrapper container">
      <div class="like__header">
        <h2 class="like__header-title">Маршруты</h2>
      </div>

      <div class="like__cards">
        <LikeCard class="like__card" />
        <LikeCard class="like__card" />
        <LikeCard class="like__card" />
        <LikeCard class="like__card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LikeCard from '@/components/LikeCard'
</script>

<style scoped lang="scss">
.like {

  &__header {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__header-title {
    font-size: 16px;
    font-weight: 500;
    color: $brand-col;
  }

  &__cards {
    margin-top: 12px;
  }

  &__card {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
}
</style>
