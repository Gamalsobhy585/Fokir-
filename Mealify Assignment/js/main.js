document.addEventListener("DOMContentLoaded", function () {
  var subscribeContainer =
    JSON.parse(localStorage.getItem("subscribers")) || [];

  document
    .getElementById("subscribeButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var subscribeInput = document.getElementById("Subscribe");
      var subscriberEmail = subscribeInput.value.trim();

      var isAlreadySubscribed = subscribeContainer.some(function (subscriber) {
        return subscriber.subscriber === subscriberEmail;
      });

      if (isAlreadySubscribed) {
        swal("You have already subscribed with this email address.");
        return;
      }

      if (!validateSubscriptionEmail(subscriberEmail)) {
        swal("Please enter a valid email address.");
        return;
      }

      subscribeContainer.push({ subscriber: subscriberEmail });

      localStorage.setItem("subscribers", JSON.stringify(subscribeContainer));

      swal("Subscription activated successfully!");

      subscribeInput.value = "";
    });

  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    if (!validateName(nameInput.value)) {
      swal("Please enter a valid name.");
      return;
    }

    if (!validateEmail(emailInput.value)) {
      swal("Please enter a valid email address.");
      return;
    }

    if (!validateSubject(subjectInput.value)) {
      swal("Please enter a valid subject.");
      return;
    }

    if (!validateMessage(messageInput.value)) {
      swal("Please enter a valid message.");
      return;
    }

    var contactMessage = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
    };
    var contactContainer = JSON.parse(localStorage.getItem("messages")) || [];
    contactContainer.push(contactMessage);

    localStorage.setItem("messages", JSON.stringify(contactContainer));

    swal("Thanks for Contacting Us! We'll contact you ASAP.");

    clearForm(nameInput, emailInput, subjectInput, messageInput);
  });

  function clearForm(nameInput, emailInput, subjectInput, messageInput) {
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
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

  function validateSubscriptionEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validateSubject(subject) {
    const pattern = /^[a-zA-Z0-9\s]{1,100}$/;
    return pattern.test(subject);
  }

  function validateMessage(message) {
    const pattern = /^.{1,500}$/;
    return pattern.test(message);
  }

  var mealifyHeader = document.querySelector("#Mealify ");
  var navLinks = document.querySelectorAll(".container ul li a");
  var changeDarkBtn = document.getElementById("moon");
  var headerContainer = document.querySelector("#headerContainer");
  var myBody = document.querySelector("body");
  var darkThemeText = document.querySelectorAll(".dark-theme");
  var darkThemeBox = document.querySelectorAll(".dark-theme-box");
  var wave = document.querySelectorAll(".wave");
  var waveParent = document.querySelectorAll(".waveParent");
  var gallery=document.getElementById('gallery')
  var sharta = document.querySelectorAll('.icon span')
  console.log(darkThemeText);
  changeDarkBtn.addEventListener("click", function () {
    var gearIcon = document.createElement("i");
    gearIcon.classList.add("fa-solid", "fa-gear");
    gearIcon.style.color = "white";
    myBody.style.backgroundColor = "#202020";

    mealifyHeader.style.color = "white";
    headerContainer.style.backgroundColor = "#252525";
    changeDarkBtn.parentElement.parentElement.parentElement.style.backgroundColor =
      "#171717";
    navLinks.forEach(function (link) {
      link.style.color = "#FFFFFF";
    });
    sharta.forEach(function (shartaya) {
      shartaya.style.backgroundColor = "#FFFFFF";
    });
    darkThemeText.forEach(function (element) {
      element.style.color = "white";
    });
    darkThemeBox.forEach(function (box) {
      box.style.backgroundColor = "black";
    });
    gallery.style.backgroundColor="#252525"
    waveParent.forEach(function (parent) {
      var waveElement = parent.querySelector(".wave");
      if (waveElement) {
        parent.querySelector(".card-image").removeChild(waveElement);
      }
    });

    changeDarkBtn.parentNode.replaceChild(gearIcon, changeDarkBtn);

    gearIcon.addEventListener("click", function () {
      gearIcon.parentNode.replaceChild(changeDarkBtn, gearIcon);
      mealifyHeader.style.color = "black";
      headerContainer.style.backgroundColor = "#EEEEEE";
      myBody.style.backgroundColor = "#FFFFFF";

      changeDarkBtn.parentElement.parentElement.parentElement.style.backgroundColor =
        "#ffffff";
        gallery.style.backgroundColor="#EEEEEE"

      navLinks.forEach(function (link) {
        link.style.color = "black";
      });
      darkThemeText.forEach(function (element) {
        element.style.color = "black";
      });
      darkThemeBox.forEach(function (box) {
        box.style.backgroundColor = "#F5F5F5";
      });
      sharta.forEach(function (shartaya) {
        shartaya.style.backgroundColor = "black";
      });
      waveParent.forEach(function (parent) {
        var newWave = document.createElement("div");
        newWave.className = "wave";
        parent.querySelector(".card-image").appendChild(newWave);
      });
    });
  });
});
