const menus = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn?.addEventListener('click', () => menus.classList.add('display'));
closeBtn?.addEventListener('click', () => menus.classList.remove('display'));


menuBtn.addEventListener('click',()=>{
    menus.classList.add('display');
});

closeBtn.addEventListener('click',()=>{
    menus.classList.remove('display');
});

// scroll sticky navbar

window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop > 20){
    header.classList.add('sticky');   
    }else {
        header.classList.remove('sticky');
    }
});


// static numbers

const countersEl = document.querySelectorAll(".number");
countersEl.forEach((counters)=>{
    counters.textContent = 0;

    incrementCounters();

    function incrementCounters(){
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increment = dataCeil /25;

        currentNum = Math.ceil(currentNum + increment);

        if(currentNum<dataCeil){
            counters.textContent = currentNum;
            setTimeout(incrementCounters, 70);
        }else{
            counters.textContent = dataCeil;
        }
    }
})


const explore = document.getElementById("exploreLink");
const isLogged = localStorage.getItem("loggedIn");

if (!isLogged) {
  // user NOT logged in ⇒ hide the menu item
  explore.style.display = "none";
}

// (optional) add a logout button somewhere
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  location.reload();               // refresh UI
});


window.onload = () => {
  const shouldShow = localStorage.getItem("showWelcomePopup");

  if (shouldShow === "true") {
    const popup = document.getElementById("welcomePopup");
    if (popup) popup.style.display = "block";

    // Optional: auto close after 5 seconds
    setTimeout(() => {
      hideWelcomePopup();
    }, 5000);

    localStorage.removeItem("showWelcomePopup");
  }
};

function hideWelcomePopup() {
  const popup = document.getElementById("welcomePopup");
  if (popup) popup.style.display = "none";
}


// logout

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  location.reload();
});





