<template>
<div>
    <img class="img-front" v-if="placement === 'front' || 'both sides'" :src="selectedImg" />
    <img class="img-back" v-if="placement ===  'back' || 'both sides'" :src="selectedImg" />
    <img class="t-shirt" src="../../utils/image.jpg" />
</div>
</template>
<script>
export default {
data() {
    return {
      placement: null,
      selectedImg: '',
    }
  },
}
</script>
<style scoped>
.t-shirt {
  max-width: 500px;
}
.img-front {
  position: absolute;
  z-index: 100;
}
.img-back {
  position: absolute;
  z-index: 100;
}
</style>