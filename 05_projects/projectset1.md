# project related to DOM 
## project link
[Click here](https://stackblitz.com/edit/dom_project_chaiaurcode?file=index.html)

# solution code

## project 1

``` javascript 
console.log("Vidya sagar")
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'gray') {
            body.style.backgroundColor = "red"
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = "yellow"
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = "white"
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = "grey"
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = "blue"
        }
        
    })
})
```
## project 2 solution

```JavaScript
const form = document.querySelector('form')
// this usecase will give you empty
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please give a valid height";
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please give a valid weight";
    } else {
      const bmi = (weight/((height*height)/10000)).toFixed(2)
    //   show the result
    result.innerHTML = `<span>${bmi}</span>`
    }

})