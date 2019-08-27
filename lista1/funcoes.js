function exe5() {
    // recupera os dados
    var preco = document.getElementById("preco").value;
    //calcular novo preço
    var novoPreco = preco - (preco * 10 / 100);
    alert(" O seu novo preço é de: " + novoPreco.toFixed(2));     
}

function exe14() {
    // recupera ano de nascimento
    var anoNascimento = document.getElementById("anoNascimento").value;
    // recupera ano atual
    var anoAtual = document.getElementById("anoAtual").value;
    //processamento
    var idade = anoAtual - anoNascimento;
    //idade em meses
    var meses = idade * 12;
    //idade em samanas
    var semanas = idade * 52;
    //idade em dias
    var dias = idade * 365;
    alert("Sua idade em anos é de: " + idade +
     "/n" + " Sua idade em meses é de: " + meses +
     "/n" + " Sua idade em semanas é de: " + semanas +
     "/n" + " Sua idade em dias é de: " + dias);
}

function exe21() {
    var hora = document.getElementById("hora").value;
    var minimo = document.getElementById("minimo").value;
    var extra = document.getElementById("extra").value;
    //calculos
    var salario = (hora * (minimo / 8)) + (extra * (minimo / 4));
    alert("Seu salario atual é de: " + salario);  



}