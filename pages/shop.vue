<template>
  <section class="b-page b-shop">
    <a href="https://www.amazon.fr/gp/product/B07C3Y8T1J/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B07C3Y8T1J&linkCode=as2&tag=smanscour-21&linkId=ebb29b97b2c41b8c9b80c6e09cd5df1f" class="b-shop__book">
      <img class="b-shop__book__cover" src="~/assets/book-bilal.jpg" alt="">
      <p class="b-shop__book__text">The Raid, 2018 <span class="b-shop__book__text__price">60.00€</span></p>
    </a>
  </section>
</template>

<style lang="scss">
  .b-shop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    width: 100%;
    height: 100%;
    
    &__book {
      text-decoration: none;
      z-index: 200;
      &__cover {
        width: 180px;
        height: auto;
      }
      &__text {
        margin-top: 10px;
        color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: 'Helvetica Neue';
        font-size: 16px;
        &__price {
          font-weight: bold;
          font-size: 15px;
        }
      }
    }
    
    
    
  }
</style>

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

