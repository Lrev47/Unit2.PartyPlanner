//grabbing input boxes and add event button from DOM

const inputNameElement = document.getElementById("inputName");
const inputDateElement = document.getElementById("inputDate");
const inputTimeElement = document.getElementById("inputTime");
const inputLocationElement = document.getElementById("inputLocation");
const inputDescriptionElement = document.getElementById("inputDescription");
const addEventElement = document.getElementById("addEvent");
const eventDisplayElement = document.getElementById("eventDisplay");

//this funtion will take the current value of an input box
//and retun its value on input.
function trackInputValue(InputElement){
let currentInputValue = "";
InputElement.addEventListener("input", (e) =>{
    currentInputValue = e.target.value;
    console.log("current value:",currentInputValue);
})};

//Using this function to track the value of all input boxes
//values will be stored in dynamically updating variables.
let currentNameValue = trackInputValue(inputNameElement);
let currentDateValue = trackInputValue(inputDateElement);
let currentTimeValue = trackInputValue(inputTimeElement);
let currentLocationValue = trackInputValue(inputLocationElement);
let currentDescriptionValue = trackInputValue(inputDescriptionElement);
//saving the API URL in a varible for rapid reusability
const cohortName = "2310-FSA-ET-WEB-PT-SF-B-Luis/events/";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${cohortName}`;
console.log(API_URL)


//this function will fetch the events data 

const fetchEvents = async () => {
    try {
      const response = await fetch(API_URL);
      let dataNew = await response.json();
      if (dataNew.success) {
        return dataNew.data;
      }
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
};const fetchDataAndDisplay = async () => {
    const dataArray = await fetchEvents();
    if (dataArray) {
        dataArray.forEach(eventData => {
            // Creating a list
            const listItem = document.createElement('ul');
            listItem.textContent = `Event Name: ${eventData.name}`;
            
            // Creating a sublist
            const sublist = document.createElement('li');
            sublist.textContent = `Event Date: ${eventData.date}`;

            const locationItem = document.createElement('li');
            locationItem.textContent = `Event Location: ${eventData.location}`


            const descriptionItem = document.createElement('li');
            descriptionItem.textContent = `Event Description: ${eventData.description}`

            sublist.appendChild(locationItem)
            sublist.appendChild(descriptionItem)
            
            // Append the sublist to the outer list item
            listItem.appendChild(sublist);
            
            // Append the outer list item to the main display element
            eventDisplayElement.appendChild(listItem);
        });
    }
};

fetchDataAndDisplay();
