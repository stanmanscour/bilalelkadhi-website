<template>
  <carousel class="b-carousel" ref="carousel" :paginationEnabled="false" :perPage="1" :autoplay="false" easing="ease">
			<slide v-for="photo in photos" :key="photo.index">
        <img :src="photo.src" alt="">
			</slide>
		</carousel>
</template>

<style lang="scss">

  .VueCarousel-slide {
    position: relative;
		box-sizing: border-box;
		width: 100vw;
		height: 500px;
    margin-top: 20px;
		display: flex;
		flex-direction: column;
		//justify-content: center;
		align-items: center;

    img {
      // max-width: 90%;
			// max-height: 85%;
			// transition: opacity .3s ease;
			// @media screen and (min-width: 720px) {
			// 	max-width: 56%;
			// 	max-height: 83%;
			// }
      height: 450px;
      width: auto;
    }
  }
</style>

<script>
  export default {
    data(){
      return {
        photos: [
          {src: "http://blog.grainedephotographe.com/wp-content/uploads/2017/07/%C2%A9-Bilal-Bustun-photographer-05-1000x1000.jpg"},
          {src: "http://blog.grainedephotographe.com/wp-content/uploads/2017/07/%C2%A9-Bilal-Bustun-photographer-04-1000x1000.jpg"},
          {src: "https://scontent-cdg2-1.cdninstagram.com/vp/5e588fe54ef9297bc65d98b674d6b645/5B027745/t51.2885-15/s750x750/sh0.08/e35/14033666_285951725118222_497234296_n.jpg"},
          {src: "http://blog.grainedephotographe.com/wp-content/uploads/2017/07/%C2%A9-Bilal-Bustun-photographer-02.jpg"},
          {src: "http://blog.grainedephotographe.com/wp-content/uploads/2017/07/%C2%A9-Bilal-Bustun-photographer-03-1000x1000.jpg"},
          ]
      }
    }
  }
</script>
