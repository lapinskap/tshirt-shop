<template>
<div>
    <p>Please import an image</p>
    <input type="file" />
</div>
</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
data() {
    return {
      name: '',
      age: 0,
      checked: false,
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