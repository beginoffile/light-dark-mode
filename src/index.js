import './styles.css';


const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark of light images
function imageMode(color){
    image1.src = `assets/images/undraw_proud_coder_${color}.svg`;
    image2.src = `assets/images/undraw_feeling_proud_${color}.svg`;
    image3.src = `assets/images/undraw_conceptual_idea_${color}.svg`; 
}

function toggleDarkLigthMode(mode){

    let isLight = mode===LIGHT_THEME? true:false;

    isLight? document.documentElement.setAttribute('data-theme','light') : document.documentElement.setAttribute('data-theme','dark');

    nav.style.backgroundColor = isLight? 'rgba( 255 255 255 /50%)' : 'rgba( 0 0 0 /50%)' ;
    textbox.style.backgroundColor = isLight? 'rgba( 0 0 0 /50%)' : 'rgba( 255 255 255 /50%)';
    toggleIcon.children[0].textContent = isLight? 'Light Mode' : 'Dark Mode';
    isLight? toggleIcon.children[1].classList.replace('fa-moon','fa-sun') : toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    isLight? imageMode('dark') : imageMode('light');
    isLight? localStorage.setItem('theme','light') : localStorage.setItem('theme','dark');
}



//Swicth the theme Dinamically
function switchTheme(event){
    console.log(event.target.checked);
    if (event.target.checked){        
        toggleDarkLigthMode(DARK_THEME);
    }else{    
        toggleDarkLigthMode(LIGHT_THEME);
    }
}


//Event Listener
toggleSwitch.addEventListener('change',switchTheme);

//Check local Storage for theme
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
if (currentTheme){
    
    if (currentTheme === 'dark'){
        toggleDarkLigthMode(DARK_THEME);
    }else{
        toggleDarkLigthMode(LIGHT_THEME);
    }
}