<template>
  <section class="b-page b-index">
    
    <template v-if="!online">
      <div class="b-index__single-photo">
        <img :src="principalePictureLink" alt="">
      </div>
    </template>
    <template v-if="online">
      <no-ssr>
        <Carousel />
      </no-ssr>
    </template>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import Carousel from '~/components/Carousel.vue';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8888/wordpress/wp-json';
axios.defaults.baseURL = "https://public-api.wordpress.com/rest/v1.1/sites/bilalelkadhiadmin.wordpress.com";
  
export default {
  data(){
    return {
      principalePictureLink: '',
      online: false
    }
  },
  created(){
    axios.get('posts/16?_embed').then(response => {
      
      this.principalePictureLink = response.data.featured_image;
    })
  },
  head(){
      return {
        title: 'Bilal El Kadhi',
        meta: [
          { hid: 'description', name: 'description', content: 'Home' }
        ]
      }
    },
  components: {
    Carousel
  },
  layout: 'default',
}
</script>

<style lang="scss">
  .b-index {
    &__single-photo {
      height: calc(80vh);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        max-height: 80%;
        max-width: 60%;
      }
    }
  } 
</style>
