const key = "fcc8d9af9001877d56b1ee3966781e94"


async function buscarCidade(cidade){     
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then( resposta => resposta.json( ) ) 
    console.log(dados) 
}

   
    
function cliquenobotao () {
    const cidade = document.querySelector(".input-cidade").value
        buscarCidade (cidade)
}