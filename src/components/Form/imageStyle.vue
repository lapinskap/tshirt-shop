<template>
  <b-form-group>
    <p>Please select image style</p>
    <b-form-radio
      @click.native="updateImgEffect"
      id="checkbox"
      value
      v-model="imgEffect"
    ></b-form-radio>
    <label for="checkbox">Normal</label>
    <b-form-radio
      @click.native="updateImgEffect"
      id="checkbox"
      value="?blured"
      v-model="imgEffect"
    ></b-form-radio>
    <label for="checkbox">Blured</label>
    <b-form-input v-if="imgEffect === '?blured'" v-model="blurScale" />
    <b-form-radio
      @click.native="updateImgEffect"
      id="checkbox"
      value="?grayscale"
      v-model="imgEffect"
    ></b-form-radio>
    <label for="checkbox">Black and White</label>
  </b-form-group>
</template>
<script>
  export default {
    data() {
      return {
        imgEffect: "",
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