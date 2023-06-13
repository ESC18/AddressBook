/*
onload: iniatate the event listeners for the two buttons. event.preventDefault() 

Function: unhide form. var's for buttons. 

Function: submit function; take value from the inputs and then turn it into a variable. hide form.

Function: Display data to user. Turns inputs into divs/spans/p's. For loop?

Constructor: Holds values of first name and last name. 

function Contact(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

let newContact = new Contact("bob", "smith");

*/
function submit(event, bookButton) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let middleName = document.getElementById("middleName").value;
    let newName = new Names(firstName,middleName,lastName);
    hideForm(bookButton);
    display(newName);
    form.reset();
}

function display(newName) {
    let body = document.querySelector("body");
    let div = document.createElement("div");
    for (let xname in newName) {
        let span = document.createElement("span");
        span.innerHTML = newName[xname];
        div.appendChild(span);
    }
    body.append(div);
}

function hideForm(bookButton) {
    const form = document.getElementById("form")
    form.setAttribute("class", "hidden");
    bookButton.setAttribute("class","");
}

function showForm(bookButton) {
    const form = document.getElementById("form");
    form.setAttribute("class","");
    bookButton.setAttribute("class","hidden");
}

window.onload = function () {
    let bookButton = document.getElementById("showBookButton");
    bookButton.addEventListener("click", (event) => showForm(bookButton));
    let form = document.getElementById("form");
    form.addEventListener("submit", (event) => submit(event, bookButton))
}

function Names(firstName,middleName,lastName) {
    this.firstName = firstName;
    this.middleName = middleName
    this.lastName = lastName;
}