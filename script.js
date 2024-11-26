function myFunction(){
    let num1 = document.getElementById("firstname").value
    let num2 = document.getElementById("lastname").value
    document.getElementById("div").innerText = num1 +" "+ num2
}

function sum()
{
    let num1 = Number(document.getElementById("firstvalue").value)
    let num2 = Number(document.getElementById("secondvalue").value)
    document.getElementById("dis-res").innerText = num1 + num2 
}
function min()
{
    let num1 = document.getElementById("firstvalue").value
    let num2 = document.getElementById("secondvalue").value
    document.getElementById("dis-res").innerText = num1 - num2 
}
function mul()
{
    let num1 = document.getElementById("firstvalue").value
    let num2 = document.getElementById("secondvalue").value
    document.getElementById("dis-res").innerText = num1 * num2 
}
function div()
{
    let num1 = document.getElementById("firstvalue").value
    let num2 = document.getElementById("secondvalue").value
    document.getElementById("dis-res").innerText = num1 / num2 
}
function mod()
{
    let num1 = document.getElementById("firstvalue").value
    let num2 = document.getElementById("secondvalue").value
    document.getElementById("dis-res").innerText = num1 % num2 
}