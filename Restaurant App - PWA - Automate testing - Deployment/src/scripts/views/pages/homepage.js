/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
import { createRestoItemTemplate } from '../template/create-template';
import DataSource from '../../data/data-resto';
import { async } from 'regenerator-runtime';
import heroImage from '../../../public/images/heros/hero-image.jpg';
import heroImageSmall from '../../../public/images/heros/hero-image-small.jpg';

const Home = {
  async render () {
    return ` 
		<div class="hero">
      <picture>
        <source media="(min-width:600px)" srcset="${heroImage}">
        <source media="(max-width:599px)" srcset="${heroImageSmall}">
        <img class="lazyload" src="${heroImage}" alt="Heroes Image">
      </picture>
        </div>

      <!-- item -->
            <h1 id="maincontent">Jelajahi Restoran</h1>

            <!--data JSON-->
            <div id="resto-list" class="content"></div>
            <div></div>
        </div>`;
  },
  async afterRender () {
    const resto = await DataSource.List();
    const restoContainer = document.getElementById('resto-list');
    console.log(resto);
    if (resto && resto.length > 0) {
      resto.forEach((item) => {
        restoContainer.innerHTML += createRestoItemTemplate(item);
      });
    }
  }
};

export default Home;
