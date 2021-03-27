window.onkeydown = function (e) {
    switch(e.key) {
        case "Enter":
            document.getElementsByClassName('gen')[0].click();
            break;
        default: break;
    }
    //console.info(e.key);
}