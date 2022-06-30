// building a digital clock
const clock = document.querySelector('.clock');

const tick = () => { 

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `
    //console.log(h, m, s);
    clock.innerHTML = html;

};

setInterval(tick, 1000);