<template>
  <h1>Search for a movie title:</h1>
  <p>Your web service to obtain movie information.</p>
  <div class="nav-container">
    <input 
      type="text" 
      placeholder="Type something..."
      v-model="searchQuery" 
      @keydown.enter="getMovie" 
      class="search"
    />
    <button 
      @click="getMovie"
      class="button"
    >SEARCH</button>
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
    }
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

.nav-container {
  flex-direction: column;
  margin-bottom: 35px;
}

.search {
  max-width: 100%;
  padding: 10px;
}

@media (min-width: 700px) {
  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 40px;
    max-width: 600px; 
    margin: 0 auto; 
  }

  .search {
    flex: 1;
    max-width: 100%;
    padding: 10px;
    margin:0;
  }

  .button {
    flex: 1;
    max-width:20%;
  }
  
}

</style>