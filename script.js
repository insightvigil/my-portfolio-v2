/*Slide show*/

let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img')
console.log(images);
console.log(currentImageIndex);

function switchImage() {
images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex+1) % images.length;
    images[currentImageIndex].classList.add('active')
    
}

setInterval(switchImage, 3000)


/*----------Navigation---------*/ 

const nav = document.getElementById('nav');
console.log(nav)
const menuIcon = document.getElementsByClassName('menu')[0];
console.log(menuIcon)
function toggleMenu() {
    nav.classList.toggle("active")
    menuIcon.classList.toggle("active");
}

function hideMenu() {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
}

/*Banner */

const bannerContent = document.getElementById('bannerContent');
let messageHTML = `<span class="contact-message"> Let’s keep in touch — my networks are open to share ideas and build together.</span>`;
let repeatedMessage = messageHTML.repeat(10);

//Set the repeated messages as the content
bannerContent.innerHTML = repeatedMessage + repeatedMessage;
