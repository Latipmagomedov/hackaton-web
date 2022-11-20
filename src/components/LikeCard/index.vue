<template>
  <div class="like-card">
    <img src="https://mos-holidays.ru/wp-content/uploads/2018/02/barhan-sarykum.jpg" class="like-card__img" alt="img">

    <div class="like-card__content">
      <div class="like-card__title">Площадь ленина</div>
      <div class="like-card__date">Дата поездки: 15.05.2021</div>
      <VButton label="Проложить путь" class="like-card__btn"/>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.like-card {
  width: 100%;
  height: 113px;
  padding: 8px 12px 8px 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $light-gray;

  &__img {
    width: 97px;
    height: 97px;
    border-radius: 10px;
    object-fit: cover;
  }

  &__content {
    width: calc(100% - 109px);
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__date {
    margin-top: 6px;
    color: $gray2;
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
