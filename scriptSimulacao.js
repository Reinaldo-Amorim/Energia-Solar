
let parcela = document.getElementById('parcela');
let button = document.getElementById('buttonSimu');
let entrada = document.getElementById('entrada');
let placas = document.getElementById('placas');
let inversor = document.getElementById('inversor')

document.getElementById('buttonSimu').disabled = true; //desabilita o botaçao no inicio
document.getElementById('input').addEventListener('input', function(event){//cria um evento listenner que escuta mudanças no input
 
    let inputEntrada = document.getElementById('entrada').value;

    if(inputEntrada !== null && inputEntrada !== ''){
        document.getElementById('buttonSimu').disabled = false;
    }else{
        document.getElementById('buttonSimu').disabled = true;
    }

    let inputParcela = document.getElementById('parcela').value;

    if(inputParcela !== null && inputParcela !== ''){
        document.getElementById('buttonSimu').disabled = false;
    }else{
        document.getElementById('buttonSimu').disabled = true;
    }

    let inputPlaca = document.getElementById('placas').value;

    if(inputPlaca !== null && inputPlaca !== ''){
        document.getElementById('buttonSimu').disabled = false;
    }else{
        document.getElementById('buttonSimu').disabled = true;
    }

    let inputInversor = document.getElementById('inversor').value;

    if(inputInversor !== null && inputInversor !== ''){
        document.getElementById('buttonSimu').disabled = false;
    }else{
        document.getElementById('buttonSimu').disabled = true;
    }


});

let simulacao = () =>{
    let promessa = new Promise ((resolve , reject ) => {
         
        let valorInicial = parseFloat(entrada.value);
        let dividido = parseFloat(parcela.value);
        let valorInversor = parseFloat({
            inversor1meio : 1.250 ,
            inversor3 : 2.500,
            inversor5 : 4.333,
            inversor8 : 7.500,
            inversor10 : 9.166,
            inversor15 : 12.500,
            inversor20 : 14.166,
            inversor30 : 18.333,
            inversor40 : 23.333
        });
        let placasSol = parseFloat(placas.value * 1.500);
         
        

        if ( (valorInicial + valorInversor + placasSol ) / dividido )  {
            resolve()
        }else{
            reject ('errado')
        }
       
    })
    
    promessa.then((resultado) =>{
        alert(resultado)
    }).catch((erro) => {
        alert (erro)
    })
    
}

button.addEventListener('click' , simulacao )

