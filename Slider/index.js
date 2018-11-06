{
  let currentImage = 0;
  const images = document.getElementsByClassName("image")
  const dots = document.getElementsByClassName('dot')


  tick = () => {
    currentImage += 1;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    changeImage()
  }

  changeImage = () => {

    dots[currentImage].style.backgroundColor = 'black'
    images[currentImage].style.display = 'inline';

    for (let i = 0; i < images.length; i++) {
      if (i !== currentImage) {
        images[i].style.display = 'none'
      }
    }

    for (let i = 0; i < dots.length; i++) {
      if (i !== currentImage) {
        dots[i].style.backgroundColor = '#bbb'
      }
    }
  }

  onClickDot = (dotIndex) => {
    clearInterval(timer);
    currentImage = dotIndex;
    changeImage()
    timer = setInterval(tick, 5000)
  }
}

let timer = setInterval(tick, 5000)