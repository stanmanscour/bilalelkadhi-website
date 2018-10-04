<template>
  <header class="b-header" :class="{ fixTop: pageFilm }" >
    <div class="b-header__nav">
      <nuxt-link v-if="currentPage == 'index'" to="/film" class="b-header__nav__film b-link" href="#">Film</nuxt-link>
      <nuxt-link v-else to="/" class="b-header__nav__studio b-link" href="#">Studio</nuxt-link>
      <nuxt-link v-if="pageWithNoLogo" to="/" class="b-header__nav__logo b-logo">Bilal El Kadhi</nuxt-link>
      <nuxt-link to="/about" class="b-header__nav__contact b-link">Contact</nuxt-link>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'

  export default {
    created(){
      console.log(this.$route.name)
    },
    computed: {
      ...mapGetters({
        logoIsHidden: 'modules/menu/logoIsHidden'
      }),
      pageFilm(){
        return this.$route.name == 'film'
      },
      pageWithNoLogo(){
        let bool = true;
        if (this.$route.name == 'about' || this.$route.name == 'shop'){
         bool = false;
        }
        return bool;
      },
      currentPage(){
        return this.$route.name
      }
    }
  }
</script>

<style lang="scss">
  .b-header {
    z-index: 100;
    position: fixed;
    top: calc(50% - 35px);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px; 
    height: 70px;
    align-items: center;
    justify-content: space-between;

    &.fixTop {
      top: 10px;

      @media screen and (min-width: 768px){
        top: calc(50% - 35px); 
      }
    }
    
    &__nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      
      &__contact,
      &__studio,
      &__studio {
        
      }
    }  

    &__col-left {
      // display: flex;
      // flex-direction: row;
      // align-items: baseline;
      &__nav {
        &__item {
          //margin-left: 5px;
          &:first-item {
            margin-left: 0;
          }
        }
      }
    } 
  }
</style>