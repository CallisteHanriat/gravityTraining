
var text = addSomething("p", "idTest", "Entres une valeur en celcius : ");
var entreeCelcius = addSomething("input", "idTest", "");
var button = addSomething("button", "idTest", "calcul");
entreeCelcius.setAttribute("type", "number");

var celcius = entreeCelcius.value;

var celciusTmp = new Temperature(celcius);

button.addEventListener("click", function () {clikCalculButton();});



/**
 * To add something for html file
 * @param {string} typeOfMarker the marker of our wanted added element
 * @param {string} insertedElementId the marker of the parent of this element. explained in Id
 * @param {string} text the text wich contained in this element
 * @returns {Element} the concerned marker
 */
function addSomething(typeOfMarker, insertedElementId, text) {
    var beacon = document.createElement(typeOfMarker);
    var node = document.createTextNode(text);
    beacon.appendChild(node);
    var element = document.getElementById(insertedElementId);
    element.appendChild(beacon);
    return beacon;
}

/**
 * executer when calcul button is pressed
 */
function clikCalculButton() {
    celciusTmp.setValue(entreeCelcius.value);
    var farheneightTmp = new Temperature (celciusTmp.getValue() * 9 / 5 + 32);
    answer = document.getElementById("answer");
    console.log(celciusTmp.getValue());
    console.log("celciusTmp : " + celciusTmp.getValue());
    if (!answer) {
        console.log("je suis dans le if");
        var t = addSomething("p", "idTest", "Result : " + farheneightTmp.getValue());
        t.setAttribute("id", "answer");
    } else {
        console.log("je suis dans le else");
        answer.textContent = "Result : " + farheneightTmp.getValue();
    }
}