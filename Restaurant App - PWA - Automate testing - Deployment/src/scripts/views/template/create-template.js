import CONFIG from '../../globals/config';

const createRestoItemTemplate = (data) => ` 
<div class="card">
      <div class="card-header">
          <div class="card-city">Kota ${data.city}</div>
          <div class="card-image">
          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${
  data.pictureId
}" alt="${data.name.replace(/\s+/g, '-').toLowerCase()}-big-img-header"/>
          </div>
      </div>
      <div class="card-body">
          <div class="card-rating">
              <a class="link-rating" id=${data.id}  alt=" ${data.city} ${
  data.rating
}">Rating ${data.rating}</a>
          </div>
          <div class="card-description">
              <h2><a class="link-name" href="#/restaurant/${data.id}">${
  data.name
}</a></h2>
              <p>${data.description}</p>
          </div>
      </div>
  </div>
`;

const createLikeButtonTemplate = () => ` 
<button aria-label="like this restaurant" id="likeButton" class="like">+</button>
`;

const createLikedButtonTemplate = () => ` 
<button aria-label="unlike this restaurant" id="likeButton" class="like">-</button>
`;

const createRestoDetailTemplate = (data) => `
    <div class="bg-frame">    
    <div class="detail-resto" tabindex="0" id="resto-detail">
      
      <div class="image-info">  
        <h2 style="color:red;">${data.name}</h2>
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${
  data.pictureId
}" alt="${data.name.replace(/\s+/g, '-').toLowerCase()}-big-img-header"/>
      </div>

      <div class="resto-info">
        <h3 style="color:red;">Information</h3>
        <h4>🏙️City</h4><p>${data.city}</p>
        <h4>📍Address</h4><p>${data.address}</p>
        <h4>⭐Rating</h4><p>${data.rating}</p>
      </div>

      <h3 style="color:red;">Description</h3>
      <p>${data.description}</p>

    
    <div class="menu">
      <h2 class="menu-group-heading" style="color:red;">Food</h2>
      <div class="menu-group"> 
             ${data.menus.foods
               .map(
                 (food, i) => `
                 <div class="menu-item">
                   <div class="menu-item-text">
                   <p>🍔 ${food.name}</p>
                      </div>
                  </div>     
                        `
               )
               .join('')}  
      </div>
      <h2 class="menu-group-heading" style="color:red">Drink</h2>
      <div class="menu-group"> 
             ${data.menus.drinks
               .map(
                 (drink, i) => `
                 <div class="menu-item">
                   <div class="menu-item-text">
                   <p>🥂 ${drink.name}</p>
                      </div> 
                  </div>    
                        `
               )
               .join('')}
      </div>
      <h2 class="menu-group-heading" style="color:red">Review</h2>
      <div class="menu-group">
        <p>Oleh ${data.customerReviews[0].name} : </p>
        <p>${data.customerReviews[0].review}</p>
        <p>Pada ${data.customerReviews[0].date}</p>
      </div>
    </div>`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate
};
