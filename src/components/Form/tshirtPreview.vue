<template>
  <div>
    <div class="container">
      <img class="t-shirt" src="../../utils/image.jpg" />
      <img
        class="img-front"
        v-if="placement === 'front' || 'both sides'"
        :src="selectedImg"
      />
      <img
        class="img-back"
        v-if="placement ===  'back' || 'both sides'"
        :src="selectedImg"
      />
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      selectedImg: String
    },
    data() {
      return {
        placement: null
      };
    }
  };
</script>
<style scoped>
div {
  position: inherit;
}
.container {
  position: relative;
}
.t-shirt {
  max-width: 500px;
  position: absolute;
}
.img-front,
.img-back {
  position: absolute;
  z-index: 100;
  max-width: 100px;
  height: 100px;
  top: 50px;
}
.img-back {
  left: 0px;
}
</style>