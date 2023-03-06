<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  #app, body {
    width: 100%;
    height: 100%;
    background-color: #E7DFD8;
    color: #231F20;
  }

  .container {
    width: 90%;
  }

  h1,
  h2 {
    font-family: 'Calistoga', cursive;
    margin-bottom: 15px;
  }

  h3 {
    font-family:Georgia, 'Times New Roman', Times, serif;
  }

  a, a:visited {
    color: #231F20;
  }

  a:hover {
    text-decoration: underline;
    color: #231F20;
  }

  button {
  border: 1px solid;
  padding: 0.6em 1.2em;
  font-size: 0.8em;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #231F20;
  }

  button:hover {
    border-color: white;
  }

</style>
