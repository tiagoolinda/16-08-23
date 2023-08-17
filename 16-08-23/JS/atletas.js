

/* Função cadastrar atletas */
function pet() {
    let x = "n";
    relatorio = "*- Relatório de Cadastro -* <br> ";

while (x.toUpperCase() != "S") {
    raca = prompt("Digite a raça");
    peso = prompt("Digite o peso");
    cor = prompt("Digite a cor");
    idade = prompt("Digite a idade");
    porte = prompt("Digite o porte");
    

relatorio = relatorio + "<br>+-----------------------------------------------------------+<br><br>"+
    "RACA : " + raca + "<br>" +
    "PESO : " + peso + "<br>"+
    "COR : " + cor + "<br>"+
    "IDADE : " + idade + "<br>"+
    "PORTE : " + porte + "<br>+-----------------------------------------------------------+<br><br>"

    confirme = prompt("Finalizar Cadastro - S para sim ou N - Não?");
    if (confirme.toUpperCase() == "S") {
        x = "S";
    };

    document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";
}

}
