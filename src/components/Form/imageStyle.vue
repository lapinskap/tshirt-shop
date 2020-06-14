<template>
  <div class="col-sm-12">
    <p>Please select image style</p>
    <b-form-group class="col-sm-4">
      <b-form-radio
        @click.native="updateImgEffect"
        id="checkbox"
        value="?normal"
        v-model="imgEffect"
      ></b-form-radio>
      <label for="checkbox">Normal</label>
    </b-form-group>
    <b-form-group class="col-sm-4">
      <b-form-radio
        @click.native="updateImgEffect"
        id="checkbox"
        value="?blured"
        v-model="imgEffect"
      ></b-form-radio>
      <label for="checkbox">Blured</label>
      <div v-if="imgEffect === '?blured'">
        <b-form-input v-model="blurScale" />
        <b-button class="btn btn-default">+</b-button>
        <b-button class="btn btn-default">-</b-button>
      </div>
    </b-form-group>
    <b-form-group class="col-sm-4">
      <b-form-radio
        @click.native="updateImgEffect"
        id="checkbox"
        value="?grayscale"
        v-model="imgEffect"
      ></b-form-radio>
      <label for="checkbox">Black and White</label>
    </b-form-group>
  </div>
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