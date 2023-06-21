const form = document.getElementById('form-name');
/*função para validar se o nome vai ter mais de 3 palavras ( separa o nome em uma array onde o ' ' vai ser o separador, no caso Yago Gomes Varela --> ['Yago', 'Gomes', 'Varela'] que é igual a 3, entao seria valido*/
    function validarNome(nomeCompleto) {
        const nomeComoArray = nomeCompleto.split(' ');
        return nomeComoArray.length >= 3; /*vai retornar true ou false*/
    }
/*Evento do tipo submit no form */ 
    form.addEventListener('submit', function(e) {
        let formIsValid = false
        e.preventDefault();

        const nomeBeneficiario = document.getElementById('nome-beneficiario');
        const numeroContaBeneficiario = document.getElementById('num-conta');
        const valorDeposito = document.getElementById('valor-deposito');
        const menssagem = `Montante de: ${valorDeposito.value} depositado na conta do cliente: ${nomeBeneficiario.value} - Conta: ${numeroContaBeneficiario.value}`;
        
        formIsValid = validarNome(nomeBeneficiario.value)
        if(formIsValid) {
            alert(menssagem)
        } else {
            alert('Escreva seu no completo')
        }
    })

console.log(form)