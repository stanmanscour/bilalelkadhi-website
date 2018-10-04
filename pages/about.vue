<template>
  <section class="b-page b-about">
    <p class="b-about__central-text">
      For all booking inquiries<br>
      <a href="mailto:studio@bilalekadhi.com">studio@bilalekadhi.com</a>
    </p>
    <p class="b-about__bottom-text">Represented by The Artboard</p>
  </section>
</template>

<script>
  
  import { mapMutations } from 'vuex' 

  export default {
    head(){
      return {
        title: 'About - Bilal El Kadhi',
        meta: [
          { hid: 'about', name: 'description', content: 'About Bilal El Kadhi' }
        ]
      }
    },
    methods: {
      ...mapMutations({
        hideLogo: 'modules/menu/hideLogo'
      })
    },
    created(){
      this.hideLogo();
    }
  }
</script>

<style lang="scss">
  .b-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    width: 100%;
    height: 100%;
    
    &__central-text {
      color: black;
      font-size: 15px;
      font-weight: 800;
      font-family: 'Helvetica Neue';
      text-align: center;
      line-height: 20px;
      z-index: 105;

      a {
        color: black;
        text-decoration: none;
      }
    }
    &__bottom-text {
      color: black;
      font-size: 13px;
      font-family: 'Helvetica Neue';
      text-align: center;
      position: absolute;
      bottom: 30px;
    }
    
  }
</style>