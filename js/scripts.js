var tempForm = document.querySelector(`.js-temp-form`);
if (tempForm) {
  var tempInputCelsiy = tempForm.querySelector(`.js-temp-input-celsiy`);
  var tempInputFrang = tempForm.querySelector(`.js-temp-input-frang`);
};

if (tempForm) {
  tempForm.addEventListener(`submit`, function(evt) {
    evt.preventDefault();
    var celsiy = Number(tempInputCelsiy.value);
    var natija = celsiy * 9 / 5 + 32;

    if (tempInputCelsiy.value ===``){
      tempInputFrang.textContent = `Son kiriting`;
    } else {
      tempInputFrang.textContent = natija;
    }
  });
};



// gregrogerg

var elTravelForm = document.querySelector(`.travel-form`);
var scorePiyoda = 3.6;
var scoreBycicle = 20.1;
var scoreCar = 70;
var scorePlane = 800;

if (elTravelForm) {
  var elTravelInput = elTravelForm.querySelector(`.demo-input`);
  var elPiyoda = document.querySelector(`.span-1`);
  var elBicycle = document.querySelector(`.span-2`);
  var elCar = document.querySelector(`.span-3`);
  var elPlane = document.querySelector(`.span-4`);

};

if (elTravelForm) {
  elTravelForm.addEventListener(`submit`, function(evt){

    evt.preventDefault();
    var travelLength = Number(elTravelInput.value);
    elPiyoda.textContent =  `${Math.floor(travelLength / scorePiyoda)} soat ${Math.floor(((travelLength / scorePiyoda) * 60) % 60)} minut ${Math.floor((((travelLength / scorePiyoda) * 60) * 60) % 60)}sek`;

    elBicycle.textContent =  `${Math.floor(travelLength / scoreBycicle)} soat ${Math.floor(((travelLength / scoreBycicle) * 60) % 60)} minut ${Math.floor((((travelLength / scoreBycicle) * 60) * 60) % 60)}sek`;

    elCar.textContent =  `${Math.floor(travelLength / scoreCar)} soat ${Math.floor(((travelLength / scoreCar) * 60) % 60)} minut ${Math.floor((((travelLength / scoreCar) * 60) * 60) % 60)}sek`;

    elPlane.textContent =  `${Math.floor(travelLength / scorePlane)} soat ${Math.floor(((travelLength / scorePlane) * 60) % 60)} minut ${Math.floor((((travelLength / scorePlane) * 60) * 60) % 60)}sek`;
  });
};

// gsdfgsdfgsdf

// var jogForm = document.querySelector(`.js-jog-form`);
// if (jogForm){
//   var jogInput = jogForm.querySelector(`.jog-input`);
//   var jogRainInput = jogForm.querySelector(`.rain-input`);
//   var jogZalInput = jogForm.querySelector(`.zal-input`);
//   var jogHeading = document.querySelector(`.jog-heading`);
//   var jogYes = document.querySelector(`.yes`);
//   var jogNo = document.querySelector(`.no`);
// }

// if (jogForm) {
//   jogForm.addEventListener(`change`, function()){
//     var temperature = '';

//     temperature = jogInput.value;
//   }
// }
