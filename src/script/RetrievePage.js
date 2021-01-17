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
		url = 'https://api.mobitrix.com/getbackregistrationcode.php?email=' + email
	}else{
		url = 'https://api.mobitrix.com/getbackregistrationcode.php?order=' + email
	}
	console.log(url)
	fetch(url)
	.then(response => response.json())
	.then(responseJSON => {
		Swal.close()
		flag = false
		if(responseJSON.code === 1){
			renderTable(responseJSON.data)
		}else{
			Swal.fire({
				icon: 'info',
				text: 'Failed to find your code. Please fill in the correct email address or order number.'
			})
		}
	})
})

function renderTable (arr) {
	const result = document.querySelector('#result')
	const table = document.createElement('table')
	table.className = 'table bg-secondary table-striped mb-5'
	result.appendChild(table)
	let items = '<tr><th>Email</th><th>Start Date</th><th>Expiry Date</th><th>Devicenum</th><th>Registration Code</th></tr>';
	arr.forEach(item => {
		items = items + `<tr><td>${item.email}</td><td>${item.startDate}</td><td>${item.expiryDate}</td><td>${item.devicenum}</td><td>${item.registrationCode}</td></tr>`
	})
	console.log(items)
	table.innerHTML = items
}