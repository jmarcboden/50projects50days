//set the panels array
const panels = document.querySelectorAll('.panel');

//loop over all the panels and add an event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        //if the panel is clicked.. call the removeActiveClasses function
        removeActiveClasses()
        //add the active class to the clicked panel
        panel.classList.add('active')
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        //remove the active class from all panels 
        panel.classList.remove('active');
    })
}