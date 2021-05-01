<template>
<div class="Contato">
    <h1>Contato</h1>
    <div class="FormContato">
        <div class="FormTel">
            <h3>Telefones</h3>
            <p>+55 (11)3088-0757</p>
        </div>
        <div class="FEmail">
            <h3>Email</h3>
            <p>renee@reneeTrajar.com.br</p>
        </div>
        <div class="FormAtendimento">
            <h3>Atendimento Personalizado</h3>
            <button>Clique Aqui!</button>
        </div>
        <form action="">
            <div class="nomForm">
                <input type="text">
                <label for="Nome">Nome</label>
            </div>
            <div class="emailForm">
                <input type="text">
                <label for="Email">Email</label>
            </div>
            <div class="textAreaForm">
                <label for="">Mensagem</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>  
            </div> 
            
        </form>
    </div>
    <div class="footer">
       <div class="imgRenee">
           <img src="" alt="">
           <div class="cnpjRenee">
               <h4>CNPJ:</h4>
               <p>04.487.685/0001-01</p>
           </div>
       </div>
        Copyright 2021 &copy; Renee Trajar - todos os direitos reservados 
    </div>

</div>
</template>
<script>
export default {
    name:
        'Contato'
}
</script>