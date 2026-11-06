document.getElementById('river').onclick = function(){
alert("River clicked")
}
// attachEvent()
// jQuery - onclick
// type, timestamp defaultPrevented 
// target, toElement, srcElement, currentTarget, clientX clientY, screenX, screenY,
// altkey, ctrlKey ,shiftKey, keyCode


document.getElementById('images').addEventListener('click',function(e){
    console.log("clicked inside the url")
},false)
document.getElementById('river').addEventListener('click',function(e){
    console.log("river clicked")
    e.stopPropagation()
},false)

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log('google clicked') 
},false)


document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id)
    let removeIt = e.target.parentNode
    removeIt.remove()
    }
    
    // removeIt.parentNode.removeChild(removeIt)
},false)
