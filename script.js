/* code in the function will not run until the DOMContentLoaded
event is completed and parsed when this is included in html doc for internal
JavaScript:

document.addEventListener("DOMContentLoaded", function() { });

when using external JS file, "async" allows both JS and HTML to load
simultaneously*/

  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
