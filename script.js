const input = document.getElementById('input');
const button1 = document.getElementById('button1');
const todolist = document.getElementById('dotolist');

button1.addEventListener('click', function() {
    const newtask = document.createElement('li');
    const completeButton = document.createElement('button'); 
    const deleteButton = document.createElement('button');  

    newtask.textContent = input.value;  
    completeButton.textContent = 'Complete'; 
    deleteButton.textContent = 'Delete task';  

  
    newtask.appendChild(completeButton);
    newtask.appendChild(deleteButton);


    todolist.appendChild(newtask);

 
    input.value = '';

    
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        newtask.style.textDecoration= 'line-through'; 
    });

   
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        newtask.remove(); 
    });
});
