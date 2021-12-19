const calcButton = document.getElementById("calc");
const height = document.getElementById("height");
const width = document.getElementById("width");
const number = document.getElementById("number");
const resultBox = document.getElementById("result");

calcButton.addEventListener("click", (e) => {
    e.preventDefault();

    const h = Number(height.value);
    const w = Number(width.value);
    const n = Number(number.value);

    const result = calcRatio(h, w, n);

    resultBox.innerHTML = `
        <div>Height: ${result[0]} </div>
        <div>Width: ${result[1]} </div>
    `;
});


//

function calcRatio(h, w, num){
    const ratioValue = (h / w);

    let heightValue = h;
    let widthValue = w;

    heightValue = heightValue + (ratioValue * num);
    widthValue = widthValue + (ratioValue * num); 
    
    
    return [heightValue, widthValue];
}