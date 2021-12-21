const height = document.getElementById("height");
const width = document.getElementById("width");

let beforeChangeHeight = 0;
let beforeChangeWidth = 0;

height.addEventListener("change", () => {

    if(Number(height.value) !== beforeChangeHeight){
        const res = calcRatio(Number(height.value), Number(width.value), (Number(height.value) - beforeChangeHeight));
        beforeChangeHeight = Number(height.value);
        
        height.value = res[0];
        width.value = res[1];
    }

})


function calcRatio(h, w, num){
    const ratio = (h / w);

    h = h + (ratio * num);
    w = w + (ratio * num); 
    
    return [h, w];
}