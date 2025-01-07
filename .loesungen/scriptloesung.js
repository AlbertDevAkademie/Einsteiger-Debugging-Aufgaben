// Aufgabe 1
function sayHello() {
    alert("Hallo, Welt!");
}

// Aufgabe 2
function showName(name) {
    console.log("Der Name ist: " + name.toUpperCase());
}

// Aufgabe 3
function multiplyNumbers(a, b) {
    let result = b * a
    console.log(result);
}

// Aufgabe 4
function changeColor() {
    document.getElementById('example4').style.backgroundColor = "green";
}

// Aufgabe 5
function greetPerson(person) {
    let inputName = document.getElementById('example5').value;
    let text = "Hallo " + inputName + ", du bist " + person.age + " Jahre alt!"
    document.getElementById('example6').innerHTML = text;
}