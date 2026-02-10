import { createMarkup } from './markup-tasks';

export function renderTasks(tasks, listEl) {
  listEl.innerHTML = '';

  const markup = tasks.map(createMarkup).join('');
  listEl.insertAdjacentHTML('beforeend', markup);
}
