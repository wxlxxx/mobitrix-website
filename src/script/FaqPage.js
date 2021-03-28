import '../style/faq.scss'

const faqTabsItems = document.querySelectorAll('.faq-tabs .faq-tab-item')
faqTabsItems.forEach(item => {
	item.addEventListener('click', () => {
		faqTabsItems.forEach(ele => {
			ele.classList.remove('active')
		})
		item.classList.add('active')
		document.querySelectorAll('.tab-contents .tab-content').forEach(ele => {
			ele.classList.add('d-none')
		})
		if(item.getAttribute('data-target')){
			document.querySelector(item.getAttribute('data-target')).classList.remove('d-none')
		}
	})
})

const details = document.querySelectorAll('.faq-list details')
details.forEach((item, index) => {
	item.addEventListener('click', () => {
		details.forEach((ele, i) => {
			if(index !== i){
				ele.removeAttribute('open')
			}
		})
		if(item.getAttribute('open')){
			item.removeAttribute('open')
		}
	})
})

if(window.location.hash){
	const hash = window.location.hash
	document.querySelector(hash).setAttribute('open', 'open')
}
