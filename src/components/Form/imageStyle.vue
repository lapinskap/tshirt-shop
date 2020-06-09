<template>
<div>
    <p>Please select image style</p>
        <input type="checkbox" id="checkbox" v-model="color_BW">
<label for="checkbox">Normal</label>
        <input type="checkbox" id="checkbox" v-model="blured">
<label for="checkbox">Blured</label>

    <input type="checkbox" id="checkbox" v-model="color_BW">
<label for="checkbox">Black and White</label>

</div>
</template>
<script>
export default {
    data() {
        return {
            blured: false,
            color_BW: false,
        }
    }
}
</script>