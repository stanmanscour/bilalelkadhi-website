<template>
  <div class="b-menu">
    <ul class="b-menu__list">
      <li class="b-menu__list__item">
        <nuxt-link to="/">Index</nuxt-link>
      </li>
      <li class="b-menu__list__item">
        <nuxt-link to="/personal">Personal</nuxt-link>
      </li>
      <li class="b-menu__list__item">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>


</script>

<style lang="scss">
  .b-menu {
    z-index: 50;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    &__list {
      width: 90px;
      height: 116px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      &__item {
        &__link {
          //@extend %b-link;
          text-transform: uppercase;
          text-decoration: none;
          opacity: .6;
          color: #fff;
          &.active {
            opacity: 1;
          }
          &:hover {
            cursor: pointer;
            opacity: 1;
          }
        }
      }
    }
  }
</style>