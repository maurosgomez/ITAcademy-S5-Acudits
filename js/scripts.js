window.onload = function() {
  weather();
};


function acudit() {

  var random = Math.ceil(Math.random()*2)
  var url;
	
	if (random == 1) {
		url = "https://icanhazdadjoke.com";

	} else if (random == 2) {
		url = "https://v2.jokeapi.dev/joke/Programming";
  }

  fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
    
      .then(quote => quote.json())

      .then(data => {
          console.log(data);
          
          if (data.type == "twopart") {
            document.getElementById("card-text").innerHTML = data.setup + " " + data.delivery;
        
          } else {
            document.getElementById("card-text").innerHTML = data.joke;
          }
      }
      )
}

function weather() {

  fetch(url = 'https://www.el-tiempo.net/api/json/v2/provincias/08', {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
    
      .then(quote => quote.json())

      .then(data => {
          console.log(data);
          document.getElementById("weather").innerHTML = `Avui: ${data.ciudades[6].stateSky.description}`;
      }
      )
}