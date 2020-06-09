<template>
<div>
    <img class="img-front" v-if="placement === 'front' || 'both sides'" :src="selectedImg" />
    <img class="img-back" v-if="placement ===  'back' || 'both sides'" :src="selectedImg" />
    <img class="t-shirt" src="../../utils/image.jpg" />
</div>
</template>
<script>
export default {
props: {
  selectedImg: String,
},
data() {
    return {
      placement: null,
    }
  },
}
</script>
<style scoped>
.t-shirt {
  max-width: 500px;
}
.img-front, .img-back {
  position: absolute;
  z-index: 100;
  max-width: 100px;
  height: 100px;
}
</style>