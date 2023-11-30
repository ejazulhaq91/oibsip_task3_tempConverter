function tempConverter(){
    let unit = document.getElementById("inputUnits").value
    let temp = document.getElementById("inputTemp").value
    let outPutTemp;
    if(unit === "celsius"){
        outPutTemp =  `${((temp * 9 / 5) + 32).toFixed(2)} °F`
        // ((temp * 9 / 5) + 32).toFixed(2)
    }
    else if(unit === "fahrenheit"){
        outPutTemp = `${((temp - 32) * 5 / 9).toFixed(2)} °C` 
    }
    // if(unit === "celsius"){
        document.getElementById('outputTemp').value = outPutTemp
    // }
}

// Conversion function can be bind / attached as follow
// document.querySelector('button').addEventListener('click', () => tempConverter())
document.querySelector('button').addEventListener('click', tempConverter)
// document.querySelector('button').addEventListener('click', function(){
//     tempConverter();
// })




