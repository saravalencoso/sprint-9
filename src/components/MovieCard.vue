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
    <div class="container">
      <img class="left" :src="poster" />
      <div class="right">
        <h2>{{ title }}</h2>
        <h3>{{ year }}</h3>
        <p>{{ plot }}</p>
      </div>
    </div>
  </template>

<style lang="css">

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 35px;
        max-width: 750px; 
        margin: 0 auto; 
        height: 100%; 
    }

    .left {
        flex: 1;
        max-width: 100%;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .right {
        flex: 1;
        margin: 0; 
    }

    img {
        border: 10px solid white;
    }

    @media (max-width: 700px) {
        .container {
            flex-direction: column;
            margin-bottom: 35px;
        }

        .left {
            margin-right: 0;
            margin-bottom: 20px;
        }

        .right {
            margin-top: 0;
        }
    }

</style>