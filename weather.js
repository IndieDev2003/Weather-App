const apiUrl='https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&units=metric'
const apiKey="2fd4bea6b31504271112e3037caf5269"

const bodyBack=["https://i.pinimg.com/originals/15/f5/03/15f503c961828d193b6b79e8d4bbb0ad.jpg","https://i.pinimg.com/originals/f7/43/89/f743890f088ab97a3866fc518f9ec4ba.jpg","https://i.pinimg.com/originals/bf/af/89/bfaf89287296dbe35e78d5ec4834c30e.jpg"]






async function weatherShow(){
    const response = await fetch(apiUrl+"city-name=Delhi&appid"+apiKey);
    console.log(response);
    
   


}

weatherShow();

