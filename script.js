//VARIABLES
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

//FUNCTIONS

//Function when mouse hovers over nav items
function handleEnter() {
    //Add trigger-enter class (which turns display to block)
    this.classList.add('trigger-enter');

    //After 150 milliseconds, add 2 classes to make the dropdown (purpose is to make the content appear (AFTER) the dropdown box has done
    // animating
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    //Grab each dropdown box, use getBoundingClientRect() to find position and size
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left
    }

    //Set the white drop-down background size and position to the same as the dropdown content
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    //MY OTHER SOLUTION TO THE ABOVE
    // background.style.width = `${dropdownCoords.width}px`;
    // background.style.height = `${dropdownCoords.height}px`;
    // background.style.left = `${dropdownCoords.left}px`;
    // background.style.top = `${dropdownCoords.top - 70}px`;
    // console.log('white background top: ', background.style.top);
    // console.log('li top: ', dropdownCoords.top);
}

//When mouse leaves element, remove classes above
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

//Event listeners for mouse enter and leave for each navigation item 
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


