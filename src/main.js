/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { taskList, themeToggle, form, body } from './js/refs';
import { initTasks, addTask, deleteTask } from './js/tasks';

initTasks(taskList);

form.addEventListener('submit', event => {
  event.preventDefault();

  const titleTrim = event.currentTarget.elements.taskName.value.trim();

  const descriptionTrim =
    event.currentTarget.elements.taskDescription.value.trim();

  if (titleTrim === '' || descriptionTrim === '') {
    return;
  }
  addTask({ title: titleTrim, description: descriptionTrim }, taskList);

  event.currentTarget.reset();
});
