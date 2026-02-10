import { load, save } from './local-storage-api';
import { renderTasks } from './render-tasks';

const tasksKey = `tasks`;

let tasks = [];

export function initTasks(listEl) {
  const savedTasks = load(tasksKey);

  tasks = savedTasks ?? [];

  renderTasks(tasks, listEl);
}

export function addTask({ title, description }, listEl) {
  const id = String(Date.now());

  const obj = {
    id,
    title,
    description,
  };

  tasks.push(obj);

  save(tasksKey, tasks);

  renderTasks(tasks, listEl);
}

export function deleteTask(id, listEl) {
  tasks = tasks.filter(task => task.id !== id);

  save(tasksKey, tasks);

  renderTasks(tasks, listEl);
}
