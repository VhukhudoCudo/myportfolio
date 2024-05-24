var dreamCar = {
    make: "Ford mustang",
    model: "24",
    color: "green",
    year: 2024,
    bodyStyle: "Luxury Car",
    price: 15000
}
alert("The type of dreamCar is: " + typeof dreamCar)
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;


