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
      }, 10000)
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

const orderHandler = () => {
  const orderNowBtn = document.querySelectorAll('.orderNow');
  const inputDiv = document.querySelectorAll('.order-input');

  const showInput = (event) => {
    if (event.target === orderNowBtn[0]) {
      inputDiv[0].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[1]) {
      inputDiv[1].style.display = 'block';
      inputDiv[0].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[2]) {
      inputDiv[2].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[3]) {
      inputDiv[3].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[4]) {
      inputDiv[4].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[5]) {
      inputDiv[5].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[6]) {
      inputDiv[6].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[7]) {
      inputDiv[7].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[8]) {
      inputDiv[8].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[9]) {
      inputDiv[9].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[10]) {
      inputDiv[10].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[11]) {
      inputDiv[11].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[12]) {
      inputDiv[12].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[13]) {
      inputDiv[13].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[2].style.display = 'none';
      inputDiv[14].style.display = 'none';
    }
    if (event.target === orderNowBtn[14]) {
      inputDiv[14].style.display = 'block';
      inputDiv[1].style.display = 'none';
      inputDiv[0].style.display = 'none';
      inputDiv[3].style.display = 'none';
      inputDiv[4].style.display = 'none';
      inputDiv[5].style.display = 'none';
      inputDiv[6].style.display = 'none';
      inputDiv[7].style.display = 'none';
      inputDiv[8].style.display = 'none';
      inputDiv[9].style.display = 'none';
      inputDiv[10].style.display = 'none';
      inputDiv[11].style.display = 'none';
      inputDiv[12].style.display = 'none';
      inputDiv[13].style.display = 'none';
      inputDiv[2].style.display = 'none';
    }

  }

  orderNowBtn[0].addEventListener('click', showInput);
  orderNowBtn[1].addEventListener('click', showInput);
  orderNowBtn[2].addEventListener('click', showInput);
  orderNowBtn[3].addEventListener('click', showInput);
  orderNowBtn[4].addEventListener('click', showInput);
  orderNowBtn[5].addEventListener('click', showInput);
  orderNowBtn[6].addEventListener('click', showInput);
  orderNowBtn[7].addEventListener('click', showInput);
  orderNowBtn[8].addEventListener('click', showInput);
  orderNowBtn[9].addEventListener('click', showInput);
  orderNowBtn[10].addEventListener('click', showInput);
  orderNowBtn[11].addEventListener('click', showInput);
  orderNowBtn[12].addEventListener('click', showInput);
  orderNowBtn[13].addEventListener('click', showInput);
  orderNowBtn[14].addEventListener('click', showInput);
}

window.onload = () => {
  welcomeWords();
  orderHandler();
}
