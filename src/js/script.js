
const slider = document.getElementById('slier__content');
const sliderItem = [...slider.children]
const sliderItemLength = sliderItem.length
//BUTTON
const btnNext = document.querySelector('.nextSlide')
const btnPrev = document.querySelector('.prevSlide')

const itemPlace = document.querySelector('.position--item');

var positionImage = 2

function updateSliderPosition() {
  sliderItem.forEach(item => {
    item.classList.add('hidden')
  })
  slider.children[positionImage].classList.remove('hidden')

  const totalItemPlace = [...itemPlace.children]
  totalItemPlace.forEach(item => {
    item.matches('.w-4') ? item.classList.replace('w-4', 'w-2') : item.classList.add('w-2');
    item.classList.add('bg-gray-400')
  })
  totalItemPlace[positionImage].classList.replace('w-2', 'w-4')
  totalItemPlace[positionImage].classList.replace('bg-gray-400', 'bg-white')

}

//BTN NEXT & PRIV SLIDER
function nextSlide() {
  positionImage === sliderItemLength - 1 ? positionImage = 0 : positionImage++;
  updateSliderPosition()
}
btnNext.addEventListener('click', nextSlide)

function prevSlide() {
  positionImage === 0 ? positionImage = sliderItemLength - 1 : positionImage--;
  updateSliderPosition()
}
btnPrev.addEventListener('click', prevSlide)

setInterval(() => {
  nextSlide()
}, 4000);

//LOCATION IN IMAGE
sliderItem.forEach(item => {
  let result = `<span class=" h-2 rounded-full mx-1 duration-500 ease-in transition-all"></span>`;
  itemPlace.innerHTML += result;
})

document.addEventListener('DOMContentLoaded', () => {
  updateSliderPosition()
})

//SECTION HEADER
const btnNav = document.querySelector('.btnNav')
const btnNavItem = btnNav.children
const nav = document.querySelector('.nav')

btnNav.addEventListener('click', () => {
  if (nav.matches('.hidden')) {
    nav.classList.replace('hidden', 'block')
    btnNavItem[0].classList.add('rotate-[45deg]')
    btnNavItem[0].classList.add('translate-y-[9px]')
    btnNavItem[1].classList.add('opacity-0')
    btnNavItem[1].classList.add('-translate-x-4')
    btnNavItem[2].classList.add('-rotate-[45deg]')
    btnNavItem[2].classList.add('-translate-y-[9px]')
  } else {
    nav.classList.replace('block', 'hidden')
    btnNavItem[0].classList.remove('rotate-[45deg]')
    btnNavItem[0].classList.remove('translate-y-[9px]')
    btnNavItem[1].classList.remove('opacity-0')
    btnNavItem[1].classList.remove('-translate-x-4')
    btnNavItem[2].classList.remove('-rotate-[45deg]')
    btnNavItem[2].classList.remove('-translate-y-[9px]')
  }
})