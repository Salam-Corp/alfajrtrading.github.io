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

let preveiwMenue = document.querySelector('.products-preview');
let previewBox = preveiwMenue.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwMenue.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    preveiwMenue.style.display = 'none';
  };
});
