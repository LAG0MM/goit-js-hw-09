const formData = {email: '',message: ''}
const form = document.querySelector('.feedback-form')
const keyFormData = "feedback-form-state"

const savedData = localStorage.getItem(keyFormData)

if(savedData) {
    const parsedData = JSON.parse(savedData)

    form.email.value = parsedData.email ?? ''
    form.message.value = parsedData.message ?? ''

    formData.email = parsedData.email
    formData.message = parsedData.message
}

form.addEventListener('input', event => {
    const fieldName = event.target.name.trim()
    const fieldValue = event.target.value.trim()

    formData[fieldName] = fieldValue

    localStorage.setItem(keyFormData, JSON.stringify(formData))
})

form.addEventListener('submit', event =>{
    event.preventDefault()
    if(formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields')
        return;
    }else{
        console.log(formData);
        localStorage.removeItem(keyFormData)
        formData.email = '';
        formData.message = '';
        form.reset()
    }
})

