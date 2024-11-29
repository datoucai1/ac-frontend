<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/control-panel">控制面板</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  background-color: #42b983;
  padding: 1rem;
  margin-bottom: 2rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

nav a:hover {
  text-decoration: underline;
}
</style>
