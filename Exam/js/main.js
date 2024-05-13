const counterNumbers = document.querySelectorAll(".counternum");
counterNumbers.forEach((counterNumber) => {
  const target = parseInt(counterNumber.innerText);
  let count = 0;
  const interval = setInterval(() => {
    counterNumber.innerText = count;
    count += 10;
    if (count > target) {
      clearInterval(interval);
    }
  }, 5);
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  var websiteTitle = document.querySelector(".navbar-brand");
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("navbar-scrolled");
    websiteTitle.classList.remove("text-white");
    websiteTitle.classList.add("text-black");
    navLinks.forEach(function (link) {
      link.classList.add("text-black");
    });
  } else {
    navbar.classList.remove("navbar-scrolled");
    websiteTitle.classList.remove("text-black");
    websiteTitle.classList.add("text-white");

    navLinks.forEach(function (link) {
      link.classList.remove("text-black");
    });
  }
});
function downloadCV() {
  var link = document.createElement("a");
  link.download = "DanielsCv.html";
  var blob = new Blob([document.documentElement.outerHTML], {
    type: "text/html",
  });
  link.href = window.URL.createObjectURL(blob);
  link.click();
  window.URL.revokeObjectURL(link.href);
}

function filterItems(element, category) {
  console.log("Filtering items by category:", category);
  var tabs = document.querySelectorAll(".filter-tabs span");
  var items = document.querySelectorAll(".filtered");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });
  element.classList.add("active");
  items.forEach(function (item) {
    if (item.classList.contains(category) || category === "All") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

var boxLabel = document.getElementById("lightBoxLabel");

var imgList = document.querySelectorAll(".filtered .card .card-img img");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var closeBtn = document.getElementById("closeBtn");
var currentSlideIndex = 0;

imgList.forEach(function (img) {
  img.addEventListener("click", function (eventInfo) {
    lightBoxContainer.classList.remove("d-none");
    lightBoxContainer.classList.add("d-flex");
    currentSlideIndex = Array.from(imgList).indexOf(eventInfo.target);

    var imgSrc = eventInfo.target.getAttribute("src");
    console.log(currentSlideIndex);
    console.log("image showed");
    lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
    boxLabel.innerHTML = `${currentSlideIndex + 1} of ${imgList.length}`;
  });
});

function slide(step) {
  currentSlideIndex = currentSlideIndex + step;
  console.log("Current slide index:", currentSlideIndex);

  if (currentSlideIndex == imgList.length) {
    currentSlideIndex = 0;
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = imgList.length - 1;
  }

  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  console.log("Image source:", imgSrc);

  lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
  boxLabel.innerHTML = `${currentSlideIndex + 1} of ${imgList.length}`;
}

closeBtn.nextElementSibling.addEventListener("click", function () {
  slide(1);
});

closeBtn.previousElementSibling.addEventListener("click", function () {
  slide(-1);
});

function closeLightBox() {
  lightBoxContainer.classList.remove("d-flex");
  lightBoxContainer.classList.add("d-none");
  console.log("Image is hidden");
}

closeBtn.addEventListener("click", closeLightBox);

console.log("Next sibling:", closeBtn.nextElementSibling);
console.log("Previous sibling:", closeBtn.previousElementSibling);
closeBtn.nextElementSibling.addEventListener("click", function () {
  slide(1);
});
closeBtn.previousElementSibling.addEventListener("click", function () {
  slide(-1);
});

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    console.log(nameInput);
    if (!validateName(nameInput.value)) {
      swal("Please enter a valid name.");
      return;
    }

    if (!validateEmail(emailInput.value)) {
      swal("Please enter a valid email address.");
      return;
    }

    if (!validateMessage(messageInput.value)) {
      swal("Please enter a valid message.");
      return;
    }

    var contactMessage = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    var contactContainer = JSON.parse(localStorage.getItem("messages")) || [];
    contactContainer.push(contactMessage);
    localStorage.setItem("messages", JSON.stringify(contactContainer));
    swal("Thanks for Contacting Us! We'll contact you ASAP.");

    clearForm(nameInput, emailInput, messageInput);
  });

function clearForm(nameInput, emailInput, messageInput) {
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}

function validateName(name) {
  var regex = /^[A-Z][a-zA-Z\s]{3,}$/;
  return regex.test(name);
}
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function validateMessage(message) {
  const pattern = /^.{1,500}$/;
  return pattern.test(message);
}

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleIndicators");
  var initialX = null;

  carousel.addEventListener("dragstart", function (event) {
    initialX = event.clientX;
  });

  carousel.addEventListener("dragend", function (event) {
    var finalX = event.clientX;
    var deltaX = finalX - initialX;
    if (deltaX > 0) {
      var carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
      carouselInstance.prev();
    } else if (deltaX < 0) {
      var carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
      carouselInstance.next();
    }
  });
});
window.addEventListener("scroll", function () {
  var navbarToggler = document.getElementById("navbar-toggler-icon");
  if (window.scrollY > window.innerHeight) {
    navbarToggler.classList.add("navbar-toggler-black");
  } else {
    navbarToggler.classList.remove("navbar-toggler-black");
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("navbar-black");
  } else {
    navbar.classList.remove("navbar-black");
  }
});
