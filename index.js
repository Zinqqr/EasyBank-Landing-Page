const closeBtn = document.getElementById('close-nav-btn');
const openBtn = document.getElementById('open-nav-btn');
const navLinks = document.getElementById('nav-links');

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    openBtn.style.display = 'none';

}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    openBtn.style.display = 'flex';

}