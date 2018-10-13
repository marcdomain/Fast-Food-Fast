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
    },
    {
      word: `Order from a wide range of delicacies. <br><em>Local delicacies, Snacks, Rice, Turkey, and Others</em>.`
    }
  ];
  
  // open on window load (0 sec)
  words.map((v, i, arr) => {
      document.querySelector('.words').innerHTML = arr[Math.floor(Math.random()*arr.length)].word;
  });

  // start after 10 sec 
  words.map((v, i, arr) => {
      setInterval(() => {
          document.querySelector('.words').innerHTML = arr[Math.floor(Math.random()*arr.length)].word;
      }, 10000);
  });

  const bgColor = document.querySelector('.progress-color');   
  let width = 1;
  // repeat every 10 sec
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
  // orderHandler();
}
