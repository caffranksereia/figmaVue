<template>
<div class="home">
    <div class="sidebar">
        <div class="imgRene">
            <img src="" alt="">
        </div>
        <div class="menu-itens">
            <router-link to="/home">Empresa</router-link> 
            <router-link to="#camisaria">Camisaria</router-link> 
            <router-link to="/alfataria">Alfataria</router-link> 
            <router-link to="/depoimento">Depoimento</router-link> 
            <router-link to="#contato">Contato</router-link> 

        </div>
    </div>
    <div class="PagComponents">
        <Empresa/>
        <div id="camisaria">
             <Camisaria/> 
        </div>
       
        <Alfataria/>
        <Depoimento/>
        <div id="contato">
            <Contato/>
        </div>
        
    </div>
</div>
   
</template>
<script>
    import Empresa from '../components/Empresa'
    import Depoimento from '../components/Depoimento'
    import Alfataria from '../components/Alfataria'
    import Contato from '../components/Contato'
    import Camisaria from '../components/Camisaria'

export default {
    components:{
        Depoimento,
        Alfataria,
        Contato,
        Camisaria,
        Empresa
    }
}
</script>
<style scoped>

#nav {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  width: 100%;
}

#nav a {
  display: block;
  float: right;
  margin: 2px;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover{
  transition:0.5s;
  background-color: #e4e4e4;
  color: #333;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.PagComponents{
    margin-top: 50px;
}
</style>