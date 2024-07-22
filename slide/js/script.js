const images = [{
    url: "/img/Rostov.jpg",
    City: "Rostov-on-Don LCD admiral",
    Apartament: "81 m2",
    RepairTime: "3.5 months",
    RepairCost: "Upon request"
  }, {
    url: "/img/Sochi.jpg",
    City: "Sochi Thieves",
    Apartament: "105 m2",
    RepairTime: "4 months",
    RepairCost: "Upon request"
  }, {
    url: "/img/RostovPatr.jpg",
    City: "Rostov-on-Don Patriotic", 
    Apartament: "93 m2",
    RepairTime: "3 months",
    RepairCost: "Upon request" 
}];

function initSlider() {
  if (!images || !images.length) return;

  const sliderImages = document.querySelector(".slider-img");
  const sliderButtons = document.querySelector(".slider-buttons");
  const sliderDots = document.querySelector(".slider-dots");
  const sliderCity = document.querySelector(".city");
  const sliderApartment = document.querySelector(".apartment");
  const sliderRepairTime = document.querySelector(".repair-time");
  const sliderRepairCost = document.querySelector(".repair-cost");
  const sliderLinks = document.querySelector(".slider-image__links");
    
  initImages();
  initButtons();
  initLinks();
  initDots();
  initText();
  

  function initImages() {
    images.forEach((image, index) => {
      const imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initButtons() {
    sliderButtons.querySelectorAll(".slider-button").forEach(button => {
      button.addEventListener("click", function() {
        const curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (button.classList.contains("prev")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initLinks () {
    images.forEach((image, index) => {
      const links = `<p class="slider-link n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].City}</p>`;
      sliderLinks.innerHTML += links;
    });
    sliderLinks.querySelectorAll(".slider-link").forEach(links => {
      links.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  };

  function initDots() {
    images.forEach((image, index) => {
      const dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  };

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");
    changeText(num);
  };

  function initText() {
    const cityDiv = `<p class="slider-text">${images[0].City}</p>`;
    sliderCity.innerHTML += cityDiv;
    const apartament = `<p class="slider-text">${images[0].Apartament}</p>`;
    sliderApartment.innerHTML += apartament;
    const repairTime = `<p class="slider-text">${images[0].RepairTime}</p>`;
    sliderRepairTime.innerHTML += repairTime;
    const RepairCost = `<p class="slider-text">${images[0].RepairCost}</p>`;
    sliderRepairCost.innerHTML += RepairCost;
  };

  function changeText(num) {
    const sliderTextCity = sliderCity.querySelector(".slider-text");
    sliderTextCity.innerText = images[num].City;
    const sliderTextApartment = sliderApartment.querySelector(".slider-text");
    sliderTextApartment.innerText = images[num].Apartament;
    const sliderTextRepairTime = sliderRepairTime.querySelector(".slider-text");
    sliderTextRepairTime.innerText = images[num].RepairTime;
    const sliderTextRepairCost = sliderRepairCost.querySelector(".slider-text");
    sliderTextRepairCost.innerText = images[num].RepairCost;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  initSlider();
}); 