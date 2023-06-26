import './style.css';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

type CSSSelector = string;

interface MyComponent {
  selector: CSSSelector | HTMLElement;
}

const args: string = '';

// const swiper = new Swiper(...);
// const swiper = new Swiper(args, ...);

// const swiper = new Swiper([...]);
// gets the elements in the DOM and saves to a variable 
// adding navToggle: ***HTMLElement | any*** this tells typescript what kind of element this is 
// and you don't need to add the optional "?" to the defined variable 
// navToggle?.addEventListener('click', () => {}
const navToggle: HTMLElement | any = document.querySelector(".mobile-nav-toggle");
const primaryNav: HTMLElement | any = document.querySelector(".primary-navigation");

// adding an event listener 
navToggle.addEventListener('click', () => {
  // document.body.style.overflow = "hidden"; 
  // Prevent scrolling
  // the hasAttribute()checks if the attribute is present or not and then a tenary operator to do something depending on conditon
  // read up on aria-expanded
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
  // using the data-visible attribute to add style to nav you could also use a class 
  // so instead of toggleAttribute() it would be classList 
  primaryNav?.toggleAttribute("data-visible");
  // console.log('working')
})

// function closePopupAfterDelay(delay: number) {
//   setTimeout(closePopup, delay);
// }

