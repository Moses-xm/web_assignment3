/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const daySelector = document.querySelectorAll(".day-selector li")
daySelector.forEach(dayItem => {
  dayItem.onclick = function() {
    if (this.classList.contains("clicked")) {
      this.classList.remove("clicked")
    } else {
      this.classList.add("clicked")
    }
    calculateTotalCost()
  }
})



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.getElementById("clear-button")
clearButton.onclick = function() {
  daySelector.forEach(dayItem => {
    dayItem.classList.remove("clicked")
    fullDayCallback()
  })
  calculateTotalCost()
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfDay = document.getElementById("half")

function halfDayCallback() {
  halfDay.classList.add("clicked")
  fullDay.classList.remove("clicked")
  dailyRate = 20
  calculateTotalCost()
}
halfDay.onclick = halfDayCallback

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullDay = document.getElementById("full")

function fullDayCallback() {
  fullDay.classList.add("clicked")
  halfDay.classList.remove("clicked")
  dailyRate = 35
  calculateTotalCost()
}
fullDay.onclick = fullDayCallback


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculatedCost = document.getElementById("calculated-cost")

function calculateTotalCost() {
  let num = 0
  daySelector.forEach(dayItem => {
    if(dayItem.classList.contains("clicked")) {
      num ++
    }
  })
  const totalCost = dailyRate * num
  calculatedCost.innerHTML = totalCost
}