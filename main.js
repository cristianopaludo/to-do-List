// === Create a new container ===
const mainElement = document.body.querySelector('main')
const createNewListBtn = document.querySelector(".create-new-list-btn")

createNewListBtn.addEventListener('click', () => {
  let container = document.createElement('div')

  setContainerId()
  
  container.className = 'container'
  container.id = `list-${containerId}`
  container.innerHTML = `
  <div class="list-container">
    <input type="text" id="title-01" class="list-title-inpt" placeholder="List Title" maxlength="20">
    <button class="delete-list-container delete-btn">
      <svg
      width="17" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.3375 0.829688C6.59062 0.31875 7.11094 0 7.67813 0H13.3219C13.8891 0 14.4094 0.31875 14.6625 0.829688L15 1.5H19.5C20.3297 1.5 21 2.17031 21 3C21 3.82969 20.3297 4.5 19.5 4.5H1.5C0.670312 4.5 0 3.82969 0 3C0 2.17031 0.670312 1.5 1.5 1.5H6L6.3375 0.829688ZM1.5 6H19.5V21C19.5 22.6547 18.1547 24 16.5 24H4.5C2.84531 24 1.5 22.6547 1.5 21V6ZM6 9C5.5875 9 5.25 9.3375 5.25 9.75V20.25C5.25 20.6625 5.5875 21 6 21C6.4125 21 6.75 20.6625 6.75 20.25V9.75C6.75 9.3375 6.4125 9 6 9ZM10.5 9C10.0875 9 9.75 9.3375 9.75 9.75V20.25C9.75 20.6625 10.0875 21 10.5 21C10.9125 21 11.25 20.6625 11.25 20.25V9.75C11.25 9.3375 10.9125 9 10.5 9ZM15 9C14.5875 9 14.25 9.3375 14.25 9.75V20.25C14.25 20.6625 14.5875 21 15 21C15.4125 21 15.75 20.6625 15.75 20.25V9.75C15.75 9.3375 15.4125 9 15 9Z" fill="#DB3636"/>
      </svg>
    </button>
  </div>

  <!-- Item List -->
  <ul>
    <li class="to-do-item">
      <div class="item-container">
        <button class="check-field" onclick="checkItem(this, 'list-${containerId}')"></button>
        <input type="text" class="list-item-inpt" placeholder="List Item" maxlength="30">
      </div>

      <button class="delete-item delete-btn">
        <svg width="17" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.3375 0.829688C6.59062 0.31875 7.11094 0 7.67813 0H13.3219C13.8891 0 14.4094 0.31875 14.6625 0.829688L15 1.5H19.5C20.3297 1.5 21 2.17031 21 3C21 3.82969 20.3297 4.5 19.5 4.5H1.5C0.670312 4.5 0 3.82969 0 3C0 2.17031 0.670312 1.5 1.5 1.5H6L6.3375 0.829688ZM1.5 6H19.5V21C19.5 22.6547 18.1547 24 16.5 24H4.5C2.84531 24 1.5 22.6547 1.5 21V6ZM6 9C5.5875 9 5.25 9.3375 5.25 9.75V20.25C5.25 20.6625 5.5875 21 6 21C6.4125 21 6.75 20.6625 6.75 20.25V9.75C6.75 9.3375 6.4125 9 6 9ZM10.5 9C10.0875 9 9.75 9.3375 9.75 9.75V20.25C9.75 20.6625 10.0875 21 10.5 21C10.9125 21 11.25 20.6625 11.25 20.25V9.75C11.25 9.3375 10.9125 9 10.5 9ZM15 9C14.5875 9 14.25 9.3375 14.25 9.75V20.25C14.25 20.6625 14.5875 21 15 21C15.4125 21 15.75 20.6625 15.75 20.25V9.75C15.75 9.3375 15.4125 9 15 9Z" fill="#D27C2C"/>
        </svg>
      </button>
    </li>
  </ul>

  <!-- Completed List -->
  <div class="completed">
    <h3>Completed (<spam>0</spam>)</h3>
    <ul>
    </ul>
  </div>

  <!-- Add Item -->
  <button class="add-item-btn" onclick="createListItem(this)">
    <svg width="20" height="20" viewBox="-1 -3 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 3.75C11.25 2.92031 10.5797 2.25 9.75 2.25C8.92031 2.25 8.25 2.92031 8.25 3.75V10.5H1.5C0.670312 10.5 0 11.1703 0 12C0 12.8297 0.670312 13.5 1.5 13.5H8.25V20.25C8.25 21.0797 8.92031 21.75 9.75 21.75C10.5797 21.75 11.25 21.0797 11.25 20.25V13.5H18C18.8297 13.5 19.5 12.8297 19.5 12C19.5 11.1703 18.8297 10.5 18 10.5H11.25V3.75Z" fill="#D27C2C"/>
    </svg>
  </button>
  `
  mainElement.insertBefore(container, createNewListBtn)
})

// Define a container ID
let containerId = 0

function setContainerId() {
  containerId++
}

// === Create a new list item ===
function createListItem(addItemButton) {
  let container = addItemButton.parentNode
  let ul = container.children[1]
  let toDoItem = document.createElement('li')

  toDoItem.className = 'to-do-item'
  toDoItem.innerHTML = `
  <div class="item-container">
    <button class="check-field" onclick="checkItem(this, '${container.id}')"></button>
    <input type="text" class="list-item-inpt" placeholder="List Item" maxlength="30">
  </div>

  <button class="delete-item delete-btn">
    <svg width="17" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.3375 0.829688C6.59062 0.31875 7.11094 0 7.67813 0H13.3219C13.8891 0 14.4094 0.31875 14.6625 0.829688L15 1.5H19.5C20.3297 1.5 21 2.17031 21 3C21 3.82969 20.3297 4.5 19.5 4.5H1.5C0.670312 4.5 0 3.82969 0 3C0 2.17031 0.670312 1.5 1.5 1.5H6L6.3375 0.829688ZM1.5 6H19.5V21C19.5 22.6547 18.1547 24 16.5 24H4.5C2.84531 24 1.5 22.6547 1.5 21V6ZM6 9C5.5875 9 5.25 9.3375 5.25 9.75V20.25C5.25 20.6625 5.5875 21 6 21C6.4125 21 6.75 20.6625 6.75 20.25V9.75C6.75 9.3375 6.4125 9 6 9ZM10.5 9C10.0875 9 9.75 9.3375 9.75 9.75V20.25C9.75 20.6625 10.0875 21 10.5 21C10.9125 21 11.25 20.6625 11.25 20.25V9.75C11.25 9.3375 10.9125 9 10.5 9ZM15 9C14.5875 9 14.25 9.3375 14.25 9.75V20.25C14.25 20.6625 14.5875 21 15 21C15.4125 21 15.75 20.6625 15.75 20.25V9.75C15.75 9.3375 15.4125 9 15 9Z" fill="#D27C2C"/>
    </svg>
  </button>
  `

  ul.appendChild(toDoItem)
}

// === Edit button ===
const editItemsBtn = document.querySelector('.edit-items')

editItemsBtn.addEventListener('click', () => {
  const deleteButtons = document.querySelectorAll('.delete-btn')
  freezeButtons()

  if (editItemsBtn.textContent === 'Edit') {
    deleteButtons.forEach((deleteBtn) => {
      deleteBtn.style.visibility = 'visible'

      deleteBtn.addEventListener('click', deleteElement)
    })
    
    editItemsBtn.textContent = 'Done'

  } else if (editItemsBtn.textContent === 'Done') {
    editItemsBtn.textContent = 'Edit'

    deleteButtons.forEach((deleteBtn) => {
      deleteBtn.style.visibility = 'hidden'
    })
  }
})

// === Freeze Buttons ===
function freezeButtons() {
  const addItemButton = document.querySelectorAll('.add-item-btn')
  const checkFieldButton = document.querySelectorAll('.check-field')

  if (editItemsBtn.textContent === 'Edit') {

    addItemButton.forEach((button) => {
      button.classList.add('freeze')
      button.disabled = true
    })

    checkFieldButton.forEach((button) => {
      button.classList.add('freeze')
      button.disabled = true
    })

    createNewListBtn.classList.add('freeze') // Already declared above as global
    createNewListBtn.disabled = true

  } else {

    addItemButton.forEach((button) => {
      button.classList.remove('freeze')
      button.disabled = false
    })

    checkFieldButton.forEach((button) => {
      button.classList.remove('freeze')
      button.disabled = false
    })

    createNewListBtn.classList.remove('freeze')
    createNewListBtn.disabled = false
  }
}

// === Delete button ===
function deleteElement(event) {
  // Parent element of the clicked button
  let parentElement = event.target.parentNode
  
  // depending on which delete button it was clicked (uncheck list vs completed list)
  let ul = parentElement.parentNode 
  
  // it can be the main container (.container) or the completed div (.completed)
  let container = ul.parentNode
  let parentID = container.parentNode.id

  if (parentElement.className === 'list-container') {
    parentElement.parentNode.remove()
  } else { 
    parentElement.remove()

    // If the deleted list item is into completed list, it will also update the completed value
    if (container.className === 'completed') {
      const completedItemsList = document.querySelector(`#${parentID} .completed>ul`)
      const completedCounter = completedItemsList.children.length
      const completedCounterElement = document.querySelector(`#${parentID} .completed spam`)

      updateCompleteList(completedCounterElement, completedCounter)
    }
  }
}

// === Check function ===
function checkItem(checkField, containerID) {
  this.checkField = checkField
  this.containerID = containerID // Get the container ID to prevent appending items in the wrong ul

  const itemContainer = checkField.parentNode // Declared just to now write .parentNode twice
  const toDoItem = itemContainer.parentNode
  
  const toDoList = document.querySelector(`#${containerID}>ul`)
  const completedItemsList = document.querySelector(`#${containerID} .completed>ul`)

  if (checkField.innerHTML === '') {
    checkField.innerHTML = `
    <div class="checked-item">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.0594 4.94063C22.6453 5.52657 22.6453 6.47813 22.0594 7.06407L10.0594 19.0641C9.47341 19.65 8.52185 19.65 7.93591 19.0641L1.93591 13.0641C1.34998 12.4781 1.34998 11.5266 1.93591 10.9406C2.52185 10.3547 3.47341 10.3547 4.05935 10.9406L8.99998 15.8766L19.9406 4.94063C20.5265 4.35469 21.4781 4.35469 22.064 4.94063H22.0594Z" fill="#D27C2C"/>
    </svg>
    </div>
    `

    completedItemsList.appendChild(toDoItem)

  } else {
    checkField.innerHTML = ''
    toDoList.appendChild(toDoItem)
  }

  const completedCounterElement = document.querySelector(`#${containerID} .completed>h3>spam`)
  const completedCounter = completedItemsList.children.length
  // completedCounterElement.textContent = completedCounter

  updateCompleteList(completedCounterElement, completedCounter)
}

// Update Complete List
function updateCompleteList(element, counter) {
  element.textContent = counter
}
