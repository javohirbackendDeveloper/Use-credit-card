let card = 0; 

function work() {
  let addMoney = parseFloat(document.getElementById("addMoney").value);
  
  if (addMoney > 0) { 
    card += addMoney; 
    document.getElementById('output').innerHTML = "Mablag' muvaffaqiyatli qo'shildi";
    document.getElementById('outputCard').innerHTML = card; 
  } else {
    document.getElementById('output').innerHTML = "Iltimos, to'g'ri summani kiriting";
  }
}

function work2() {
  let removeMoney = parseFloat(document.getElementById("removeMoney").value);
  
  if (removeMoney > 0) { 
    if (removeMoney <= card) { 
      card -= removeMoney; 
      document.getElementById('output').innerHTML = "Mablag' muvaffaqiyatli yechildi";
      document.getElementById('outputCard').innerHTML = card; 
    } else {
      document.getElementById('output').innerHTML = "Kechirasiz, sizning hisobingizda mablag' yetarli emas";
    }
  } else {
    document.getElementById('output').innerHTML = "Iltimos, to'g'ri summani kiriting";
  }
}