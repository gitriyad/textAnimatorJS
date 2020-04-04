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
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.innerHTML = "@-webkit-keyframes clo {0%{color: gray;}50%{color: white;}100%{color: gray;}}@keyframes clo {0%{color: gray;}50%{color: white;}100%{color: gray;}}#a{height:250px;width:500px;background:-webkit-gradient(linear,left top,right top,from(black),to(seagreen));background:linear-gradient(to right,#000,#2e8b57);margin:0 auto;text-align:center;text-transform:uppercase;line-height:250px}";
    head.appendChild(style);
}
