const heroBackground = document.querySelector(".hero-content");
let heroContent = document.querySelector(".hero-content");
let heroImg = [
    '/hero-section.jpg',
    '/kitchenWare.jpg',
    '/menClothing.jpg',
    '/skincare.jpg',
    '/perfeume.jpg'
];
let current = 0;
const showSlide = (index) =>{
    heroContent.style.backgroundImage = `url(${heroImg[index]})`;   
}
document.getElementById("nextBtn").addEventListener('click', () =>{
    current = (current + 1) % heroImg.length;
    showSlide(current);
})
document.getElementById("prevBtn").addEventListener('click', () =>{
    current = (current - 1 + heroImg.length) % heroImg.length;
    showSlide(current);
})