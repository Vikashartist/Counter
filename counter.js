 let counter = 0;
  const counterValue = document.getElementById('display');
  const increasebtn = document.getElementById('increasebtn');
  const decreasebtn = document.getElementById('decreasebtn');

  increasebtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
  });

  decreasebtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
  });
