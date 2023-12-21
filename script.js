//your JS code here. If required.
// const panels=document.querySelectorAll('.panel');
// panels.forEach(panel=>{
// 	panel.addEventListener('click',()=>{
// 		removeActiveClasses();
// 		panel.classList
// 	})
// })
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('active');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));