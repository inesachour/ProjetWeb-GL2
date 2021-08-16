//////////////////////////////////////////////////////////////////////

const change = document.getElementById("changecolor");

change.addEventListener("mouseover",()=>
{
    document.getElementById("menu").style.visibility ="visible";
    if(document.getElementById('ws').innerHTML == "")
    {
    document.getElementById('ws').appendChild(document.createElement("br"));
    document.getElementById('ws').appendChild(document.createElement("br"));}
});

document.getElementById("menu").addEventListener("mouseout",()=>
{
    document.getElementById("menu").style.visibility="hidden";
    document.getElementById('ws').innerHTML ="";

});
//////////////////////////////////////////////////////////////////////

const red = "#D10000";
const yellow = "#FFBD00";
const blue = "#2E0097";
const green ="#00BD25";

document.getElementById("red").style.backgroundColor =red;
document.getElementById("blue").style.backgroundColor = blue;
document.getElementById("green").style.backgroundColor =green;
document.getElementById("yellow").style.backgroundColor =yellow;



document.getElementById("red").addEventListener("click",()=>
{
    document.querySelector(".circle").style.backgroundColor = red;
    document.querySelector("legend").style.color = red;
    document.getElementById("menu").style.visibility = "hidden";
});

document.getElementById("blue").addEventListener("click",()=>
{
    document.querySelector(".circle").style.backgroundColor = blue;
    document.querySelector("legend").style.color = blue;
    document.getElementById("menu").style.visibility ="hidden";
});

document.getElementById("green").addEventListener("click",()=>
{
    document.querySelector(".circle").style.backgroundColor = green;
    document.querySelector("legend").style.color = green;
    document.getElementById("menu").style.visibility ="hidden";
});

document.getElementById("yellow").addEventListener("click",()=>
{
    document.querySelector(".circle").style.backgroundColor = yellow;
    document.querySelector("legend").style.color = yellow;
    document.getElementById("menu").style.visibility ="hidden";
});

/////////////////////////////////////////////////////////////////
const planName = document.getElementById("name"); //GET FORM DATA
const def = document.querySelector("legend").innerHTML;

planName.addEventListener("keyup",()=>{
    const where = document.querySelector("legend");
     if( where.innerHTML.value == "")
     {
         where.innerHTML = def;
     }
     else{
    where.innerHTML = planName.value;
    }
});


