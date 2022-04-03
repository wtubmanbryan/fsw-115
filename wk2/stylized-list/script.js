var zooAnimals = [
    {
        "name": "Horned Puffin",
        "latin_name": "Fratercula corniculata",
        "animal_type": "Bird",
        "active_time": "Diurnal",
        "length_min": "1",
        "length_max": "1.2",
        "weight_min": "0.9",
        "weight_max": "1",
        "lifespan": "20",
        "habitat": "Ocean and rocky coasts",
        "diet": "Fish, mollusks and crustaceans",
        "geo_range": "Bering Sea, Arctic and North Pacific oceans",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Fratercula_corniculataUSFWSSL0002774.jpg",
        "id": 88
    },
    {
        "name": "American Crocodile",
        "latin_name": "Crocodylus acutus",
        "animal_type": "Reptile",
        "active_time": "Nocturnal",
        "length_min": "7",
        "length_max": "15",
        "weight_min": "150",
        "weight_max": "450",
        "lifespan": "70",
        "habitat": "Coastal waters and wetlands",
        "diet": "Fish, turtles, crabs, birds, and other aquatic animals",
        "geo_range": "Southern Florida, Central America, and northern South America",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Crocodylus_acutus_mexico_02-edit1.jpg",
        "id": 12
    },
    {
        "name": "Black-footed Cat",
        "latin_name": "Felis nigripes",
        "animal_type": "Mammal",
        "active_time": "Nocturnal",
        "length_min": "1.1",
        "length_max": "1.7",
        "weight_min": "3.3",
        "weight_max": "6.5",
        "lifespan": "5",
        "habitat": "Desert, savannah, and scrubland",
        "diet": "Mice, insects, spiders, lizards, and birds",
        "geo_range": "Southern Africa",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/d/da/Zoo_Wuppertal_Schwarzfusskatze.jpg",
        "id": 36
    },
    {
        "name": "Florida Manatee",
        "latin_name": "Trichechus manatus latirostris",
        "animal_type": "Mammal",
        "active_time": "Diurnal",
        "length_min": "8",
        "length_max": "15",
        "weight_min": "3000",
        "weight_max": "2500",
        "lifespan": "60",
        "habitat": "Costal wetlands",
        "diet": "Aquatic plants",
        "geo_range": "Southeastern United States",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Manatee_at_Sea_World_Orlando_Mar_10.JPG",
        "id": 72
    },
    {
        "name": "White-cheeked Bulbul",
        "latin_name": "Pycnonotus leucotis",
        "animal_type": "Bird",
        "active_time": "Diurnal",
        "length_min": "0.58",
        "length_max": "0.63",
        "weight_min": "0.05",
        "weight_max": "0.06",
        "lifespan": "9",
        "habitat": "Grassland, shrubland and woodland",
        "diet": "Fruit and insects",
        "geo_range": "Middle East and Western Asia",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/3/3b/White-eared_bulbul.jpg",
        "id": 188
    }
]

var animalList = document.getElementById("zooAnimanlsList")
for(var i =0; i< zooAnimals.length; i++){
    var newAnimal = document.createElement("li")
    newAnimal.textContent= "Animal Name: "+ zooAnimals[i].name +" Animal Type: "+ zooAnimals[i].animal_type
    animalList.appendChild(newAnimal)
}
