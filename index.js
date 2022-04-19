
let Generate = document.querySelector('.button');
let  Copy = document.querySelector('.copy');
let Result= document.querySelector('p');
let options = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_+=-?/*&%$#@><!"
let passwordN =[]
// pegar numero caracteres

password= Generate.addEventListener('click', ()=>{
    
   let characters= Number(document.querySelector('#characters').value);

    console.log(characters)
    let randomNumbers
    for( i=0; i< Number(characters); i++){
       randomNumbers= Math.floor(Math.random() * options.length )
        passwordN+= options.substring(randomNumbers, randomNumbers+1)

    }
    Result.textContent = passwordN
})

let copyPassword = copy.addEventListener('click', ()=>{
    let copyText= Result;
    copyText.select();
    copyText.setSelection.Range(0,999)
})