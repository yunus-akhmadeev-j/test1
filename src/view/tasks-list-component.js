import { createElement } from "../framework/render.js";

function createTaskColumnComponentTemplate() {
  return( ` 
  <div class="task-body">
  <ul class="task-list"><h3>Backlog</h3>
      <li class="task1">Выучить JS</li>
      <li class="task1">Выучить React</li>
      <li class="task1">Сделать домашку</li>
  </ul>
</div>
<div class="task-body">
  <ul class="task-list"><h3>In progress</h3>
      <li class="task1">Выпить смузи</li>
      <li class="task1">Попить воды</li>
  </ul>
</div>
<div class="task-body">
  <ul class="task-list"><h3>Done</h3>
      <li class="task1">Позвонить маме</li>
      <li class="task1">Погладить кота</li>
  </ul>
</div>
<div class="task-body">
  <ul class="task-list"><h3>Basket</h3>
      <li class="task1">Сходить погулять</li>
      <li class="task1">Прочитать Войну и Мир</li>
      
  </ul>
</div>`);
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
