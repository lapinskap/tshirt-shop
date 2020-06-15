<template>
  <div>
    <!-- <component v-bind:is="currentView" /> -->
    <div class="container">
      <FormTshirtPreview
        :selectedImg="form.imgSource"
        :placement="form.placement"
      />
    </div>
    <div class="test">
      cost: {{ form.cost }}
      <FormImagePlacement v-show="currentStep ===  1" />
      <FormImageChoice v-show="currentStep ===  2" />
      <FormImageStyle v-show="currentStep ===  3" />
      <FormSummary v-show="currentStep ===  4" />
      <FormShippingSummary v-show="currentStep === 5" />
      <FormShippingInfo v-show="currentStep === 6" />
      <ThanksPage v-show="currentStep ===  7" />
      <button @click="previousStep" class="btn btn-default">Powrót</button>
      <button @click="nextStep" class="btn btn-default">Dalej</button>
    </div>
  </div>
</template>
<script>
  import { required, minLength, between } from "vuelidate/lib/validators";

  export default {
    data() {
      return {
        step: [1, 2, 3, 4, 5],
        currentStep: 1,
        form: {
          cost: 0,
          placement: "front",
          style: "?normal",
          imgSource: "https://picsum.photos/id/1/200/200/?normal"
        }
      };
    },
    mounted() {
      this.$root.$on("update::placement", placement => {
        this.form.placement = placement;
      });
      this.$root.$on("update::img-effect", style => {
        this.form.style = style;
        this.updateImgSource();
      });
      this.$root.$on("update::img", imgSource => {
        this.form.imgSource = imgSource + this.form.style;
      });
      this.$root.$on("update::cost", cost => {
        this.form.cost = cost;
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
    },
    methods: {
      nextStep() {
        this.currentStep = this.currentStep + 1;
      },
      previousStep() {
        this.currentStep = this.currentStep - 1;
      },
      updateImgSource() {
        let img = this.form.imgSource;
        if (img.includes("?")) {
          img = img.substring(0, img.indexOf("?")) + this.form.style;
          this.form.imgSource = img;
        } else {
          img = img + this.form.style;
          this.form.imgSource = img;
        }
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
.test {
  padding-top: 200px;
}
</style>