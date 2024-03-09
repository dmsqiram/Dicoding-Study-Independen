import '../styles/main.css';
import data from '../DATA.json';

let restaurantElements = '';
data.restaurants.forEach((dataResto) => {
    restaurantElements += 
            `
                <div class="card">
                    <div class="card-header">
                        <div class="card-city">Kota ${dataResto.city}</div>
                        <div class="card-image">
                            <img src="${dataResto.pictureId}" alt="">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-rating">
                            <a class="link-rating" href="#">Rating ${dataResto.rating}</a>
                        </div>
                        <div class="card-description">
                            <h2><a class="link-name" href="#">${dataResto.name}</a></h2>
                            <p>${dataResto.description}</p>
                        </div>
                    </div>
                </div>
            `;
        }); 
        document.querySelector('.content').innerHTML = restaurantElements;   


// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

