export function load(key) {
  const itemLocal = localStorage.getItem(key);
  if (itemLocal !== null) {
    return JSON.parse(itemLocal);
  }
}

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
