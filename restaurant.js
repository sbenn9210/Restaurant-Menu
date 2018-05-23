let menu = dishes
let menuDiv = document.getElementById("container")

let menuTitle = `<div class="top">
                  <h1 class="center">Menu</h1>
                  <p>We take garden fresh seriously, offering you a farm to table dining experience. Our ingredients are found locally, using only the best organic suppliers available. Check out our popular lunch salad buffet!</p>
                </div>
                <div>
                  <h2 class="center">Starters</h2>
                  <hr class="style-seven">
                </div>
                `

                menuDiv.innerHTML += menuTitle


menu.forEach(function(dish){
    let menuItem =


                  `<div class="description">
                    <div class="img-wrapper">
                      <img class="dish_img" src="${dish.imageURL}">
                    </div>
                    <div class="text-wrapper">
                      <h3>${dish.title}</h3>
                      <p>${dish.description}</p>
                      <p>$${dish.price}</p>
                    </div>
                  </div>`

                menuDiv.innerHTML += menuItem
})
