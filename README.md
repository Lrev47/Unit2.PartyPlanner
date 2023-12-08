# Unit2.PartyPlanner

## promt

A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.

## What do I need?

fetch /events from API

delete button for each party

add objects to an array

display info to dom dynamically

click event for delete button
----------------------------------------

const fetchDataAndDisplay = async () => {
    const dataArray = await fetchEvents();
    if (dataArray) {
        dataArray.forEach(eventData => {
            // Creating am umordered list
            const listItem = document.createElement('ul');
            listItem.textContent = `Event Name: ${eventData.name}`;
            
            // Creating a sublist
            const sublist = document.createElement('li');
            sublist.textContent = `Event Date: ${eventData.date}`;
//creating elements for time location and description
            const locationItem = document.createElement('li');
            locationItem.textContent = `Event Location: ${eventData.location}`;

            const descriptionItem = document.createElement('li');
            descriptionItem.textContent = `Event Description: ${eventData.description}`;

            const timeItem = document.createElement('li');
            timeItem.textContent = `Event Time: ${eventData.time}`;
//appending time location and desctiption
            sublist.appendChild(timeItem);
            sublist.appendChild(locationItem);
            sublist.appendChild(descriptionItem);
            
            // Append the sublist to the outer list item
            listItem.appendChild(sublist);
            
            // Append the outer list item to the main display element
            eventDisplayElement.appendChild(listItem);
        });
    }
};

fetchDataAndDisplay();
 
const currentObject = {}

addEventElement.addEventListener("click", (e) =>{
  e.preventDefault();
  currentObject.name = currentNameValue;
  currentObject.date = currentDateValue;
  currentObject.time = currentTimeValue;
  currentObject.location = currentLocationValue;
  currentObject.description = currentDescriptionValue;
  console.log("Current Object",currentObject);
} )
