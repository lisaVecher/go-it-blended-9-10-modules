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
import { initTheme, toggleTheme } from './js/theme-switcher';

initTasks(taskList);
initTheme(body);

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

themeToggle.addEventListener('click', () => {
  toggleTheme(body);
});

taskList.addEventListener('click', event => {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const item = event.target.closest('.task-list-item');
  const id = item.dataset.id;
  deleteTask(id, taskList);
});
