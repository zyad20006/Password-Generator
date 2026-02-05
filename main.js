let GetUpper=document.getElementById("UCase")
let GetLower =document.getElementById("LCase")
let GetNumbers =document.getElementById("num")
let GetSchar =document.getElementById("Schar")
let Getlenghtinput =document.getElementById("Lenght")
var numlenght=document.querySelector('[class="num-lenght"]')
let res=document.getElementById("result")
let copied=document.getElementById("copy")
let themes =document.getElementById("themes")
var PasswordsContainer=[]
var RPassords=document.getElementById("tbody")
function getlenght(){
    var lenghtbar=Getlenghtinput.value
    numlenght.innerHTML=`${lenghtbar}`

}
function makePass(){
    let upper = GetUpper.checked;
    let lower = GetLower.checked;
    let number = GetNumbers.checked;
    let SChar = GetSchar.checked;

    let chars = '';
    if (upper){ chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}
    if (lower) {chars += 'abcdefghijklmnopqrstuvwxyz';}
    if (number) {chars += '0123456789';}
    if (SChar) {chars += '!@#$%^&*()_+[]{}<>?';}

    if(chars === ''){
        alert('please enter at least one');
        return;
    }

    let lengthNum = Number(Getlenghtinput.value);
    let pass = '';

    for(let i = 0; i < lengthNum; i++){
        pass += chars[Math.floor(Math.random() * chars.length)];
        
    }
     
res.innerHTML = `<p>${pass}</p>`;
  PasswordsContainer.push(pass);

  localStorage.setItem("passwords", JSON.stringify(PasswordsContainer));
if(PasswordsContainer.length>10){
    PasswordsContainer.splice(0,1)
  localStorage.setItem("passwords", JSON.stringify(PasswordsContainer));
    
}
strength()
ShowPass()
}

function copyText(button) {
  const text = button.parentElement.querySelector('.result').innerText;

  navigator.clipboard.writeText(text)
  if(navigator.clipboard.writeText(text)){
copied.innerHTML='copied';
}
   
}
function switchThemes(){
    if(themes.innerHTML==='<p>press to change to Dark</p>')
    {
document.body.classList.add("b-body")
    document.getElementsByClassName('container')[0].classList.remove("w-container");
    document.getElementsByClassName('container')[0].classList.add("b-container");
    themes.innerHTML='<p>press to change to light</p>'
    RPassords.style.classList.add("b-container")

    }else{
        document.body.classList.remove("b-body")
    document.getElementsByClassName('container')[0].classList.add("w-container");
       document.getElementsByClassName('container')[0].classList.remove("b-container");
themes.innerHTML='<p>press to change to Dark</p>'
    }
}
function strength(){
    let upper = GetUpper.checked;
    let lower = GetLower.checked;
    let number = GetNumbers.checked;
    let SChar = GetSchar.checked;

var strengthlenght=0;
if(upper){strengthlenght++}
if(lower){strengthlenght++}
if(number){strengthlenght++}
if(SChar){strengthlenght++}
let strength=document.getElementById("strength")
let colors=['red','yellow','lightgreen','green']
if(strengthlenght===1)
{
    strength.style.width='25%'
    strength.style.background=`${colors[0]}`

}
if(strengthlenght===2)
{
    strength.style.width='50%'
    strength.style.background=`${colors[1]}`
}
if(strengthlenght===3)
{
    strength.style.width='75%'
    strength.style.background=`${colors[2]}`
}
if(strengthlenght===4)
{
    strength.style.width='100%'
    strength.style.background=`${colors[3]}`
}
}
function ShowPass(){
    var x=``;
    for(var i=0;i<PasswordsContainer.length;i++)
    {
        x+=`<tr> 

  <td style="        color: rgb(132, 132, 136);

">${PasswordsContainer[i]}</td>

     </tr> `
    }


RPassords.innerHTML=x
}
