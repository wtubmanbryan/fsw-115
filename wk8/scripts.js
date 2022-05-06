const postData = () =>{
    fetch("https://rickandmortyapi.com/api/character", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        name: "Jack Rabbit",
        status: "Dead",
        species: "Human"
    }),
  
})

};
postData();

let liapi1 = document.createElement("li")
let liapi2 = document.createElement("li")

let api1 = document.querySelector('#api1')
let api2 = document.querySelector('#api2')
let api3 = document.querySelector('#api3')
async function loadData(){
    const [swapiResponse, rickResponse] = await Promise.all([
        fetch('https://swapi.dev/api/people/1'),
        fetch('https://rickandmortyapi.com/api/character')
      ]);
	//const response = await fetch("https://swapi.dev/api/people/1");
	const swapiList = await swapiResponse.json();
    const rickList = await rickResponse.json();
	
	return [swapiList, rickList];
}

document.addEventListener("DOMContentLoaded", async () =>{

	let list = [];
	try{
		list = await loadData();
	}catch(e){
		console.log("Error");
		console.log(e);
	}
	
    liapi1.textContent=list[0].name + " " + list[0].height + " " + list[0].hair_color;
	api1.appendChild(liapi1);
    for(i = 0; i < list[1].results.length; i++){
		let liapi2 = document.createElement("li")
		liapi2.textContent=list[1].results[i].name + " " + list[1].results[i].status + " " +  list[1].results[i].species;
		api2.appendChild(liapi2);
	}
		
	
    
});

