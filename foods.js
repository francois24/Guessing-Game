// A function to display a message
function sayHello(){
    let person1 = prompt("Please enter your name");

    alert("Hello " + person1);
}
    // call function on  click of the button
    document.getElementById("myBtn").onclick = sayHello;