let mesVerao = document.getElementById('number-mv');
let diaVerao = document.getElementById('number-dv');
let mesInverno = document.getElementById('number-mi');
let diaInverno = document.getElementById('number-di');
let buttonMv = document.getElementById('MV');
let buttonDv = document.getElementById('DV');
let buttonMi = document.getElementById('MI');
let buttonDI = document.getElementById('DI'); 


let calcMv = () =>{
   
    let result = parseFloat((mesVerao.value) * 120) ;
    alert(`À potencia produzida em Mêses de Verão é  ${result.toLocaleString()} Kw`)
    location.href = 'index.html'
}

let calcDv = () =>{
    let result = parseFloat((diaVerao.value) * 120 /30 ) ;
    alert(`Á potencia produzida em Dias de de Verão é ${result.toLocaleString()} Kw`)
    location.href = 'index.html'
}

let calcMi = () =>{
    let result = parseFloat((mesInverno.value) * 120) ;
    let porcentagem = result * 20 /100
    let soma = result - porcentagem 
    alert(`Á potencia produzida em Mêses de Inverno é ${soma.toLocaleString()} Kw`)
    location.href = 'index.html'
}

let  calcDi = () =>{
    let result = parseFloat((diaInverno.value) * 120) ;
    let porcentagem = result * 20 / 100
    let soma = result - porcentagem 
    let somaT = soma / 30
    alert(`Á potencia produzida em Dias de Inverso é ${somaT.toLocaleString()} Kw`);
    location.href = 'index.html'
    
}
buttonMv.addEventListener('click',calcMv);
buttonDv.addEventListener('click', calcDv);
buttonMi.addEventListener('click',calcMi);
buttonDI.addEventListener('click',calcDi);

