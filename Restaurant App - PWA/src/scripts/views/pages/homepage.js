import { createRestoItemTemplate } from "../template/create-template";
import DataSource from "../../data/data-resto";
import { async } from "regenerator-runtime";
import heroImage from "../../../public/images/heros/hero-image.jpg";

const Home = {
  async render() {
    return ` 
		<div class="hero">
        <img
            src="${heroImage.src}"        
            width="${heroImage.width}"
            height="${heroImage.height}"
            loading="lazy"
            alt="Gambar Hero"
        />
        </div>

		    <!-- item -->
            <h1 id="maincontent">Jelajahi Restoran</h1>

            <!--data JSON-->
            <div id="resto-list" class="content"></div>
            <div></div>
        </div>`;
  },
  async afterRender() {
    const resto = await DataSource.List();
    const restoContainer = document.getElementById("resto-list");
    console.log(resto);
    if (resto && resto.length > 0) {
      resto.forEach((item) => {
        restoContainer.innerHTML += createRestoItemTemplate(item);
      });
    }
  },
};

export default Home;
