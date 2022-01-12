import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener("scroll", function() {
  let f = document.getElementById('fe');
   let ab = document.getElementById('ab');
   let se = document.getElementById('se');
   let ga = document.getElementById('ga');
   let te = document.getElementById('te');
   let co = document.getElementById('co');

  
   function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element_show');
      }
    });
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.no_show');
  for (let elm of elements) {
    observer.observe(elm);
  }


   if (window.scrollY > 600 && window.scrollY < 1400) {
    f.classList.add("active");
  }
  else f.classList.remove("active");

  if(window.scrollY > 1400 && window.scrollY < 2000) {
    ab.classList.add("active");
 

  }
  else ab.classList.remove("active");

  if(window.scrollY > 2000 && window.scrollY < 3200) {
    se.classList.add("active");

  }
  else se.classList.remove("active");

  if(window.scrollY > 3200 && window.scrollY < 4200) {
    ga.classList.add("active");

  }
  else ga.classList.remove("active");

  if(window.scrollY > 4200 && window.scrollY < 4750) {
    te.classList.add("active");

  }
  else te.classList.remove("active");

  if(window.scrollY > 4750 && window.scrollY < 6000) {
    co.classList.add("active")

  }
  else co.classList.remove("active");



});



let links = document.querySelectorAll('.ww');


links.forEach(function(item, ){
  item.addEventListener("click", () => {
    links.forEach(function(item){
      item.classList.remove('active');
    })
    item.classList.add('active')
  })
})




let header = document.querySelector('.Header');

let sticky = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
})



let button = document.querySelector('.navbut');

let menu = document.querySelector('.menu_bar')

button.addEventListener("click", ()=> {
menu.classList.toggle('hidden');
})

let but = document.querySelector('.but'); 

but.addEventListener("click", (e)=> {
  wind.classList.remove('closed');
  setTimeout(() => {
    wind.classList.add('closed');
  }, 2000);
  setTimeout(() => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }, 1000);
})

let wind = document.querySelector("#wind");
