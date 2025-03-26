let numbers = [];
function adicionar(){

let userNumber = Number(window.document.getElementById('fnum').value)
let userNumberedata = userNumber;


//let numeroAdicionado = document.createElement("option");
//let textoDoNumero = document.createTextNode(`O número ${userNumberedata} foi adicionado`);
//numeroAdicionado.appendChild(textoDoNumero);
//let teste = document.getElementById('flista').appendChild(numeroAdicionado);

if (validar0a100(userNumberedata)){
console.log('DENTRO');
numbers.push(userNumberedata);
let numeroAdicionado = document.createElement("option");
let textoDoNumero = document.createTextNode(`O número ${userNumberedata} foi adicionado`);
numeroAdicionado.appendChild(textoDoNumero);
let teste = document.getElementById('flista').appendChild(numeroAdicionado);

userNumber.value = '';
  
    console.log(numbers);
    console.log(userNumber);
}else{
    window.alert('O NUMERO JA EXISTE NA LISTA OU ESTÁ FORA DE 0 Á 100')
    
}

function validar0a100(n){
    if (n > -1 && n < 101){
    return  true;
}else{
   return false ;
};


 }
}