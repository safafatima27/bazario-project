
let sidebarContainer = document.querySelector(".sidebar-container");
const hamburgerIcon = document.querySelector(".hamburger");


let check = 0;

const sidebarShhow = () =>{
    if(check == 0){
        sidebarContainer.style.display = 'block';
        hamburgerIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        check =1;
    }
    else{
        sidebarContainer.style.display = 'none';
        hamburgerIcon.innerHTML = `<img class="hamburger-icon" src="/public/Hamburger.svg">`; 
        check = 0;  
    }
}
hamburgerIcon.addEventListener('click', sidebarShhow);


document.querySelectorAll('.sidebar-dropdown').forEach(dropdown => {
dropdown.addEventListener('click', function () {
const submenu = this.querySelector('.sidebar-dropdown-menu');
const icon = this.querySelector('i')
// Toggle visibility
if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
} else {
    submenu.style.display = 'block';
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up');
}
});
});

const swiper = new Swiper('.shop-category-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true,
});