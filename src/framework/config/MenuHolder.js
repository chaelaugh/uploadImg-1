
const menuList = [];

export function addMenu(...menu) {
  menuList.push(...menu);
}

export function getMenuList() {
  return menuList;
}
