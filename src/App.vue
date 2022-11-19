<template>
  <div class="wrapper">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <TabBar class="tab-bar"/>
  </div>
</template>

<script setup>
import TabBar from '@/components/TabBar'
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
</style>
