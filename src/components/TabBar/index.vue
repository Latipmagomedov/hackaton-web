<template>
  <div class="tab-bar">
    <div class="tab-bar__wrapper container">
      <router-link class="tab-bar__link" to="/">
        <div class="tab-bar__link-icon tab-bar__link-icon_map">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3 8.4V26L10.6364 21.6L19.3636 26L27 21.6V4L19.3636 8.4L10.6364 4L3 8.4Z" fill="#D6D6D6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6357 4V21.6V4Z" fill="#D6D6D6"/>
            <path d="M10.6357 4V21.6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3643 8.39999V26V8.39999Z" fill="#D6D6D6"/>
            <path d="M19.3643 8.39999V26" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="tab-bar__link-name">Карта</div>
      </router-link>
      <div class="tab-bar__link" @click="$emit('openBottomCurtain')">
        <div class="tab-bar__link-icon tab-bar__link-icon_beside">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 8.75H23.75" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
            <path d="M6.25 15H23.75" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
            <path d="M6.25 21.25H23.75" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="tab-bar__link-name">Рядом</div>
      </div>
      <router-link class="tab-bar__link" to="/places">
        <div class="tab-bar__link-icon tab-bar__link-icon_places">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.4002 22.305C17.1143 21.4311 23.75 17.6354 23.75 11.25C23.75 6.41751 19.8325 2.5 15 2.5C10.1675 2.5 6.25 6.41751 6.25 11.25C6.25 17.6354 12.8857 21.4311 14.5998 22.305C14.8536 22.4344 15.1464 22.4344 15.4002 22.305ZM15 15C17.0711 15 18.75 13.3211 18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5C12.9289 7.5 11.25 9.17893 11.25 11.25C11.25 13.3211 12.9289 15 15 15Z"
                  fill="#D6D6D6"/>
            <path
                d="M22.5777 20.625C23.3457 21.1951 23.75 21.8417 23.75 22.5C23.75 23.1583 23.3457 23.8049 22.5777 24.375C21.8098 24.9451 20.7052 25.4185 19.375 25.7476C18.0448 26.0767 16.5359 26.25 15 26.25C13.4641 26.25 11.9552 26.0767 10.625 25.7476C9.29483 25.4185 8.19025 24.9451 7.42228 24.375C6.65431 23.8049 6.25 23.1583 6.25 22.5C6.25 21.8417 6.6543 21.1951 7.42228 20.625"
                stroke="#D6D6D6" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="tab-bar__link-name">Места</div>
      </router-link>
      <router-link class="tab-bar__link" to="/like">
        <div class="tab-bar__link-icon tab-bar__link-icon_like">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.73162 15.168L14.3388 22.3737C14.6387 22.6578 14.7886 22.7998 14.9708 22.8104C14.9902 22.8116 15.0098 22.8116 15.0292 22.8104C15.2114 22.7998 15.3613 22.6578 15.6612 22.3737L23.2684 15.168C25.3883 13.16 25.6462 9.87395 23.8656 7.55973L23.5037 7.08949C21.3616 4.30551 17.0338 4.76981 15.531 7.94483C15.3189 8.39302 14.6811 8.39302 14.469 7.94483C12.9662 4.76981 8.63839 4.30551 6.49626 7.08949L6.13443 7.55973C4.35376 9.87395 4.61168 13.16 6.73162 15.168Z"
                fill="#D6D6D6" stroke="#D6D6D6" stroke-width="2"/>
          </svg>
        </div>
        <div class="tab-bar__link-name">Нравится</div>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.tab-bar {
  width: 100%;
  padding: 10px 10px 40px 10px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__link {
    text-align: center;
    text-decoration: none;
    color: $gray4;
  }

  &__link-name {
    font-size: 10px;
    line-height: 12px;
  }

  .router-link-exact-active &__link-icon_map {
    svg path {
      fill: $brand-col;
    }
  }

  .router-link-exact-active &__link-icon_beside {
    svg path {
      stroke: $brand-col;
    }
  }

  .router-link-exact-active &__link-icon_places {
    svg path {
      stroke: $brand-col;

      &:first-child {
        fill: $brand-col;
      }
    }
  }

  .router-link-exact-active &__link-icon_like {
    svg path {
      fill: $brand-col;
      stroke: $brand-col;
    }
  }

  .router-link-exact-active {
    color: $brand-col;
  }
}
</style>
