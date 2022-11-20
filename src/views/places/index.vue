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
                      @click="open(location)"/>
      </div>
    </div>

    <DetailPlace v-if="showDetailPlace"
                 @close="showDetailPlace = false"
                 :location="selectedLocation"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import LocationCard from '@/components/LocationCard'
import DetailPlace from '@/components/DetailPlace'

const locations = [
  {
    image: 'https://rus.team/images/article/44944/2019-01-18-283_76614-1_429979.webp',
    title: 'Джума-мечеть',
    description: 'Джума-мечеть или по-другому аль-Джами‘-мечеть – так называется главная и центральная соборная мечеть в городе, где совершают коллективную молитву «джума-намаз» по пятницам в полдень, также носит название пятничной мечети и обычно является в городе самой большой мечетью, внутри и в ее дворе могут собраться сотни, тысячи и даже десятки тысяч человек.'
  },
  {
    image: 'https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/46d59338-b4d4-11ec-b491-aeb15f097ac2.800x600.jpeg',
    title: 'Сулакский каньон',
    description: 'Сула́кский каньо́н — каньон на территории России в долине реки Сулак (Республика Дагестан), глубочайший каньон Европы[1]. Протяженность каньона составляет 53 километра, глубина достигает 1920 метров[2]. Это на 63 метра глубже Большого каньона в США и на 620 метров глубже Каньона реки Тара[3].'
  },
  {
    image: 'https://img.geliophoto.com/sarykum/00_sarykum.jpg',
    title: 'Бархан Сарыйкум',
    description: 'В 18 километрах от Махачкалы, в предгорьях хребта Нарат-Тюбе расположен удивительный памятник природы – огромный песчаный бархан Сары-Кум.'
  },
  {
    image: 'https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg',
    title: 'Село Гамсутль',
    description: 'Высота села над уровнем моря составляет почти полторы тысячи километров, а труднодоступное расположение с многочисленными обрывами и крутыми склонами сделало .'
  },
  {
    image: 'https://news-r.ru/upload/iblock/983/9832013427c97f2dc0a164da8a547198.jpg',
    title: 'Центральная площадь',
    description: 'Площадь Ленина — главная площадь столицы Дагестана Махачкалы, расположенная в Советском районе. '
  },
  {
    image: 'https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg',
    title: 'Село Гамсутль',
    description: 'Высота села над уровнем моря составляет почти полторы тысячи километров, а труднодоступное расположение с многочисленными обрывами и крутыми склонами сделало .'
  },
  {
    image: 'https://img.geliophoto.com/sarykum/00_sarykum.jpg',
    title: 'Бархан Сарыйкум',
    description: 'В 18 километрах от Махачкалы, в предгорьях хребта Нарат-Тюбе расположен удивительный памятник природы – огромный песчаный бархан Сары-Кум.'
  },
  {
    image: 'https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg',
    title: 'Село Гамсутль',
    description: 'Высота села над уровнем моря составляет почти полторы тысячи километров, а труднодоступное расположение с многочисленными обрывами и крутыми склонами сделало .'
  },
  {
    image: 'https://news-r.ru/upload/iblock/983/9832013427c97f2dc0a164da8a547198.jpg',
    title: 'Центральная площадь',
    description: 'Площадь Ленина — главная площадь столицы Дагестана Махачкалы, расположенная в Советском районе. '
  },
]

const showDetailPlace = ref(false)

const selectedLocation = ref({})
const open = (location) => {
  selectedLocation.value = location
  console.log(location)
  showDetailPlace.value = true
}
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
