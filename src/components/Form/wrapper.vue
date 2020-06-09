<template>
<div>
<!-- <component v-bind:is="currentView" /> -->
<FormImagePlacement />
<FormImageChoice />
<FormImageStyle />
<FormSummary />
<ThanksPage />
</div>
</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
// import Summary from './Summary.vue';
// import ImagePlacement from './ImagePlacement';

export default {
  data() {
    return {
      name: '',
      age: 0,
      checked: false,
      step: [1,2,3,4,5],
      currentStep: 1,
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
  }
}

</script>
<style scoped>
.div {
    width: 50%;
    display: flex;
    justify-content: center;
}
</style>