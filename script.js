replaceText(document.body);

function replaceText(elmnt) {
    if(elmnt.hasChildNodes()) {
        elmnt.childNodes.forEach(replaceText);
    } else if(elmnt.nodeType === Text.TEXT_NODE) {
        elmnt.textContent = elmnt.textContent.replace(/[coronavirus][corona][covid]/gi, "CENSORED");
    }
}