// To-Do List Functionality
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  addTask(taskText);
  saveTaskToLocalStorage(taskText);

  taskInput.value = ''; // Clear input field
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
  removeTaskFromLocalStorage(li.textContent.trim());
}

// Save task to localStorage
function saveTaskToLocalStorage(task) {
  let tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskText) {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Load tasks from localStorage
function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(task => addTask(task));
}
// Get form and success message elements
const form = document.getElementById('userForm');
const successMessage = document.getElementById('successMessage');

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Display success message
    successMessage.style.display = 'block';

    // Clear form fields
    form.reset();
});
