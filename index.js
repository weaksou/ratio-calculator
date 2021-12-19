const calcButton = document.getElementById("calc");
const height = document.getElementById("height");
const width = document.getElementById("width");
const number = document.getElementById("number");
const customNumber = document.getElementById("customNumber");
const resultBox = document.getElementById("result");
const currentRange = document.getElementById("currentRange");


number.addEventListener("change", (event) => {
    event.preventDefault();

    const h = Number(height.value);
    const w = Number(width.value);
    const n = Number(event.target.value);
    currentRange.textContent = n;

    const result = calcRatio(h, w, n);

    resultBox.innerHTML = `
        <div>Height: ${result[0]} </div>
        <div>Width: ${result[1]} </div>
    `;
})


calcButton.addEventListener("click", (e) => {
    e.preventDefault();

    const h = Number(height.value);
    const w = Number(width.value);
    const n = Number(customNumber.value);

    const result = calcRatio(h, w, n);

    resultBox.innerHTML = `
        <div>Height: ${result[0]} </div>
        <div>Width: ${result[1]} </div>
    `;
});


//

function calcRatio(h, w, num){

    if(!h){
        return ["please specify a height", ""];
    }
    if(!w){
        return ["", "please specify a width"];
    }

    const ratioValue = (h / w);
    
    let heightValue = h;
    let widthValue = w;

    heightValue = heightValue + (ratioValue * num);
    widthValue = widthValue + (ratioValue * num); 
    
    
    return [heightValue, widthValue];
}