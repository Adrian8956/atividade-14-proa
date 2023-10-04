//1 Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.
function exercicio1(){
    let numero1 = prompt("Digite o primeiro numero")
    let numero2 = prompt("Digite o segundo numero")

    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)

    if (numero1 > numero2){
        alert("O maior valor é: " + numero1)
    }
    else if (numero2 > numero1){
        alert("O maior valor é: " + numero2)
    }
    else{
        alert("Os numeros são iguais")
    }
}

//2 Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.
 
function exercicio2(){
    let numero = prompt("Digite um numero")
    numero = parseFloat(numero)

    if(numero < 0){
        alert("Número negativo: " + numero)
    }
    else if(numero > 0){
        alert("Número positivo: " + numero)
    }
    else{
        alert("Seu número é: " + numero)
    }
}

//3 Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
function exercicio3(){
    let numero1 = prompt("Digite o primeiro numero")
    let numero2 = prompt("Digite o segundo numero")
    let numero3 = prompt("Digite o terceiro numero")
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    numero3 = parseFloat(numero3)

    if(numero1 > numero2 && numero1 > numero3){
        alert("O maior valor é: " + numero1)
    }
    else if(numero2 > numero1 && numero2 > numero3){
        alert("O maior valor é: " + numero2)
    }
    else if(numero3 > numero1 && numero3 > numero2){
        alert("O maior valor é: " + numero3)
    }
    else{
        alert("Os numeros são iguais")
    }  
}



//4 Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
function exercicio4(){
    let numero1 = prompt("Digite o primeiro numero")
    let numero2 = prompt("Digite o segundo numero")
    let numero3 = prompt("Digite o terceiro numero")
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    numero3 = parseFloat(numero3)

    if(numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
        alert("A soma dos dois maiores é: " + (numero1 + numero2))
    }
    else if(numero1 > numero2 && numero1 > numero3 && numero2 < numero3){
        alert("A soma dos dois maiores é: " + (numero1 + numero3))
    }
    else if(numero2 > numero1 && numero2 > numero3 && numero3 > numero1){
        alert("A soma dos dois maiores é: " + (numero2 + numero3))
    }
    else if(numero3 > numero1 && numero3 > numero2 && numero2 > numero1){
        alert("A soma dos dois maiores é: " + (numero3 + numero2))
    }
    else{
        alert("Os numeros são iguais")
    }
}



//5 Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.
function exercicio5(){
    let numero1 = parseFloat(prompt("Digite o primeiro valor"))
    let numero2 = parseFloat(prompt("Digite o segundo valor"))
    let numero3 = parseFloat(prompt("Digite o terceiro valor"))
    let numero4 = parseFloat(prompt("Digite o quarto valor"))
    let numero5 = parseFloat(prompt("Digite o quinto valor"))
    let numero6 = parseFloat(prompt("Digite o sexto valor"))

    let media = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6
    alert(`Sua média é: ${media}`)
}


/* 6 Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos 
eles (considere que todos os números informados serão diferentes) */
 function exercicio6(){
    let numero1 = parseFloat(prompt("Digite o primeiro valor"))
    let numero2 = parseFloat(prompt("Digite o segundo valor"))
    let numero3 = parseFloat(prompt("Digite o terceiro valor"))
    let numero4 = parseFloat(prompt("Digite o quarto valor"))

    alert(numero1)
    if(numero1 > numero2 && numero1 > numero3 && numero1 > numero4){
        alert(`O maior valor é: ${numero1}`)
    }
    else if(numero2 > numero1 && numero2 > numero3 && numero2 > numero4){
        alert(`O maior valor é: ${numero2}`)
    }
    else if(numero3 > numero1 && numero3 > numero2 && numero3 > numero4){
        alert(`O maior valor é: ${numero3}`)
    }
    else if(numero4 > numero1 && numero4 > numero2 && numero4 > numero3){
        alert(`O maior valor é: ${numero4}`)
    }
    else{
        alert("Alguns dos valores são iguais")
    }
    alert(numero4)
 }


//7 Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  
 
function exercicio7(){
    let soma = 0
    let numerosIformados = []

    for(let i = 0; i < 6; i++){
        let numero = parseFloat(prompt("Digite um numero"))
        numerosIformados.push(numero)
        if(numero < 72){
            soma += numero
        }
    }
    alert("O valor da soma dos números iinferiores a 72 é: " + soma)
    alert("Os números informados foram: " + numerosIformados)
    
}

//8 Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
function exercicio8(){
    let numero1 = parseFloat(prompt("Digite o primeiro valor"))
    let numero2 = parseFloat(prompt("Digite o segundo valor"))
    let numero3 = parseFloat(prompt("Digite o terceiro valor"))
    let numero4 = parseFloat(prompt("Digite o quarto valor"))
    
    let media = 0
    if(numero1 > 0 && numero1 < 10 && numero2 > 0 && numero2 < 10 && numero3 > 0 && numero3 < 10 && numero4 > 0 && numero4 < 10){
        media = (numero1 + numero2 + numero3 + numero4) / 4
        if(media > 5){
            alert("Você passou no teste, sua média é: " + media)
        }
        else{
            alert("Tente novamente")
        }
    }
    else{
        alert("Os valores devem ser maiores que 0 e menores que 10")
    }
}
    

//9 Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
function exercicio9(){
    let ano = parseInt(prompt("Digite o ano de nascimento"))
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - ano

    if(idade >= 16){
        alert("Você pode votar")
    }
    else{
        alert("Você não pode votar")   
    }
}


/* 10 Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, 
construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas: */
 function exercicio10(){
    let sexo = prompt("Digite M para masculino e F para feminino")
    let altura = parseFloat(prompt("Digite sua altura"))
   
    switch(sexo){
           case "M":
              let peso = (72.7 * altura) - 58
                 alert("Seu peso ideal é: " + peso)
                   break
           case "F":
                peso = (62.1 * altura) - 44.7
                   alert("Seu peso ideal é: " + peso)
                   break
           default:
               alert("Sexo inválido")
                   break
   }
}   


/* 11. Uma micro calculadora
Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 
Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações */
 function exercicio11(){
    let opcao = alert("1-somar\n2-subtrair\n3-multiplicar\n4-dividir")
    let valor1 = parseInt(prompt("Digite o primeiro numero"))
    let valor2 = parseInt(prompt("Digite o segundo numero"))

    switch(opcao){
        case 1:
            alert("A soma é: " + (valor1 + valor2))
            break
        case 2:
            alert("A subtração é: " + (valor1 - valor2))
            break
        case 3:
            alert("A multiplicação é: " + (valor1 * valor2))
            break
        case 4:
            alert("A divisão é: " + (valor1 / valor2))
            break
        default:
            alert("Opção inválida")
            break
    }
 }
