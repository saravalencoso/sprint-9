<template>
    <nav>
      <ul>
        <router-link to="/">
          <li>HOME</li>
        </router-link>

        <router-link to="/login">
          <li>LOG IN</li>
        </router-link>

        <router-link to="/register">
          <li>REGISTER</li>
        </router-link>
      </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');

nav ul {
  list-style: none;
  margin: 15px 0 25px 0;
  padding: 0;
  overflow: hidden;
  display:inline-block;
  justify-content: space-around;
}

nav li {
  float: left;
  font-family: 'Raleway', sans-serif;
  font-size: 0.7em;
  font-weight: 700;
  margin:0 20px 0 20px;
  text-align:center;
}

nav li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: #231F20;
}

li:hover {
  text-decoration: underline;
  color: #231F20;
}

@media screen and (max-width: 400px) {
  nav ul {
    flex-direction: column;
    text-align:center;
  }

  nav li {
    float: none;
    text-align:center;
  }

  li:hover {
    text-decoration: underline;
    color: #231F20;
  }

}

</style>