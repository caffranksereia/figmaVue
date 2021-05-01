<template>
  <div class="hello">
    <Camisaria/>
    <Alfataria/>
    <Depoimento/>
    <Contato/>
  </div>
</template>

<script>
import Camisaria from './Camisaria'
import Alfataria from './Alfataria.vue'
import Depoimento from './Depoimento.vue'
import Contato from './Contato.vue'
export default {
  name: 'Home',
  components:{
    Camisaria,
    Alfataria,
    Depoimento,
    Contato
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
