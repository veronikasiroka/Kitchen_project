window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display');
  }, 2500);
}

const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
}
);

const links = document.querySelectorAll('li');

links.forEach((li) => {
  li.addEventListener('click', () => {
    document.querySelector('.container').classList.remove('change');
  })
})


const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
panel.addEventListener('click', () => {
  removeActiveClasses()
  panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => { 
      panel.classList.remove('active')
  })
}

const scroll = document.querySelector(".scroll-btn");

scroll.addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = "unset";
  }, 1000);
})


const contactForm = document.querySelector('.contact-form');
const jmeno = document.getElementById('jmeno');
const email = document.getElementById('email');
const zprava = document.getElementById('message');


contactForm.addEventListener('submit', (e) => { 
  e.preventDefault();

  const formData = {
    name: jmeno.value,
    email: email.value,
    zprava: zprava.value
  };
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Zpráva odeslána!');
      jmeno.value = " ";
      email.value = " ";
      zprava.value = " ";
    } else {
      alert('Ale ne, něco se pokazilo.')
    }
  } 

  xhr.send(JSON.stringify(formData));
});



