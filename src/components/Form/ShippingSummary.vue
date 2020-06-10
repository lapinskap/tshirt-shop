<template>
  <div>
    <b-form-group>
      <input type="text" v-model="name" />
    </b-form-group>
    <b-form-group>
      <input type="text" v-model="surname" />
    </b-form-group>
    <b-form-group>
      <input type="date" v-model="birth_date" />
    </b-form-group>
    <b-form-group>
      <input type="text" v-model="address" />
    </b-form-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: "",
        surname: "",
        birth_date: null,
        address: ""
      };
    }
  };
</script>
<style scoped>
</style>