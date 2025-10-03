//Establishes a list of favorite foods and uses them to fill in the favFoods Element
let foods = ["Pasta", "Pancakes", "Milkshakes"];
let starter = "My Favorite foods are: ";
for (let food of foods){
    starter += food+", ";
}
// removes the last ", " and puits starter into the favFoods element in HTML
document.getElementById("favFoods").textContent=starter.slice(0,-2);

//Displays an alert when the courses Submit button is pressed
function coursesAlert(){
    let starter = "You have Taken: ";
    for (let i of document.getElementsByClassName("courseSelect")){
        if (i.checked) {
            starter += i.id + ", ";
        }
    }
    // removes the last ", "
    alert(starter.slice(0,-2));

}
let altContent = `One component that I chose to use from bootstrap on this page is the Alert.
    I thought this would be a great fit for the Say Hello button. It helps to draw attention to the greeting so that it can't be missed.
    It also allows the user to cleanly dismiss the greeting or if they want create multiple greeting messages.`
function changeText(){
    //uses .innerHTML over .textContent so that the link in the second paragraph will work
    let temp = document.getElementById("paraID").innerHTML;
    document.getElementById("paraID").innerHTML = altContent;
    altContent = temp;
}


// Code implemented from Bootstrap example at https://getbootstrap.com/docs/5.3/components/alerts/

//div for alerts
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

//function to add alerts to the div
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('helloSubmit')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert("Hello, " + document.getElementById("nameIn").value + "!", 'info')
  })
}

