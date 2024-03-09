/* eslint-disable quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import { createRestoItemTemplate } from '../../template/create-template';

class FavoriteRestoView {
  getTemplate () {
    return ` 
		 <section class="resto" id="main-content">
		        <div id="container">
		        </div>
   		 </section>
		 `;
  }

  showFavoriteResto (resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      document.getElementById('container').style.display = 'block';
      html = this._getEmptyItemResult();
    }

    document.getElementById('container').innerHTML = html;
    document.getElementById('container').dispatchEvent(new Event('container:updated'));
  }

  _getEmptyItemResult () {
    	return `<h1 class="no-result" style="text-align:center;">Ra ENEK...😊? Tambahne Neng Home!</h1>`;
  }
}

export default FavoriteRestoView;
