function toggleMenu() {
  const menu = document.querySelector(".sidebar-menu");
  menu.classList.toggle("active");
}

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle("active");
}
