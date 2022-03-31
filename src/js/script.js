
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

// SECTION CLICK SLIDE
const solidAll = [...document.querySelector('.solidContainer').children]

solidAll.forEach(solidItem => {
  solidItem.addEventListener('click', e => {

    if (window.innerWidth > 640) {
      solidAll.forEach(item => {
        item.classList.contains('md:w-full') ? item.classList.replace('md:w-full', 'md:w-16') : ''
      })

      let classTarget = e.target.parentElement.classList
      classTarget.replace('md:w-16', 'md:w-full')
    } else {
      solidAll.forEach(item => {
        item.classList.contains('h-26') ? item.classList.replace('h-26', 'h-10') : ''
      })

      let classTarget = e.target.parentElement.classList
      classTarget.replace('h-10', 'h-26')
    }
  })
})

//note app components
const btnDark = document.querySelector('.btnDark')

btnDark.addEventListener('click', e => {
  if (e.target.matches('.btnDark')) {
    if (e.target.matches('.justify-end')) {
      e.target.classList.replace('justify-end', 'justify-start')
      document.documentElement.classList.remove('dark')
    } else {
      e.target.classList.replace('justify-start', 'justify-end')
      document.documentElement.classList.add('dark')
    }
  }
})

const btnClose = document.querySelectorAll('.close')
const btnAddNote = document.querySelectorAll('.addNote')
const addNotePage = document.querySelector('.addNotePage')

btnAddNote.forEach(item => {
  item.addEventListener('click', (e) => {
    addNotePage.classList.replace('hidden', 'flex')
  })
})

btnClose.forEach(item => {
  item.addEventListener('click', (e) => {
    addNotePage.classList.replace('flex', 'hidden')
  })
})

const addToPage = document.querySelector('.btnAddToPage')
const titleInput = document.querySelector('.titleInput')
const textInput = document.querySelector('.textInput')
var contentPage = []

const saveLocal = (note) => {
  localStorage.setItem('noteItem', JSON.stringify(note))
}

const getLocal = () => {
  return JSON.parse(localStorage.getItem('noteItem'))
}

addToPage.addEventListener('click', (e) => {
  if (titleInput.value.length > 2 && textInput.value.length > 2) {
    contentPage.push({ title: titleInput.value, text: textInput.value })
    saveLocal(contentPage)
    const localItems = getLocal()
    contentPage = localItems
    uiNotePage(contentPage)
  }
})

const uiNotePage = (content) => {
  content.forEach(itemNote => {
    if (titleInput.value.length > 2 && textInput.value.length > 2) {
      let div = document.createElement('div')
      div.innerHTML = `
      <div class="bg-purple-700 text-ellipsis rounded-lg cursor-pointer py-2 px-3 h-[100px] md:w-68 md:h-32">
        <h2 class="dark:text-white text-xl">${itemNote.title}</h2>
        <p class="dark:text-white w-full line-clamp-2 text-ellipsis overflow-hidden md:line-clamp-3">${itemNote.text}</p>
      </div>
      `
      document.querySelector('.notePage').appendChild(div)
      textInput.value = ''
      titleInput.value = ''
      addNotePage.classList.replace('flex', 'hidden')
    }
  })
}

console.log(contentPage)