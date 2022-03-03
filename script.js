function mitadas() {
  var num1 = parseFloat(prompt("Informe o ano atual"));
  var num2 = parseFloat(prompt("Informe o seu ano de nascimento"));
  
  var resultado = num1 - num2;
    document.getElementById("q02").innerHTML = resultado;
}

try {
  var idade = (a, b) => {return a - b}
  }
catch (erro) {
  console.error("Erro: " + erro); 
}
