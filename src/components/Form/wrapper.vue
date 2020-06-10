<template>
  <div>
    <!-- <component v-bind:is="currentView" /> -->
    <FormTshirtPreview :selectedImg="imgSource" :placement="placement" />
    cost: {{ cost }}
    <FormImagePlacement />
    <FormImageChoice />
    <FormImageStyle />
    <FormSummary />
    <ThanksPage />
  </div>
</template>
<script>
  import { required, minLength, between } from "vuelidate/lib/validators";

  export default {
    data() {
      return {
        cost: 0,
        placement: "front",
        style: "?normal",
        step: [1, 2, 3, 4, 5],
        currentStep: 1,
        imgSource: "https://picsum.photos/id/1/200/200/?normal"
      };
    },
    mounted() {
      this.$root.$on("update::placement", placement => {
        this.placement = placement;
      });
      this.$root.$on("update::img-effect", style => {
        this.style = style;
      });
      this.$root.$on("update::img", imgSource => {
        this.imgSource = imgSource + this.style;
      });
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
  };
</script>
<style scoped>
.div {
  width: 50%;
  display: flex;
  justify-content: center;
}
</style>