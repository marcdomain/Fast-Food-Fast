const welcomeWords = () => {
  const words = [
    {
        word: `Satisfy your tastes! Quench your hunger! <br>Place your orders and get it delivered at your convenience.`
    },
    {
        word: `Our delicacies are outstanding. <br>The cheapest food item can get you back on your feet.`
    },
    {
        word: `Our service is swift. <br>The restaurant is kept meticulously clean, comfortable and air-conditioned.`
    }
  ];
  
  words.map((v, i, arr) => {
      document.querySelector('.words').innerHTML = arr[Math.floor(Math.random()*arr.length)].word;
  });


  words.map((v, i, arr) => {
      setInterval(() => {
          document.querySelector('.words').innerHTML = arr[Math.floor(Math.random()*arr.length)].word;
      }, 10000)
  });

  const bgColor = document.querySelector('.progress-color');   
  let width = 1;

  setInterval(() => {
    if (width >= 100) {
      width = 1;
    } else {
      width++; 
      bgColor.style.width = width + '%'; 
    }
  }, 100);
  
}

window.onload = () => {
  welcomeWords();
}
