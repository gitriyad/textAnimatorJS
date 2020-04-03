function textAnim(text, elem) {
    var element = document.getElementById(elem);
    element.style.color = window.getComputedStyle(element).getPropertyValue("background-color");
    var strlenght = text.length;
    for (var i = 0; i < strlenght; i++) {
        var spanElement = document.createElement("span");
        var charOfStr = text.charAt(i);
        spanElement.innerHTML = charOfStr;
        element.appendChild(spanElement);
    }
    var delay = 0;
    for (var j = 0; j < strlenght; j++) {
        var span = document.getElementsByTagName("span")[j];
        span.style.animation = "clo " + 0.2 * strlenght + "s linear " + delay + "s infinite";
        delay = delay + 0.2;
    }
}
