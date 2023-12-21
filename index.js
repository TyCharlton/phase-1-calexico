// Write your code here...

//Global variables
const URL = "http://localhost:3000/menu"
let currentDish


// DOM selectors
const menuItems = document.querySelector("#menu-items")
const dishImage = document.querySelector("#dish-image")
const dishName = document.querySelector("#dish-name")
const dishDescription = document.querySelector("#dish-description")
const dishPrice = document.querySelector("#dish-price")
const cartForm = document.querySelector("#cart-form")
const numInCart = document.querySelector("#cart-amount")



// Fetch functions
function getAllDishes(url){
    fetch(url)
     .then(res => res.json())
     .then(dishArr => {
        dishArr.forEach(dishObj => renderMenu(dishObj))
        renderDetails(dishArr[0]);
    })
}


// Render functions
function renderMenu(dishObj){
    const dish = document.createElement("span")
    dish.textContent = dishObj.name
    dish.addEventListener('click', () => renderDetails(dishObj))
    // console.log(dish)
    menuItems.append(dish);

}

function renderDetails(dishObj){
    console.log(dishObj)
    dishImage.src = dishObj.image
    dishName.textContent = dishObj.name
    dishDescription.textContent = dishObj.description
    dishPrice.textContent = `$${dishObj.price}`   
    numInCart.textContent = dishObj.number_in_bag
    
}


// Even Listeners & Handlers
cartForm.addEventListener("submit", addToCart)  // addEventListener passes event
                                                // to the invoked handler callback function

function addToCart(e){
    e.preventDefault()
    const numToAdd = Number(e.target.amount.value)
    console.logNumber = Number(e.target.amount.value)
    const currNum = Number(numInCart.textContent)
    numInCart.textContent = currNum + numToAdd
    currentDish.number_in_bag += numToAdd;
    renderDetails(currentDetails)
    e.target.reset()
    }


// Initializer
getAllDishes(URL)


//Check for defer attribute.