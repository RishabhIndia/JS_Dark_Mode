const body_bg = document.querySelector("html");
const toggle_click = document.querySelector(".circle");
const button_box = document.querySelector(".toggle_container")

toggle_click.addEventListener('click', () => {
    if (body_bg.classList.contains('darkmode')) {
        body_bg.classList.remove('darkmode');
        toggle_click.classList.remove('toggle-right');
        button_box.classList.remove('box_bgcolor')
    } else {
        body_bg.classList.add('darkmode');
        toggle_click.classList.add('toggle-right');
        button_box.classList.add('box_bgcolor')
    }
    
});