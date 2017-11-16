export const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

export function getStyle(el) {
  return document.querySelector(el).style;
}
