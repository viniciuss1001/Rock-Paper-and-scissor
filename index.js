var elements = document.querySelectorAll(".playerOp div > img")
var playerOpt = ""
var inimigoOpt = ""


function validarVitoria(){
    let winner = document.querySelector(".vencedor")

    if(playerOpt == 'papel'){
        if(inimigoOpt =="papel"){
            //empate
            winner.innerHTML = `o Jogo foi empatado`
        }else if(inimigoOpt == "tesoura"){
            //inimigo ganhou
            winner.innerHTML = `Você perdeu`
        }else if(inimigoOpt == 'pedra'){
            //eu ganhei
            winner.innerHTML = `Você ganhou`
        }
    }else if(playerOpt == "pedra"){
        if(inimigoOpt =="papel"){
            //perdi
            winner.innerHTML = `Você perdeu`
        }else if(inimigoOpt == "tesoura"){
            //inimigo perdeu
            winner.innerHTML = `Você ganhou`
        }else if(inimigoOpt == 'pedra'){
            //empate
            winner.innerHTML = `o Jogo foi empatado`
        }
    }else if(playerOpt =="tesoura"){
        if(inimigoOpt =="papel"){
            //eu ganhei
            winner.innerHTML = `Você ganhou`
        }else if(inimigoOpt == "tesoura"){
            //empate
            winner.innerHTML = `o Jogo foi empatado`
        }else if(inimigoOpt == 'pedra'){
            //eu perdi
            winner.innerHTML = `Você perdeu`
        }
    }
}
function resetEnemyOp(){
    const enemyOp = document.querySelectorAll(".enemyOp div")
    for(var i = 0; i < elements.length; i++){
        enemyOp[i].childNodes[0].style.opacity = 0.3
        
    }
}

function enemy(){
    let rand = Math.floor(Math.random()*3)
    //o Math.random() retorna um número entre 0 e 1
    //o Math.floor() serve para arrendondar o número gerado pelo Math.randon()
    const enemyOp = document.querySelectorAll(".enemyOp div")
    //alert(enemyOp.length)
    resetEnemyOp()
    for(var i = 0; i < enemyOp.length; i++){
        if(i == rand){
            enemyOp[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOp[i].childNodes[0].getAttribute("opt")
        }
    }
    validarVitoria()

}

function resetOpacity(){
    for(var i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0.3
        
    }
}

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", function(t){
        resetOpacity()
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute("opt");
        //alert(playerOpt)
        enemy()
    })
}
