let numbers = [];

function adicionar() {
  let userNumber = Number(window.document.getElementById("fnum").value);
  let userNumberedata = userNumber;
  if (validar0a100(userNumberedata)) {
    console.log("DENTRO");
    numbers.push(userNumberedata);
    let numeroAdicionado = document.createElement("option");
    let textoDoNumero = document.createTextNode(
      `O número ${userNumberedata} foi adicionado`
    );
    numeroAdicionado.appendChild(textoDoNumero);
    let teste = document.getElementById("flista").appendChild(numeroAdicionado);

    userNumber.value = "";
  } else {
    window.alert("O NUMERO JA EXISTE NA LISTA OU ESTÁ FORA DE 0 Á 100");
  }
  function validar0a100(n) {
    if (n > -1 && n < 101) {
      return true;
    } else {
      return false;
    }
  }
}

function finalizar() {
  let answer = window.document.getElementById("res");
  let totalNumbers = numbers.length;
  let biggerNumber = Number(Math.max(...numbers));
  let smallestNumber = Number(Math.min(...numbers));
  let soma1 = 0;
  let somar = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    soma1
  );
  let average = somar / totalNumbers;

  answer.innerHTML = `<p>Ao todo temos <strong>${totalNumbers}</strong> numeros cadastrados</p>
                        <p>O maior número é <strong>${biggerNumber}</strong> </p> 
                        <p>O menor número é <strong>${smallestNumber}</strong> </p>     
                        <p>A soma de todos os números é <strong>${somar}</strong> </p>
                        <p>A soma de todos os números é <strong>${average}</strong> </p> `;
}
