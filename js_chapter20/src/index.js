//import './test.css';
import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';

console.log('test');

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => { 
    const instance = new Dropdown(dropdown);
    instance.init();
});
