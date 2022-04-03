const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')


let lastChecked;

function handleCheck(event) {
  // Check if the shift key is down and check that it is being checked

  let inBetween = false

  if (event.shiftKey && this.checked) {
    // looping over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
      }
    });
  }
  lastChecked = this
}


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
  console.log(checkbox)
})