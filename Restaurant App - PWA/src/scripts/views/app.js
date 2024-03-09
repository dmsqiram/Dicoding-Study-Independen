import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ button, content }) {
    this._button = button;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector(".skiplink");
    skipLinkElem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#main-content").focus();
    });
  }
}

export default App;
