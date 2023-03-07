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
      <img class="poster" :src="poster" />
      <div class="details">
        <h2>{{ title }}</h2>
        <h3>{{ year }}</h3>
        <!-- <p>{{ plot }}</p> -->
      </div>
    </div>
  </template>

<style lang="css">

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 35px;
    }

    .poster {
        max-width: 100%;
        margin-right: 20px;
    }

    .details {
        flex: 1;
        margin-top: 35px;
    }

    @media (max-width: 700px) {
        .container {
            flex-direction: column;
            margin-bottom: 35px;
        }

        .poster {
            margin-right: 0;
            margin-bottom: 20px;
        }

        .details {
            margin-top: 0;
        }
    }

</style>