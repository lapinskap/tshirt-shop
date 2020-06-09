<template>
<b-form-group>
    <p>Please select an image</p>
    <img :src="imgSource"/>
    <b-button v-bind:disabled="checkID" v-on:click="decrementImgID">Previous Image</b-button>
    <b-button v-on:click="incrementImgID">Next Image</b-button>
</b-form-group>
</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
data() {
    return {
      imgID: 1,
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },
  computed: {
    imgSource: function() {
      return `https://picsum.photos/id/${this.imgID}/250/200/`
    },
    checkID: function() {
      return this.imgID === 0;
    },
  },
  methods: {
    incrementImgID() {
      this.imgID = this.imgID + 1;

      this.$root.$emit('update::img', this.imgSource);
    },
    decrementImgID() {
      this.imgID = this.imgID - 1;

      this.$root.$emit('update::img', this.imgSource);
    }
  }
}
</script>