export function createMarkup({ id, title, description }) {
  return `
    <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn" type="button">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
    </li>
  `;
}
