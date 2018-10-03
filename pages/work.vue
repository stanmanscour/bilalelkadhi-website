<template>
  <container>
    <div class="b-work__coming-soon">
        <p>Coming soon</p>
    </div>
  </container>
</template>

<script>
  export default {
    head(){
      return {
        title: 'Work - Bilal El Kadhi',
        meta: [
          { hid: 'description', name: 'description', content: 'Professional work' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .b-work {
     &__coming-soon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 20px);
      p {
        font-size: 15px;
        font-family: 'Helvetica Neue';
        color: black;
        font-weight: 500;
        letter-spacing: 4px;
        text-transform: uppercase;
      }
    }
  }
</style>