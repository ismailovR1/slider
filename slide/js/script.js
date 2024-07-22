let images = [{
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

  let sliderImages = document.querySelector(".slider-img");
  let sliderButtons = document.querySelector(".slider-buttons");
  let sliderDots = document.querySelector(".slider-dots");
  let sliderCity = document.querySelector(".city");
  let sliderApartment = document.querySelector(".apartment");
  let sliderRepairTime = document.querySelector(".repair-time");
  let sliderRepairCost = document.querySelector(".repair-cost");
  let sliderLinks = document.querySelector(".slider-image__links");
    
  initImages();
  initButtons();
  initLinks();
  initDots();
  initText();
  

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initButtons() {
    sliderButtons.querySelectorAll(".slider-button").forEach(button => {
      button.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
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
      let links = `<p class="slider-link n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].City}</p>`;
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
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
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
    let cityDiv = `<p class="slider-text">${images[0].City}</p>`;
    sliderCity.innerHTML += cityDiv;
    let apartament = `<p class="slider-text">${images[0].Apartament}</p>`;
    sliderApartment.innerHTML += apartament;
    let repairTime = `<p class="slider-text">${images[0].RepairTime}</p>`;
    sliderRepairTime.innerHTML += repairTime;
    let RepairCost = `<p class="slider-text">${images[0].RepairCost}</p>`;
    sliderRepairCost.innerHTML += RepairCost;
  };

  function changeText(num) {
    let sliderTextCity = sliderCity.querySelector(".slider-text");
    sliderTextCity.innerText = images[num].City;
    let sliderTextApartment = sliderApartment.querySelector(".slider-text");
    sliderTextApartment.innerText = images[num].Apartament;
    let sliderTextRepairTime = sliderRepairTime.querySelector(".slider-text");
    sliderTextRepairTime.innerText = images[num].RepairTime;
    let sliderTextRepairCost = sliderRepairCost.querySelector(".slider-text");
    sliderTextRepairCost.innerText = images[num].RepairCost;
  }
};

let sliderOption = {
  titles: true
}

document.addEventListener('DOMContentLoaded', function() {
  initSlider(sliderOption);
}); 