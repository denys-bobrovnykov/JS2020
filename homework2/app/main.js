// --------- Task 1 --------------
function taskOne(){
    const dimentions = {
        'length' : 0,
        'width' : 0,
        'height': 0
    }
    const paintCan = 16;
    alert('TASK 1');
    alert('We have an office and need to calculate a number of paint cans required to paint all 4 =) walls.');
    dimentions.length = +getInput('length');
    dimentions.width = +getInput('width');
    dimentions.height = +getInput('height');
    const officeArea = ((dimentions.length + dimentions.width) * 2) * dimentions.height;
    const cansRequired = (officeArea % paintCan) ? ((officeArea - (officeArea % paintCan)) / paintCan + 1) : officeArea / paintCan;
    alert(cansRequired);

    // Functions for Task 1
    function getInput(mesure){    // Takes a string
        let check = false;
        let userInput = '';
        mesure = String(mesure).toUpperCase();
        do{
            userInput = prompt(`Please enter office ${mesure} in meters(Format: number not more than 1000).`);
            check = !isNaN(+userInput) && +userInput <= 1000 && +userInput > 0 && userInput !== null;
            if(!check && userInput !== null){
                alert('Try again. Remember, only positive number not more than 1000!');
            }else if (userInput === null){
                alert('Sorry, you can not cancel until you enter a valid value.');
            }
        }while(!check); 
        return userInput;   
    }
}   // End Functions
// Qs:
//    - How to work with cancel prompt action?
// --------------------------------

// --------- Task 2 ---------------



