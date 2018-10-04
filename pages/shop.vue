<template>
  <section class="b-page b-shop">
    <a href="https://cdn.shopify.com/s/files/1/1318/9779/products/LTD_SIR_CROP_1024x1024.jpg?v=1481804370" class="b-shop__book">
      <img class="b-shop__book__cover" src="" alt="">
      <p class="b-shop__book__text">The Raid, 2018 <span></span></p>
    </a>
  </section>
</template>

<script>
  
  import { mapMutations } from 'vuex' 

  export default {
    head(){
      return {
        title: 'Shop - Bilal El Kadhi',
        meta: [
          { hid: 'description', name: 'Shop', content: 'Buy the book, The Raid 2018' }
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