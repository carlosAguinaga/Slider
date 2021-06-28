function setSlider() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((element) => {
    const image = element.getAttribute("data-image");
    element.style.backgroundImage = `url('${image}')`;
  });
}

function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  const slidesArray = Array.from(slides);
  const activeIndex = slidesArray.findIndex((slide) =>
    slide.classList.contains("active")
  );
  slidesArray[activeIndex].classList.remove("active");
  if (activeIndex !== 0) {
    slidesArray[activeIndex - 1].classList.add("active");
  }else {
    slidesArray[slidesArray.length - 1].classList.add("active");
  }
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  const slidesArray = Array.from(slides);
  const activeIndex = slidesArray.findIndex((slide) =>
    slide.classList.contains("active")
  );
  slidesArray[activeIndex].classList.remove("active");
  if (activeIndex !== slidesArray.length - 1) {
    slidesArray[activeIndex + 1].classList.add("active");
  }else {
    slidesArray[0].classList.add("active");
  }
}

setSlider();
