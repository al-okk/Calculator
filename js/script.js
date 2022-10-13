function onHandleInput() {
    try {
        let text = document.getElementById("takeinput").value;
        text = text.replace("^", "**");

        document.getElementById("takeinput").value = eval(text);
    }
    catch (e) {
        document.getElementById("takeinput").value = "Error";
    }
}
let textBox = document.getElementById("takeinput");

textBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        onHandleInput();
    }
});
textBox.addEventListener("keydown", function (event) {
    let a = document.getElementById("takeinput").value;
    a = a.replace("Error", "");
    document.getElementById("takeinput").value = a;
});
function input(val) {
    if (val === "backspace") {
        document.getElementById("takeinput").value=document.getElementById("takeinput").value.substring(0,(document.getElementById("takeinput").value).length-1);
    }
    else {
        document.getElementById("takeinput").value = document.getElementById("takeinput").value + val;
        document.getElementById("takeinput").focus();
        if (document.getElementById("takeinput").value.includes("Error")) {
            let a = document.getElementById("takeinput").value;
            a = a.replace("Error", "");
            document.getElementById("takeinput").value = a;
            document.getElementById("takeinput").focus();
        }
    }
}
function clearAll() {
    document.getElementById("takeinput").value = "";
}
