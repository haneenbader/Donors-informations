'use static';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let arrayOfDonor = [];
let table = document.getElementById('table');


function Donor(donorName, donorAmount) {
  this.donorName = donorName;
  this.donorAmount = donorAmount;
  this.donorAge = 0;
  Donor.arrayOfDonor.push(this);

}

let form = document.getElementById('form') ;
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event){
  event.preventDefult();

  const donorName = event.target.donorName.value ;
  const donorAmount =parseInt(event.target.amount.value );

  let newDonor = new Donor (donorName , donorAmount ) ;

  newDonor.getAge();
  newDonor.render();
  console.log(newDonor.getAge());
}

// Donor.newDonor.getAge();
// Donor.newDonor.render();



Donor.prototype.getAge = function(){
  this.donorAge = getRndInteger(18, 30);

};
newDonor.getAge();

Donor.prototype.render = function (){
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  let firstCell = document.createElement('td');
  dataRow.appendChild(firstCell);
  firstCell.textContent= this.donorName ;


  let secondCell = document.createElement('td');
  dataRow.appendChild(secondCell);
  secondCell.textContent= this.donorAge ;

  let lastCell = document.createElement('td');
  dataRow.appendChild(lastCell);
  lastCell.textContent= this.donorAmount ;

};


function saveToLs (){
  let info =  JSON.stringify(Donor.arrayOfDonor);
  localStorage.setItem('donorInfo' , info );

}
saveToLs ();

function getFromLs (){
  let info = localStorage.getItem('donorInfo');
  let donorInfo = JSON.parse(info);
  if (donorInfo !== null){
    Donor.arrayOfDonor = donorInfo ;
  }
}

getFromLs ();



