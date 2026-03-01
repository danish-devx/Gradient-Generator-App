let box = document.getElementById("box");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let direction = document.getElementById("direction");

let cssCode = document.getElementById("cssCode");
let copyBtn = document.getElementById("copyBtn");

function gradientGenerator() {

    let color01 = color1.value;
    let color02 = color2.value;
    let directions = direction.value;

    let gradient = `${directions}, ${color01}, ${color02}`;

    box.style.background = `linear-gradient(${gradient})`;

    cssCode.innerText = `background: linear-gradient(${gradient});`;
}

color1.addEventListener("input", gradientGenerator);
color2.addEventListener("input", gradientGenerator);
direction.addEventListener("change", gradientGenerator);

gradientGenerator();

copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(cssCode.innerText);

    Swal.fire({
        title: "Copied!",
        text: "CSS Code successfully copied to clipboard",
        icon: "success",
        confirmButtonText: "OK"
    });

});