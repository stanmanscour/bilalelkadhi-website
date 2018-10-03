<template>
  <div class="b-page b-film">
    <ul class="b-collection-videos">
      <li class="b-collection-videos__item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Bzd7JeThZIE?modestbranding=true&showinfo=false&rel=false"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/3ttrIe9WXLQ?modestbranding=true&showinfo=false&controls=false" modestbranding="1" showinfo="0" rel="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .b-film {
    margin-top: 0;
    margin-bottom: 500px;
  }
  
  .b-collection-videos {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;

    @media screen and (max-width: 768px){
      width: 95%;
    }

    &__item {
      width: 100%;
      height: 100vh;
      //margin-top: 200px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      iframe {
        z-index: 105;
      }

      @media screen and (max-width: 765px){
        iframe {
          width: 100%;
        }
      }
    }
  }
</style>

<script>
  import {
    mapActions
  } from 'vuex'
  
  export default {
    head() {
      return {
        title: 'Film | Bilal El Kadhi'
      }
    },
    methods: {
      ...mapActions({
        fetchPhotos: 'modules/wordpress/fetch'
      })
    },
    created(){
      this.fetchPhotos('videos');
    }
  }
</script>