// More DOM Events

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => { 
    console.log('OI! my content is copyright');
});

// an even on the box
const box = document.querySelector('.box');
box.addEventListener('mousemove', e => { 
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `x position is: ${e.offsetX} - y position is: ${e.offsetY}`;
})

// an event on the entire DOM
document.addEventListener('wheel', e => { 
    console.log(e.pageX, e.pageY);

});