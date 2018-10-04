<template>
  <div class="b-page b-photography">
    <ul class="b-page-image-container">
      <no-ssr>
      <!-- <div v-masonry transition-duration="0.4s" item-selector=".item" class="masonry-container">
        <div v-masonry-tile class="item" :key="index" v-for="(item, index) in blocks">
          <img :src="item.src" alt="">
        </div>
      </div> -->
      <div v-masonry transition-duration="0.4s" item-selector=".item" class="masonry-container">
        <div v-masonry-tile class="item" :key="index" v-for="(item, index) in getPhotos">
          <img :src="item.featured_image" alt="">
        </div>
      </div>
    </no-ssr>
    </ul>
  </div>
</template>

<style lang="scss">
  .b-photography {
    margin-top: 0;
  }

  .masonry-container {
    .item {
      width: 100%;
      margin-bottom: -5px;

      @media screen and (min-width: 600px){
        width: 50%;
      }

      @media screen and (min-width: 1024px){
        width: 33.33333%;
      }

      @media screen and (min-width: 1400px){
        width: 25%;
      }

      img {
        //width: 100%;
        width: 100%;
      }
    } 
  }
</style>

<script>
  import NoSSR from 'vue-no-ssr'
  import { mapMutations } from 'vuex'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'


  export default {
    head(){
      return {
        title: 'Home - Bilal El Kadhi',
        meta: [
          { hid: "home", name: "description", content: "Bilal El Kadhi's official website" }
        ]
      }
    },
    data(){
      return {}
    },
    components: {
      'no-ssr': NoSSR
    },
    methods: {
      ...mapMutations({
        showLogo: 'modules/menu/showLogo'
      }),
      ...mapActions({
        fetchPhotos: 'modules/wordpress/fetch'
      })
    },
    created(){
      this.showLogo();
      this.fetchPhotos('photography');
    },
    computed: {
      ...mapGetters({
        getPhotos: 'modules/wordpress/getPhotos'
      })
    },
    mounted(){
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    }
  }
</script>