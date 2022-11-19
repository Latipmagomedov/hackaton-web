<template>
  <div class="search-bar">
    <input type="text"
           class="search-bar__inp"
           v-model="inputVal"
           :placeholder="placeholder"
           @focus="$emit('focus')">

    <div class="search-bar__right-icon">
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  modelValue: [String, Number],
  placeholder: {
    type: String,
  },
})

const emit = defineEmits(["update:modelValue", "focus"]);

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<style scoped lang="scss">
.search-bar {
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);

  &__inp {
    background-color: transparent;
    width: 100%;
    height: 48px;
    padding-left: 16px;
    padding-right: 37px;
    font-size: 14px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.24);
      font-size: 14px;
      font-weight: 500;
    }
  }

  &__right-icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
