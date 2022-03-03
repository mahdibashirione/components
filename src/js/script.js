
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
btnNext.addEventListener('click', () => {
  positionImage === sliderItemLength - 1 ? positionImage = 0 : positionImage++;
  updateSliderPosition()
})

btnPrev.addEventListener('click', () => {
  positionImage === 0 ? positionImage = sliderItemLength - 1 : positionImage--;
  updateSliderPosition()
})

//LOCATION IN IMAGE
sliderItem.forEach(item => {
  let result = `<span class=" h-2 rounded-full mx-1"></span>`;
  itemPlace.innerHTML += result;
})

document.addEventListener('DOMContentLoaded', () => {
  updateSliderPosition()
})