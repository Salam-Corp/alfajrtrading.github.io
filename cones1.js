


let buttons = document.querySelectorAll('button');
let modals = document.querySelectorAll('.modal');

function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('visible');
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('visible');
  });
}

buttons.forEach(b => {
  b.addEventListener('click', event => {
    hideModals();
    showModal(b.dataset.modal);
  });
});







const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active'); 
  })
}

if (close){
  close.addEventListener('click',() =>{
    nav.classList.remove('active'); 
  })
}



//-------size adjustment radio buttons
let radioBtns = document.querySelectorAll
("input[name='fruit']");
let result = document.getElementById("result");

let findSelected = () => {
  let selected = document.querySelector
  ("input[name='fruit']:checked").value;
result.textContent = `Price: ${selected}`;
}

radioBtns.forEach(radioBtn => {
  radioBtn.addEventListener("change", 
findSelected);
});

findSelected();





//------modals.forEach(m => {
  //let x = m.querySelector('button.close');
 // x.addEventListener('click', hideModals);
//}); 

//--------------



