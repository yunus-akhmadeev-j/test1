import HeaderComponent from "./view/header.js";
import FormAddTaskComponent from "./view/task-adder.js";
import TaskColumnComponent  from "./view/tasks-list-component.js";
import TaskComponent from "./view/task-component.js";
import { render, RenderPosition } from "./framework/render.js";
import TaskBasket from "./view/task-basket.js";



const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".newtask-add-button");
const basketContainer = document.querySelector(".task-basket");
const taskcolumnContainer = document.querySelector(".tasks")



render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskBasket(), basketContainer, RenderPosition.AFTERBEGIN );
render(new TaskColumnComponent(), taskcolumnContainer, RenderPosition.AFTERBEGIN);


