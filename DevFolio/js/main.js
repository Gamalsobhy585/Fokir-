var contactingForm = document.getElementById('contactingForm');
contactingForm.addEventListener("submit",function(event){
    event.preventDefault();
    
var nameInput=document.getElementById('name');
var emailInput=document.getElementById('email');
var subjectInput=document.getElementById('subject');
var messageInput =document.getElementById('message');

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
    name:nameInput.value.trim(),
    email:emailInput.value.trim(),
    subject:subjectInput.value.trim(),
    message:messageInput.value.trim(),
  };
  var contactContainer = JSON.parse(localStorage.getItem("messages")) ||[] ;
  contactContainer.push(contactMessage);
  localStorage.setItem("messages",JSON.stringify(contactContainer));
  swal("Thanks for Contacting Us! We'll contact you ASAP.");

  clearForm(nameInput, emailInput, subjectInput, messageInput);

})



function validateName(name){
    var regex = /^[A-Z][a-zA-Z\s]{3,}$/;
    return regex.test(name);
}
function validateEmail (email){
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
  function clearForm(nameInput,emailInput,subjectInput,messageInput){
    nameInput.value="";
    emailInput.value="";
    subjectInput.value="";
    messageInput.value="";

  }
var imgList= Array.from(document.querySelectorAll('.card-two  .card-img-port  img'));
var lightBoxContainer = document.getElementById('lightBoxContainer');
var closeBtn = document.getElementById('closeBtn');
var currentSlideIndex = 0;
for(var i =0 ; i<imgList.length;i++){
  imgList[i].addEventListener('click',function(eventInfo){
    lightBoxContainer.classList.remove('d-none');
    lightBoxContainer.classList.add('d-flex');
    currentSlideIndex=imgList.indexOf(eventInfo.target);
    var imgSrc=eventInfo.target.getAttribute('src');
    lightBoxContainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`
  })
}
function  slide(step){
  currentSlideIndex=currentSlideIndex +step;
  if(currentSlideIndex == imgList.length){
    currentSlideIndex=0;
  }
  if(currentSlideIndex<0)
  {
    currentSlideIndex = imgList.length-1;
  }
  var imgSrc=imgList[currentSlideIndex].getAttribute('src');
  lightBoxContainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`
}
closeBtn.nextElementSibling.addEventListener('click',function(){
  slide(1)
})
closeBtn.previousElementSibling.addEventListener('click',function(){slide(-1)})

closeBtn.addEventListener('click',function(){
  lightBoxContainer.classList.remove('d-flex');
  lightBoxContainer.classList.add('d-none');
})


const counterNumbers = document.querySelectorAll('.counternum');
counterNumbers.forEach((counterNumber)=>{
const target =parseInt(counterNumber.innerText);
let count = 0;
const interval =setInterval(()=>{
  counterNumber.innerText=count;
  count++;
  if(count > target){
    clearInterval(interval);
  }
},2);
})

window.addEventListener('scroll', function() {
  var arrowUp = document.querySelector('.arrow-up');
  if (window.scrollY > (1/2) * window.innerHeight) {
      arrowUp.classList.add('active');
  } else {
      arrowUp.classList.remove('active');
  }
});


