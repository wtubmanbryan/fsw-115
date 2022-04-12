
		function setup()
		{
			loadJSON("https://pokeapi.co/api/v2/berry/", loadTable,'jsonp');
		}
		function loadTable(data)
		{
		     //Display Pokemon List;
		     var tbrow = document.getElementById("pokemon");
		     
		    for(var i = 0; i < data.count; i++)
		    {
		    	var tbody = document.createElement("tbody");
		    	tbody.innerHTML += "<tr><td class='text-center'>" +
              	data.results[i].name + "</td><td class='text-center'>" + data.results[i].url + "</td></tr>";

              	tbrow.prepend(tbody);
		    }
		    
		}

		function loadJSON(path, success, error) {
		  var xhr = new XMLHttpRequest();
		  xhr.onreadystatechange = function () {
		    if (xhr.readyState === 4) {
		      if (xhr.status === 200) {
		        success(JSON.parse(xhr.responseText));
		      }
		      else {
		        error(xhr);
		      }
		    }
		  };
		  xhr.open('GET', path, true);
		  xhr.send();
		}
       

	