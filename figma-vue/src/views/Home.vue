<template>
  <div class="home">
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
export default {
  name: 'Home',
  components:{
    Depoimento,
    Alfataria,
    Contato,
    Camisaria,
    Empresa
  }
  
}
</script>
