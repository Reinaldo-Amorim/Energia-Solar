

let nome = document.getElementById('name');
let telefone = document.getElementById('tel');
let email = document.getElementById('email');
let potencia = document.getElementById('watt');
let potencia2 = document.getElementById('watt2');
let buttonSimu = document.getElementById('buttonSimulacao');
    
    
let simulacao = () =>{
    let extra = parseFloat(potencia2.value || 0);
    let soma = parseFloat(potencia.value +++ extra );
    let kw = parseFloat((soma) /120 )
    alert(`Voçê vai precisar de um sistema de ${kw.toLocaleString()} de potencia`);
    alert('Voce sera redirecionado para nossa pagina de Simulação');
    window.location.href = 'indexSimulacao.html'

}

buttonSimu.addEventListener('click',simulacao)                    