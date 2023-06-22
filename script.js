const form = document.getElementById('form-name');
/*função para validar se o nome vai ter mais de 3 palavras ( separa o nome em uma array onde o ' ' vai ser o separador, no caso Yago Gomes Varela --> ['Yago', 'Gomes', 'Varela'] que é igual a 3, entao seria valido*/
const nomeBeneficiario = document.getElementById('nome-beneficiario');
    function validarNome(nomeCompleto) {
        const nomeComoArray = nomeCompleto.split(' ');
        return nomeComoArray.length >= 3; /*vai retornar true ou false*/
    }
/*Evento do tipo submit no form */ 
    form.addEventListener('submit', function(e) {
        let formIsValid = false
        e.preventDefault();

        const numeroContaBeneficiario = document.getElementById('num-conta');
        const valorDeposito = document.getElementById('valor-deposito');
        const descricao = document.getElementById('descricao');
        const menssagem = `Montante de: <b>R$${valorDeposito.value}</b> depositado na conta do cliente: <b>${nomeBeneficiario.value}</b> - Conta: <b>${numeroContaBeneficiario.value}</b>`;
        
        formIsValid = validarNome(nomeBeneficiario.value)
        if(formIsValid) {
            const containerMensagem = document.querySelector('.success-mensage')
            containerMensagem.innerHTML = menssagem;
            containerMensagem.style.display = 'block';
            nomeBeneficiario.value = '';
            numeroContaBeneficiario.value = '';
            valorDeposito.value = '';
            descricao.value = '';
        } else {
            nomeBeneficiario.style.border = '1px solid red';
            const errorMensage = document.querySelector('.error-mensage').style.display = 'block';
        }
    })

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(nomeBeneficiario.value)
}) 