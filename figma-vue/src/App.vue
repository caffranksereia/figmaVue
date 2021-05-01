<template>
  <div id="nav">
    <router-link to="/home">Empresa</router-link> 
    <router-link to="/camisaria">Camisaria</router-link> 
    <router-link to="/alfataria">Alfataria</router-link> 
    <router-link to="/depoimento">Depoimento</router-link> 
    <router-link to="/contato">Contato</router-link> 
  </div>
  <router-view/>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color:blueviolet;
  padding: 30px;
}

#nav a {
  margin: 2px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
