let op = prompt("Qual operação você deseja? Digite * para multiplicação, / para divisão, - para divisão e + para soma ");
let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite o segundo número dessa operação: ");


switch(op){
    case "*": document.body.innerHTML ="<h1>O resultado é " +  num1 * num2 + "</h1>"
        break;
    case "/":
        resultado = num1 / num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "+":
        resultado = num1 + num2;
        break;
    default:
        resultado = "Operação inválida";
    location.reload()
    
    alert("O resultado é: " + resultado)
}
console.log (resultado);
