<template>
  <div class="search-window">
    <div class="search-window__wrapper container">
      <div class="search-window__header">
        <div class="search-window__header-back" @click="$emit('close')">
          <img src="@/assets/images/icons/back.svg" alt="back">
        </div>
        <VInput class="search-window__search-inp"
                v-model="search"
                @input="getDirections"
                focus
                placeholder="Поиск...">
          <template #rightIcon>
            <img src="@/assets/images/icons/search-grey.svg" class="search-window__search-icon" alt="search">
          </template>
        </VInput>
      </div>
      <!--      <div class="search-window__clear">-->
      <!--        <div class="search-window__clear-title">Недавние запросы</div>-->
      <!--        <div class="search-window__clear-btn">-->
      <!--          <img src="@/assets/images/icons/clear.svg" alt="clear">-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      <div class="search-window__list">-->
      <!--        <div class="search-window__item" v-for="i in 18">-->
      <!--          <div class="search-window__item-title">Джума-мечеть</div>-->
      <!--          <div class="search-window__item-btn">-->
      <!--            <img src="@/assets/images/icons/clock.svg" alt="clock">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="search-window__list search-window__list_active">
        <div class="search-window__item" v-for="(result, index) in results" :key="index" @click="$emit('result', result)">
          <div class="search-window__item-title">{{ result.text }} {{ result.address }}</div>
          <div class="search-window__item-btn">
            <img src="@/assets/images/icons/clock.svg" alt="clock">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import directions from "@/api/directions";

const search = ref('')
const results = ref([])

const getDirections = async () => {
  try {
    const response = await directions.getGeocoding(search.value, {
      access_token: 'pk.eyJ1IjoibGF0aXBqcyIsImEiOiJjbGFtenMxeDQwa2wxM291cnQ5amI2MzdnIn0.Q0ZA4_hTGydrIv453cLoqA'
    })

    results.value = response.features
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="scss">
.search-window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 101;

  &__header {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__header-back {
    width: 24px;
    height: 24px;
  }

  &::v-deep(.search-bar) {
    width: calc(100% - 32px);
    background-color: $light-gray;
    box-shadow: none;
  }

  &__clear {
    width: 100%;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__clear-title {
    font-size: 14px;
    font-weight: 500;
  }

  &__clear-btn {
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__list {
    margin-top: 8px;
    height: calc(100vh - 115px);
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    width: 100%;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item-title {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.32);
  }

  &__list_active &__item-title {
    color: #000;
  }

  &__item-btn {
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__list_active &__item-btn {
    display: none;
  }
}
</style>
