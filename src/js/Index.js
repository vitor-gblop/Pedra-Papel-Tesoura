
/*import*/
let gn = new General;


let ops = ['./src/img/pedra.png', "./src/img/papel.png", "./src/img/tesoura.png"];
let f_ops = ["pedra", "papel", "tesoura"];
let player_choice = "";

async function _round(t)
{
    let randomNumber
    while(player_choice == "") 
    {
        randomNumber = gn.randomNumbers(1,3)
        document.getElementById("pc_choice_img").setAttribute("src", ops[randomNumber]);
        await gn.sleep(50)
    }

    result(f_ops[randomNumber], player_choice)
}


function choice_pedra()
{
    let ax = document.getElementById("choice_pedra");
    // console.log(ax.getAttribute("id"));

    if (ax.getAttribute("id") == "choice_pedra")
    {
        ax.setAttribute("class", "choice_active")
        let arr = document.getElementsByClassName("choice");
        arr[0].disabled = true;
        arr[1].disabled = true;

        player_choice = "Pedra";
        // _round(75);
    }
}
function choice_papel()
{
    let ax = document.getElementById("choice_papel");
    // console.log(ax.getAttribute("id"));

    if (ax.getAttribute("id") == "choice_papel")
    {
        ax.setAttribute("class", "choice_active")
        let arr = document.getElementsByClassName("choice");
        arr[0].disabled = true;
        arr[1].disabled = true;

        player_choice = "Papel";
        // _round(75);
    }
}
function choice_tesoura()
{
    let ax = document.getElementById("choice_tesoura");
    // console.log(ax.getAttribute("id"));

    if (ax.getAttribute("id") == "choice_tesoura")
    {
        ax.setAttribute("class", "choice_active")
        let arr = document.getElementsByClassName("choice");
        arr[0].disabled = true;
        arr[1].disabled = true;
    
        player_choice = "Tesoura";
        // _round(75);
    }
}

let play = ()=>{
    location.reload();
}

let result = (result = "", player_choice = "")=>
{
    if (player_choice.toLowerCase() == "tesoura" &&
        result.toLowerCase() == "papel")
    {
        console.log("Venceu");
        setResult("Você Venceu");
        changeColor("green");
    }
    else if (player_choice.toLowerCase() == "pedra" &&
    result.toLowerCase() == "tesoura")
    {
        console.log("Venceu");
        setResult("Você Venceu");
        changeColor("green");
    }
    else if (player_choice.toLowerCase() == "papel" &&
    result.toLowerCase() == "pedra")
    {
        console.log("Venceu");
        setResult("Você Venceu");
        changeColor("green");
    }
    else if (result.toLowerCase() === player_choice.toLowerCase())
    {
        console.log("Empatou");
        setResult("Você Empatou");
        changeColor("yellow");
    }
    else
    {
        console.log("Perdeu");
        setResult("Você Perdeu");
        changeColor("red");
    }
}

function changeColor(cor = "")
{
    if (cor == "yellow")
    {
        document.getElementById("result").style.color = "#ffff00";
    }
    if (cor == "red")
    {
        document.getElementById("result").style.color = "#ff0000";
    }
    if (cor == "green")
    {
        document.getElementById("result").style.color = "#1cdb15";
    }
}

function setResult(content)
{
    document.getElementById('result').innerHTML = content;
}


(function()
{
    _round(75)
})();
