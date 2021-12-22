const width = document.getElementById("width");
const height = document.getElementById("height");
const newwidth = document.getElementById("newwidth");
const newheight = document.getElementById("newheight");

let originalWidth, originalHeight, newWidth, newHeight, ratio;

newwidth.oninput = handleWidthChange;
newheight.onchange = handleHeightChange;

function setValues(){
    originalWidth = Number(width.value);
    originalHeight = Number(height.value);
    newWidth = Number(newwidth.value);
    newHeight = Number(newheight.value);
    ratio = (originalWidth / originalHeight);
}

function handleWidthChange (){
    setValues();
    newheight.value = Math.round(newWidth / ratio); 
}
function handleHeightChange(){
    setValues();
    newwidth.value = Math.round(newHeight * ratio);
}
