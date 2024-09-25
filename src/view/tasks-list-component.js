import { createElement } from "../framework/render.js";

function createTaskColumnComponentTemplate() {
  return (` 
  
  

  <div class="ttt">
  <div class="task-body">
      <ul class="task-list">Backlog
          <li class="task1">Выучить JS</li>
          <li class="task1">Выучить React</li>
          <li class="task1">Сделать домашку</li>
      </ul>
  </div>
  <div class="task-body">
      <ul class="task-list">In progress
          <li class="task1">Выпить смузи</li>
          <li class="task1">Попить воды</li>
      </ul>
  </div>
  <div class="task-body">
      <ul class="task-list">Done
          <li class="task1">Позвонить маме</li>
          <li class="task1">Погладить кота</li>
      </ul>
  </div>
  <div class="task-body">
      <ul class="task-list">Basket
          <li class="task1">Сходить погулять</li>
          <li class="task1">Прочитать Войну и Мир</li>
          
      </ul>
  </div>
         </div>   

`);
}

export default class TaskColumnComponent {
  getTemplate() {
    return createTaskColumnComponentTemplate();
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
