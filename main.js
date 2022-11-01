let containerEl=document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    let colorContainerEl=document.createElement('div')
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

let colorContainerEls = document.querySelectorAll('.color-container');

console.log(colorContainerEls);

generateColors()

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        let newColorCode = randomColor();
        console.log(newColorCode);
        colorContainerEl.style.backgroundColor='#' +newColorCode;
        colorContainerEl.innerText = '#' + newColorCode;
    })
}

function randomColor(){
    let chars='0123456789abcdef'
    let colorCodeLength=6;
    let colorCode=''
    for (let index = 0; index < colorCodeLength; index++) {
         let randomNum=Math.floor(Math.random() *
         chars.length);
         colorCode += chars.substring(randomNum,randomNum +1);
         
    }
    return colorCode;
}