function exe1(params) {
    //recupera os dados do usuario
    var nota1= Number(document.getElementById("nota1").value);
    var nota2= Number(document.getElementById("nota2").value);
    var nota3= Number(document.getElementById("nota3").value);
    var nota4= Number(document.getElementById("nota4").value);
    //processamento
    // calcular media
    var media = (nota1+nota2+nota3+nota4)/4
    //verifica aprovação
    if (media >= 7) {
        alert(" Aprovado com media " + media)
        console.log(" Aprovado com media " + media)     
    } 
    else {
        alert(" Reprovado com media " + media)
        console.log(" Reprovado com media " + media)     
         
    }

}

function exe2(params) {
    //recupera os dados do usuario
    var n1= Number(document.getElementById("n1").value);
    var n2= Number(document.getElementById("n2").value);
    // calcular media
    var media = (n1+n2)/2
    //verifica aprovação
    if (media >= 7) {
        alert ("Aprovado com media " + media)
    }
    else if ((media >= 3) && (media < 7)) {
        alert ("Exame com media " + media)
        console.log("Exame com com media " + media)
    }
    else {
        alert("Reprovado com media " + media)
        console.log("Reprovado com media " + media) 
    }
}
function exe3(params) {
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    //calcular o numero menor
    if (numero1 < numero2) {
        alert("O menor é o numero:  " + numero1)
    }    
    else if (numero2 < numero1) {
        alert("O menor é o numero:  " + numero2)
    }
    else {
        alert("Não existe menor")
    }  
    
}
function exe4(params) {
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
    //calcular o maior
    if ((numero1 == numero2) && (numero3 == numero3)) {
        alert("Não existe maior")       
    }

    else if ((numero1 >= numero2) && (numero2 >= numero3)) {
        alert("O maior numero é: " + numero1) 
          
    }
    else if (numero2 > numero3) {
        alert("O maior numero é: " + numero2 )       
    }
    else {
        alert("Maior " + maior)

    }    
}

function exe5(params) {
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var opcao = Number(document.getElementById("opcao").value);
    var resultado

    switch(opcao) {
        case 1: resultado = (numero1 + numero2 ) / 2
            
            break;// não entra no case de baixo
        case 2: if (numero1 >= numero2) {
                    resultado = numero1 - numero2            
                }
                 else {
                     resultado = numero2 - numero1            
                 }
            break; 
        case 3: resultado = numero1 * numero2       
            break;
        case 4: if (numero2 != 0) {
                    resultado = numero1 / numero2      
                }  
                else {
                    resultado = "Divisão por zero"
                }   
            break;
        default: resultado = "opção invalida!"
            break;
    }
    alert("resultado: " + resultado)
}

function exe07(){
    var salario = Number(document.getElementById("salario").value);
    if (salario < 500){
        var aumento = salario + salario * 30 / 100
        alert("Novo salario é de: " + aumento)
    }
    else{
        alert("Não tem direito a aumento");
    }
}    