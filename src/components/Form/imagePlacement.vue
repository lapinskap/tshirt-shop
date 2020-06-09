
<template>
  <b-form-group>
    <p>Please select image placement</p>
    <b-form-group>
        <b-form-radio name="placement_front" id="placement_front" v-model="placement" value="front"></b-form-radio>
        <label for="placement_front">Front</label>
        <b-form-radio name="placement_back" id="placement_front" v-model="placement" value="back"></b-form-radio>
        <label for="placement_back">Back</label>
        <b-form-radio name="placement_both" id="placement_front" v-model="placement" value="both sides"></b-form-radio>
        <label for="placement_both">Both sides</label>
    </b-form-group>
        <div class="mt-3">Selected: <strong>{{ placement }}</strong></div>
</b-form-group>
</template>
<script>
export default {
  data() {
    return {
      placement: null,
    }
  },
}

</script>