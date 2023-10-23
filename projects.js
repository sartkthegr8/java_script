// ❤️1

// let body = document.getElementsByTagName('body');
let body = document.body;
// console.log(body);
let buttons = document.querySelectorAll('.button');
// console.log(buttons);

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      // console.log('yooo');
      body.style.backgroundColor = e.target.id;
    }
  });
});

// ========================================================================================================================================================

// ❤️❤️2

// let height = document.querySelector('#height').value;
// let weight = document.querySelector('#weight').value;
// ❤️because it take zero value or null

let form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  let results = document.querySelector('#results');

  // secure checker for user value
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height ${height}';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight ${weight}';
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


// ========================================================================================================================================================


// ❤️❤️❤️3


// ========================================================================================================================================================

// ❤️❤️❤️❤️4


// ========================================================================================================================================================

