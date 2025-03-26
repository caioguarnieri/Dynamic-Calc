function adicionar(){

let userNumber = Number(window.document.getElementById('fnum').value)
let userNumberedata = userNumber;
let validationResult = '';
let numeroAdicionado = document.createElement("option");
let textoDoNumero = document.createTextNode(`O número ${userNumberedata} foi adicionado`);
numeroAdicionado.appendChild(textoDoNumero);
let teste = document.getElementById('flista').appendChild(numeroAdicionado);


function validar0a100(userNumberedata){
    if (userNumberedata > -1 && userNumberedata < 101){
    validationResult = true;
}else{
   validationResult = false ;
};


 }
}