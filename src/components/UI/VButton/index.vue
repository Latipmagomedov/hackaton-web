<template>
  <button class="v-button">{{label}}</button>
</template>

<script setup>
defineProps({
  label: String
})
</script>

<style scoped lang="scss">
.v-button {
  padding: 11px;
  border-radius: 5px;
  background-color: $brand-col;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  border: none;
  outline: none;
}
</style>
