import Swal from 'sweetalert2'

const form = document.querySelectorAll('#retrieve-form')[0]
const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
let flag = false
form.querySelector('#submit').addEventListener('click', (e) => {
	if(flag){
		return false
	}
	flag = true
	Swal.showLoading()
	e.preventDefault()
	const email = document.querySelector('#email').value
	if(!email){
		return false
	}
	let url
	if(reg.test(email)){
		url = 'https://ad-fe.mobitrix.com/getbackregistrationcode?email=' + email
	}else{
		url = 'https://ad-fe.mobitrix.com/getbackregistrationcode?order=' + email
	}
	console.log(url)
	fetch(url)
	.then(response => response.json())
	.then(responseJSON => {
		Swal.close()
		flag = false
		if(responseJSON.code === 1){
			if(reg.test(email)){
				Swal.fire({
					icon: 'success',
					text: 'The registration code has been sent to your email ' + email
				})
			}else {
				renderTable(responseJSON)
			}
		}else if (responseJSON.code === -2) {
			Swal.fire({
				icon: 'info',
				text: 'You have inquired more than three times today, please try again tomorrow'
			})
		}else{
			Swal.fire({
				icon: 'error',
				text: 'Failed to find your code. Please fill in the correct email address or order number.'
			})
		}
	})
})

function renderTable (obj) {
	const result = document.querySelector('#result')
	const table = document.createElement('table')
	table.className = 'table bg-secondary table-striped mb-5'
	result.appendChild(table)
	let items = '<tr><th>Email</th><th>Registration Code</th></tr>';
	items = items + `<tr><td>${obj.email}</td><td>${obj.lisenceid}</td></tr>`
	table.innerHTML = items
}
