function exe5() {
    // recupera os dados
    var preco = document.getElementById("preco").value;
    //calcular novo preço
    var novoPreco = preco - (preco * 10 / 100);
    alert(" O seu novo preço é de: " + novoPreco.toFixed(2));     
}