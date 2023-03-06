<template>
  <h1>Search for a movie title:</h1>
  <p>Your web service to obtain movie information.</p>
  <div id="searchBar">
    <input 
      type="text" 
      v-model="searchQuery" 
      @keydown.enter="getMovie" 
    />
    <button @click="getMovie">SEARCH</button>
  </div>
  <ul>
    <MovieCard
      v-for="result in details"
      :key="result.Title"
      :title="result.Title"
      :poster="result.Poster"
      :year="result.Year"
      :plot="result.Plot"
    />
  </ul>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "Home",
  components: { MovieCard },
  data() {
    return {
      url: "http://www.omdbapi.com/?s=",
      searchQuery: "",
      apiKey: "&apikey=354c71c8",
    };
  },
  methods: {
    getMovie() {
      console.log(this.searchQuery);
      this.url = this.url.concat(`${this.searchQuery.trimEnd().split(' ').join('+') + this.apiKey}`);
      console.log(this.url);
      this.$store.dispatch("getMovie", this.url);
      this.searchQuery = "";
      this.url = "http://www.omdbapi.com/?s=";
      console.log(this.details);
    },
  },
  computed: {
    details() {
      return this.$store.state.results;
    },
  },
};
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');

input {
  max-width: 200px;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 0%;
}

button {
  margin: 15px;
  margin-left: 10px;
}

ul {
  padding:0;
}

@media (min-width: 768px) {
  .button {
    padding: 13px 50px 13px;
  }
}

</style>