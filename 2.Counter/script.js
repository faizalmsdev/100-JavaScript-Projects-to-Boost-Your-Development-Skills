const actions = Array.from(document.querySelectorAll('[data-action]')); //This can be used to gather all the actions on data into a single array;

let counter = localStorage.getItem('counter') || 0; //This can render the local storage value and load the value if it had;
document.querySelector('.counter-value').innerText = counter;

actions.forEach(action => {//select all the element in an array to perform an action;
    action.addEventListener('click',() => {//adding an event listener to all the element/button;
        const type = action.dataset.action;
        
        switch(type){
            case 'increase':
                counter++;
                break;
            
            case 'decrease':
                counter--;
                break;
            
            case 'reset':
                counter = 0;
                break;

            case 'save':
                localStorage.setItem('counter',counter);
                break;

            case 'load':
                counter = localStorage.getItem('counter');
                break;

            case 'clear':
                localStorage.clear();
                counter = 0;
                break;
        }
        
        document.querySelector('.counter-value').innerText = counter;//it can used to change the value;


        
    })
})