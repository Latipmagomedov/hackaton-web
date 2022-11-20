<template>
  <div class="places">
    <div class="places__wrapper container">
      <div class="places__header">
        <h2 class="places__header-title">Маршруты</h2>
      </div>

      <div class="places__cards">
        <LocationCard class="places__card"
                      v-for="(location, index) in locations"
                      :key="index"
                      :image="location.image"
                      :title="location.title"
                      @click="showDetailPlace = true"/>
      </div>
    </div>

    <DetailPlace v-if="showDetailPlace" @close="showDetailPlace = false"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import LocationCard from '@/components/LocationCard'
import DetailPlace from '@/components/DetailPlace'

const locations = [
  {
    image: 'https://rus.team/images/article/44944/2019-01-18-283_76614-1_429979.webp',
    title: 'Джума-мечеть'
  },
  {
    image: 'https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/46d59338-b4d4-11ec-b491-aeb15f097ac2.800x600.jpeg',
    title: 'Сулакский каньон'
  },
  {
    image: 'https://img.geliophoto.com/sarykum/00_sarykum.jpg',
    title: 'Бархан Сарыйкум'
  },
  {
    image: 'https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg',
    title: 'Село Гамсутль'
  },
  {
    image: 'https://news-r.ru/upload/iblock/983/9832013427c97f2dc0a164da8a547198.jpg',
    title: 'Центральная площадь'
  },
  {
    image: 'https://www.riadagestan.ru/upload/iblock/557/557b1746deef6b3ada303c4fb8529e2b.jpg',
    title: 'Второй рынок'
  },
  {
    image: 'https://img.geliophoto.com/sarykum/00_sarykum.jpg',
    title: 'Бархан Сарыйкум'
  },
  {
    image: 'https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg',
    title: 'Село Гамсутль'
  },
  {
    image: 'https://rus.team/images/article/44944/2019-01-18-283_76614-1_429979.webp',
    title: 'Джума-мечеть'
  },
  {
    image: 'https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/46d59338-b4d4-11ec-b491-aeb15f097ac2.800x600.jpeg',
    title: 'Сулакский каньон'
  },
  {
    image: 'https://img.geliophoto.com/sarykum/00_sarykum.jpg',
    title: 'Бархан Сарыйкум'
  },
]

const showDetailPlace = ref(false)
</script>

<style scoped lang="scss">
.places {
  height: calc(100vh - 95.5px);
  padding-bottom: 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

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
    margin-top: -4px;
    margin-left: -3.4%;
    display: flex;
    flex-wrap: wrap;
  }

  &__card {
    width: 46.6%;
    margin-left: 3.4%;
    margin-top: 16px;

    //white-space: nowrap;
    //overflow: hidden;
    //text-overflow: ellipsis;
  }
}
</style>
