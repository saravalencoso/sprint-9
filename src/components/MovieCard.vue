<script>
export default {
    name: "Home",
    props: {
        title: {
            type: String,
            required: true,
        }, 
        year: {
            type: Number,
            required: true
        },
        plot: {
            type: String,
            required: true
        },
        poster: {
            type: String, 
            required: true
        }
    }
}
</script>

<template>
    <h2>{{ title }}</h2>
    <h3>{{ year }}</h3>
    <!-- <p>{{ plot }}</p> -->
    <img :src="poster" />
</template>

<style lang="css">
    h2 {
        margin-top: 35px;
    }

</style>