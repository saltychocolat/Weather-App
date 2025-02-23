import "./styles.css";


let key = "EHPEVDBA49E4YXUJ97B9G865T";
let button = document.querySelector("#search");
let input = document.querySelector("input");
let temp = document.querySelector("#temp");
let adress = document.querySelector("#adress")
input.addEventListener("keydown",async function(event){
    if(event.key == "Enter"){
        let value = input.value;
        let data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ value + "?key=" + key,{
            mode:"cors"
        });
        data = await data.json();
        console.log(data)
        let weatherData = formatData(data);

        temp.textContent = weatherData.temp + "C";
        adress.textContent = weatherData.adress;
        console.log(weatherData.adress,weatherData.temp)
    }

})


function formatData(data){
    let adress = data.resolvedAddress;
    let temp = data.currentConditions.temp;
    return {adress:adress,temp:temp}
}