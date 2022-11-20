<template>
  <div class="wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <TabBar class="tab-bar" @openBottomCurtain="openBottomCurtain"/>
    <transition name="slide-fade-down">
      <BottomCurtain class="bottom-curtain" v-if="showBottomCurtain" @close="showBottomCurtain = false"/>
    </transition>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import TabBar from '@/components/TabBar'
import BottomCurtain from '@/components/BottomCurtain'

const router = useRouter();

const showBottomCurtain = ref(false)

const openBottomCurtain = () => {
  router.push('/')
  showBottomCurtain.value = true
}
</script>

<style lang="scss">
$maxWidth: 900px;
.wrapper {
  position: relative;
  width: 100%;
  max-width: $maxWidth;
  height: 100vh;
  overflow-y: hidden;
  margin: 0 auto;
}

.tab-bar {
  max-width: $maxWidth;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 99;
}

.bottom-curtain {
  max-width: $maxWidth;
}
</style>
