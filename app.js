const buttonClick = document.getElementsByClassName('buttonClick');
let sum = 0;
let countDisreg = 0;
for (const num of buttonClick) {
  num.addEventListener('click', function () {
    const seatName = num.innerText;
    //set the button bgackgroun color
    num.classList.add('bg-[#1DD100]');
    num.classList.add('text-[#ffff]');
    // set the id name of seat
    const SeatNameContner = document.getElementById('SeatName');
    const p = document.createElement('p');
    p.innerText = seatName;
    SeatNameContner.appendChild(p);

    // set the class name of seat
    const SeatClasseContner = document.getElementById('SeatClasse');
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    SeatClasseContner.appendChild(p2);
    // set the Price name of seat
    const SeatPriceContner = document.getElementById('SeatPrice');
    const p3 = document.createElement('p');
    p3.innerText = 550;
    SeatPriceContner.appendChild(p3);
    sum++;
    setInnerText('CountValue', sum);

    //disreges the value ----------
    const countDisregs = innerTextParsent('TotalSet');
    const sumed = countDisregs - 1;
    setInnerText('TotalSet', sumed);

    //----------- count the total price -----------
  });
}

//----------all section used function ----------------

function innerTextParsent(element) {
  const elements = document.getElementById(element).innerText;
  const elementeds = parseInt(elements);
  return elementeds;
}
function setInnerText(element, value) {
  const elementd = document.getElementById(element);
  elementd.innerText = value;
}
