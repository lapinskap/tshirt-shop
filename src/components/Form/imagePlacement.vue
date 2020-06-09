
<template>
<div>
    <p>Please select image placement</p>
        <input type="checkbox" id="placement_front" v-model="placement_front">
<label for="placement_front">Front</label>
    <input type="checkbox" id="placement_back" v-model="placement_back">
<label for="placement_back">Back</label>
    <input type="checkbox" id="placement_both" v-model="placement_both">
<label for="placement_both">Both sides</label>

</div>
</template>