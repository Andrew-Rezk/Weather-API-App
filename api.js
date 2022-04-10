window.onload = function(){
    // Buttons
    const torontoBttn = document.getElementById("Toronto");
    const cairoBttn = document.getElementById("Yourtown");

    // Weather Sections
    const output = document.getElementById("output");
    const icon = document.getElementById("icon");
    const location = document.getElementById("location");
    const temperature = document.getElementById("temperature");
    const conditions = document.getElementById("conditions");
    const wind = document.getElementById("wind");

    

    //API Key and URL
    const APIKey = "93175d02626703632f146ae6aa84ee66";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + APIKey + "&units=metric";
    const urlCairo = "https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=" + APIKey + "&units=metric";

    
    // Event listener for Toronto button
    torontoBttn.onclick = function(){

    // Use XMLHttpRequest object to retrieve API data
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    //Get data from API and assign itot variables
                    const data = xhr.response;
                    console.log(data);

                    //Output API data to DOM
                    const iconcode = data.weather[0].icon;
                    const iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";

                    output.style.display = "block";
                    location.innerHTML = data.name;
                    icon.innerHTML =`<img src = ${iconUrl}></img>`;
                    temperature.innerHTML = data.main.temp + " °C";
                    conditions.innerHTML = data.weather[0].description;
                    wind.innerHTML = data.wind.speed + " km/h";

                //Handle errors fetching API
                } else {
                    location.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }
        xhr.open('GET', url);
        xhr.responseType = "json";
        xhr.send(null);
    }

    // Event listener for Cairo button
    cairoBttn.onclick = function(){

        // Use XMLHttpRequest object to retrieve API data
            let xhr = new XMLHttpRequest();
    
            xhr.onreadystatechange = function (){
                if (xhr.readyState === 4){
                    if (xhr.status === 200){
                        //Get data from API and assign itot variables
                        const data = xhr.response;
                        console.log(data);
    
                        //Output API data to DOM
                        const iconcode = data.weather[0].icon;
                        const iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    
                        output.style.display = "block";
                        location.innerHTML = data.name;
                        icon.innerHTML =`<img src = ${iconUrl}></img>`;
                        temperature.innerHTML = data.main.temp + " °C";
                        conditions.innerHTML = data.weather[0].description;
                        wind.innerHTML = data.wind.speed + " km/h";
    
                    //Handle errors fetching API
                    } else {
                        location.innerHTML = "API call was unsuccessful";
                        console.log(xhr.status);
                    }
                }
            }
            xhr.open('GET', urlCairo);
            xhr.responseType = "json";
            xhr.send(null);
        }
}