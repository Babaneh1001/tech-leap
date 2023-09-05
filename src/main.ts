import './style.css';

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


const nextBtn = document.querySelector('.next-btn') as HTMLElement;
const prevBtn = document.querySelector('.prev-btn') as HTMLElement;
const slidesContainer = document.querySelector(".wrapper") as HTMLElement;
const slides: HTMLElement[] = [...document.querySelectorAll('.testimonial-carousel-content')] as HTMLElement[];
const slideIndicators: HTMLButtonElement[] = [...document.querySelectorAll('.slider-indicator')] as HTMLButtonElement[];

console.log(slides)

const numberOfSlides = slides.length;
const interval = 1;

console.log(numberOfSlides)

let slideNumber = 0; 

// image slider nxt btn
// when you click on the next btn run the following functions
nextBtn.addEventListener('click', () => {

  // for each slide carousel if there is the active class remove it 
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    // slide[i].style.marginLeft = `-${100 * i}%`;
    // slide.style.backgroundColor = 'red';
  });

  // for each indicator if there is the active class remove it 
  slideIndicators.forEach((slideIndicator) => {
    slideIndicator.classList.remove('testimonial-carousel-indicators-active');
  });

  // increase slide number for every click event
  slideNumber++; 

  // debugger
  // on first click the slideNumber = 1
  // if (1 > ) 
  if(slideNumber > (numberOfSlides - interval)) {
    slideNumber = 0; 
  }

  slides[slideNumber].classList.add('active');
  slideIndicators[slideNumber].classList.add('testimonial-carousel-indicators-active');
});

// image slider prevBtn

prevBtn.addEventListener('click', () => {
  
  // for each slide carousel if there is the active class remove it 
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    // slide[i].style.marginLeft = `-${100 * i}%`;
    // slide.style.backgroundColor = 'red';
  });

  // for each indicator if there is the active class remove it 
  slideIndicators.forEach((slideIndicator) => {
    slideIndicator.classList.remove('testimonial-carousel-indicators-active');
  });

  // increase slide number for every click event
  slideNumber--; 

  // debugger
  // on first click the slideNumber = 1
  // if (1 > ) 
  if(slideNumber < 0) {
    slideNumber = numberOfSlides - 1; 
  }

  slides[slideNumber].classList.add('active');
  slideIndicators[slideNumber].classList.add('testimonial-carousel-indicators-active');
});

// imagfe slider autoplay 

let playSlider: any; 

let repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    slideIndicators.forEach((slideIndicator) => {
      slideIndicator.classList.remove('testimonial-carousel-indicators-active');
    });
 
    slideNumber++; 

    if(slideNumber > (numberOfSlides - interval)) {
      slideNumber = 0; 
    }
    slides[slideNumber].classList.add('active');
    slideIndicators[slideNumber].classList.add('testimonial-carousel-indicators-active');
  }, 4000);
}
repeater();


// stop the image slider on mousehover
slidesContainer.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

// start the image slider on mouseout 
slidesContainer.addEventListener('mouseout', () => {
  repeater();
})