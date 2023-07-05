// Parallax effect JS

const main_block = document.querySelector('.main_block')
window.addEventListener('scroll', ()=>{
	let scrollPx = window.pageYOffset * +0.3
	main_block.style.transform = `translateY(${scrollPx}px)`
})

// ---------------



// -------------------------

const slider = document.querySelector('.slider')

const sliderImgs = ['slider2.jpg', 'slider3.jpg', 'slider4.jpg', 'slider5.jpg']

let countSlider = 0

setInterval(()=>{
	slider.style.backgroundImage = `url(img/${sliderImgs[countSlider]})`
	
	countSlider++

	if(countSlider > 3){
		slider.style.backgroundImage = `url(img/slider1.png)`
		countSlider = 0
	}
}, 2000)

// --------------------------


const countProjects = document.querySelectorAll('.countProject')
countProjects.forEach((element)=>{
	element.innerText = '0'

	const addNumber = ()=>{
		const innerNumber = +element.innerText
		const targetNumber = element.getAttribute('data-target')
		
		if(innerNumber < targetNumber){
			element.innerText = innerNumber + 3
			setTimeout(addNumber, 20)
		}
		else{
			element.innerText = targetNumber
		}
	}
	addNumber()
})

// --------------------------------------


window.addEventListener('scroll', ()=>{
	let z = div1.getBoundingClientRect().top + 100
	if(window.innerHeight > z){
		
	}
})


// -----------------------------------



const btn_all_services = document.querySelector('.btn_all_services')
const block2Sect = document.querySelector('.block2 .container section')
const dropServices = document.querySelector('.drop_services')

let block2SectDefHeight = 400

let countClick = 0

btn_all_services.addEventListener('click', ()=>{
	if(countClick % 2 == 0){
		const dropServicesStyles = getComputedStyle(dropServices)
		const dropServicesHeight = dropServicesStyles.height
		block2Sect.style.height = dropServicesHeight
	}
	else{
		block2Sect.style.height =  block2SectDefHeight + 'px'
	}
	countClick++
})

// -----------------------------------



// Menu HOVER EFFECT

const menuLi = document.querySelectorAll('.main_block menu li')

for(let i = 0; i < menuLi.length; i++){
	menuLi[i].onmouseover = function(){
		[...menuLi].forEach((allLists)=>{
			allLists.classList.add('li_active')
			this.classList.remove('li_active')
			this.style.borderBottomColor = '#FFFFFF'
		})
	}
	menuLi[i].onmouseleave = function(){
		[...menuLi].forEach((allLists)=>{
			allLists.classList.remove('li_active')
			this.style.borderBottomColor = 'rgba(0, 0, 0, 0)'
		})
	}
}

const openModal = document.querySelector('.open_modal')
const clsModal = document.querySelector('.cls_modal')
const modalWindow = document.querySelector('.modal_window')

openModal.addEventListener('click', ()=>{
	modalWindow.style.display = 'flex'
	setTimeout(()=>{
		modalWindow.style.opacity = 1
	}, 300)
})

clsModal.addEventListener('click', ()=>{
	modalWindow.style.opacity = 0
	setTimeout(()=>{
		modalWindow.style.display = 'none'
	}, 300)
})

const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.content')

tabs.forEach((item)=>{
	item.onclick = ()=>{
		const dateTab = item.getAttribute('date-tab')
		const currentTab = document.querySelector(dateTab)

		tabs.forEach((item)=>{
			item.classList.remove('active_tab')
		})
		contents.forEach((item)=>{
			item.classList.remove('active_content')
		})

		item.classList.add('active_tab')
		currentTab.classList.add('active_content')
	}
})










