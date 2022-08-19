// const toggleEl = document.getElementById("webapp_cover");
// const menu = document.querySelector(".nav");
// const nav = document.getElementById("nav-items")

// let hidden = true


// toggle.addEventListener('click', () => {
//     hidden = !hidden
//     nav.style.display = hidden? "block" : "none" 

// })


// window.onload = () => {
//     // Get the button, and when the user clicks on it, execute myFunction
//     document.getElementById("webapp_cover").onclick = function() {myFunction()};
  
//     /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
//     function myFunction() {
//       document.getElementById("nav-items").classList.toggle("show");
//     }
//   }

let toggleEl = document.getElementById("nav-items")
let toggleerEl = document.getElementById("toggleer")
let dropdowns = document.getElementsByClassName("dropdown-content");

toggleerEl.addEventListener('click', () => {
    toggleEl.classList.toggle("show");
})

window.onclick = function(event) {
    
    if(!event.target.matches(".toggle")){
        for (let i = 0; i < dropdowns.length; i++){
            let openDropDown = dropdowns[i];
            
            
            if (openDropDown.classList.contains('show')){
                toggleerEl.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
                    
            }else {
                toggleerEl.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
            }
        }
    } 
}




    // const menu = $('#menu-ctn'),                   
    // bars = $('.menu-bars'),                   
    // items = $('.nav-item'),                 
    // content = $('#menu-cnt');



    // (function() {
//     const menu = document.getElementById('menu-ctn')
//     const bars = document.getElementsByClassName('menu-bars')
//     const items = document.getElementsByClassName('nav-item')
//     const content = document.getElementById('menu-cnt')
    
    
//     let firstClick = true
//     let menuClosed = true


//     menu.addEventListener('click', event => { 
//         if(!firstClick) {
//             for (let i = 0; i < bars.length; i++){
//                 bars[i].classList.toggle('crossed hamburger');
//             }
            
//         } else {
//             for(let i = 0; i < bars.length; i++){
//                 bars[i].classList.add('crossed');
//             }
//             firstClick = false
//         }

//         menuClosed = !menuClosed
//         content.toggleClass('dropped');
//         event.stopPropagation()
//     })

//     // menu.addEventListener('click', event => {
//     //     handleMenu(event)
        
//     // })

// }())
