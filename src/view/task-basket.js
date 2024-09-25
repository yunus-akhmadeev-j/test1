import {createElement} from '../framework/render.js';


function createTaskBasketTemplate() {
    return (
        `
            <button class="button-clear">
                <a href="#">
                    <p class="clear-button-text">Очистить</p>
                </a>
            </button>
        `
      );
}


export default class TaskBasket {
  getTemplate() {
    return createTaskBasketTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
