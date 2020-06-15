<template>
  <b-form-group class="col-sm-12">
    <p>Please select image style</p>
    <b-form-radio
      @click.native="updateImgEffect"
      value="?normal"
      v-model="imgEffect"
    >Normal</b-form-radio>
    <b-form-radio
      @click.native="updateImgEffect"
      value="?blured"
      v-model="imgEffect"
    >Blured</b-form-radio>
    <div v-if="imgEffect === '?blured'">
      <b-form-input v-model="blurScale" />
      <b-button class="btn btn-default">+</b-button>
      <b-button class="btn btn-default">-</b-button>
    </div>
    <b-form-radio
      @click.native="updateImgEffect"
      value="?grayscale"
      v-model="imgEffect"
    >Black and White</b-form-radio>
  </b-form-group>
</template>
<script>
  export default {
    data() {
      return {
        imgEffect: "?normal",
        blurScale: 1
      };
    },
    methods: {
      updateImgEffect() {
        this.$root.$emit("update::img-effect", this.imgEffect);
      }
    }
  };
</script>