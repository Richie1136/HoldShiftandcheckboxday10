const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

const handleCheck = (event) => {
  console.log(event)
}


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
  console.log(checkbox)
})