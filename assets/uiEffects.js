function fadeIn2(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 10);
}

function fadeOut2(element, del) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
						if(del)
							element.outerHTML = "";
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 50);
}