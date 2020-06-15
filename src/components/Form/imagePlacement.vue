
<template>
  <b-form-group class="col-sm-12">
    <p>Please select image placement</p>
    <b-form-radio
      v-on:click.native="updatePlacement"
      name="placement_front"
      v-model="placement"
      value="front"
    >Front</b-form-radio>
    <b-form-radio
      v-on:click.native="updatePlacement"
      name="placement_back"
      v-model="placement"
      value="back"
    >Back</b-form-radio>
    <b-form-radio
      v-on:click.native="updatePlacement"
      name="placement_both"
      v-model="placement"
      value="both sides"
    >Both sides</b-form-radio>
    <div class="mt-3">
      Selected:
      <strong>{{ placement }}</strong>
    </div>
  </b-form-group>
</template>
<script>
  export default {
    data() {
      return {
        placement: null
      };
    },
    methods: {
      updatePlacement() {
        this.$root.$emit("update::placement", this.placement);
      }
    }
  };
</script>