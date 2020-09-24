<template>
    <div class="position-absolute w-100 h-100 customBg">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
</template>

<script>
    export default {
        name:"Loading"
    }
</script>

<style scoped>
    .customBg{
        background-color: rgba(0, 0, 0, .20);
        z-index: 99;
        text-align: center;
        padding: 30px;
    }
</style>