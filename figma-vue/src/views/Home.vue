<template>
  <div class="home">
    <Dashboard/>
    <Empresa/>
    <Camisaria/>
    <Alfataria/>
    <Depoimento/>
    <Contato/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Empresa from '../components/Empresa'
import Depoimento from '../components/Depoimento'
import Alfataria from '../components/Alfataria'
import Contato from '../components/Contato'
import Camisaria from '../components/Camisaria'
import Dashboard from '../components/Dashboard.vue'

export default {
  name: 'Home',
  components:{
    Dashboard,
    Depoimento,
    Alfataria,
    Contato,
    Camisaria,
    Empresa
  }
  
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>