// generate a rondom color

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervalId
console.log(randomColor())
const startChangeColor = function(){

 if(!intervalId){
    intervalId = setInterval(changrbgColor,1000)
 }
function changrbgColor(){
    document.body.style.backgroundColor = randomColor()

}    
}

const stopChangeColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener
('click',startChangeColor)

document.querySelector('#stop').addEventListener
('click',stopChangeColor)


