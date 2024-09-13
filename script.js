// Append clicked button's value to the display
const display = document.getElementById('display');
const display2= document.getElementById('display2')

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    

    if (display2.value.includes('+') || display2.value.includes('-') || display2.value.includes('*') || display2.value.includes('/')){
        display2.value = display.value.slice(0, -1)
    }
    
}
function remove( ){
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display2').value = '';
}

// Perform the calculation
function calculate() {
     
    try {
         
        display2.value = display.value
        display.value = eval(display.value);  
        
    } catch (error) {
        display.value = display.value; 
    }
}
