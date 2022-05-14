let impor = 0
let imporMon = 0
let depo = 0
let cBtc = 0
let vBtc = 0
const usd = 202.7

const monedas =[
    {id : 1, nombre : '', nomRed : 'UNI', precio : 8.97},
    {id : 2, nombre : 'Bitcoin', nomRed : 'BTN', precio : 39559.94},
    {id : 3, nombre : 'Dai', nomRed : 'DAI', precio : 1 },
    {id : 4, nombre : 'Etheriun', nomRed : 'ETH', precio : 2937.68},
    {id : 5, nombre : 'Luna', nomRed : 'LUNA', precio : 91.33},
    {id : 6, nombre : 'Mana', nomRed : 'MANA', precio : 2.01},
    {id : 7, nombre : '', nomRed : 'SLP', precio : 0.02},
    {id : 8, nombre : '', nomRed : 'SOL', precio : 100.94}
    ];



function sub(){
    let ConvertPeso = 0;
    let resultCambio = 0;
    let monACam = document.getElementById("monCam").value;
    ConvertPeso = document.getElementById("peso").value;  
    switch (monACam){
        case 'UNI':  resultCambio = ((ConvertPeso / usd) / monedas[0].precio);  break;
        case 'BTN':  resultCambio = ((ConvertPeso / usd) / monedas[1].precio);  break;
        case 'DAI':  resultCambio = ((ConvertPeso / usd) / monedas[2].precio);  break;
        case 'ETH':  resultCambio = ((ConvertPeso / usd) / monedas[3].precio);  break;
        case 'LUNA': resultCambio = ((ConvertPeso / usd) / monedas[4].precio);  break;
        case 'MANA': resultCambio = ((ConvertPeso / usd) / monedas[5].precio);  break;
        case 'SLP':  resultCambio = ((ConvertPeso / usd) / monedas[6].precio);  break;
        case 'SOL':  resultCambio = ((ConvertPeso / usd) / monedas[7].precio);  break;
        case 'USD':  resultCambio = ConvertPeso / usd;               break;
        };

    document.getElementById("resul").value = resultCambio;

};
