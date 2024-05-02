let nome = prompt("Digite seu nome de usúario:")

let num1 = prompt("Digite sua primeira nota?")
num1 = eval(num1);

let num2 = prompt("Digite sua segunda nota?")
num2 = eval(num2);

let media = ((num1 + num2)/2)
alert("Bem vindo(a)" + nome + "!")

if (num1 <0 || num2>10){
    alert("Erro! O valor da primeira nota está errado!")
    location.reload()
}
else{
    alert("Ok " + nome + " a sua média é: " + media)

    if(media >= 6){
        alert("Parabéns " + nome + "!" + " Você foi aprovado(a)!")
        document.body.innerHTML = "<h1>Parabéns " + nome + " você foi aprovado(a)!</h1>"
    }
    else{
        alert("Que pena:(" + nome + "você foi reprovado(a)")
        document.body.innerHTML = "<h1>Que pena " + nome + " você foi reprovado!"
    }
}
