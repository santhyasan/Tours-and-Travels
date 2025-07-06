const menus = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

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


const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show success message
  successMsg.style.display = "block";

  // Clear form
  form.reset();

  // Auto-hide message after 3 seconds
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});
