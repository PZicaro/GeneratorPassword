
//Variáveis com objetivo de obter class e linkar com o HTML
let Generate = document.querySelector('.button');
let  Copy = document.querySelector('.copy');
let Result= document.querySelector('p');
//quais caracteres podem ser selecionados
let options = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+=-?/*&%$#@><!"
//array que será o responsável para ao ser printado
let passwordN =[]
alert("Sua senha aparecerá somente por 30 segundos! Seja rápido ao copiar")
// pegar numero caracteres

//função para que o JavaScript seja capaz de entender quando o botão foi pressionado 
password= Generate.addEventListener('click', ()=>{
    Result.innerText= ""
   let characters= Number(document.querySelector('#characters').value);

    console.log(characters)
    let randomNumbers
    //loop que faz o papel de adicionar um caracter cada vez que ele for repetido , no caso tendo como limitador o número que será setado em Result
    for( i=0; i< Number(characters); i++){
       randomNumbers= Math.floor(Math.random() * options.length )
        passwordN+= options.substring(randomNumbers, randomNumbers+1)

    }
    Result.innerText= passwordN
    setTimeout(function apagar(){
        Result.innerText= "";
    },30000)
})

