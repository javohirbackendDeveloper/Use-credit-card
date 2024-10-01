let card = 0; // Global o'zgaruvchi, mablag'ni saqlaydi

function work() {
  let addMoney = parseFloat(document.getElementById("addMoney").value);
  
  if (addMoney > 0) { // Iltimos summani kiritish
    card += addMoney; // Kartadagi mablag'ni yangilash
    document.getElementById('output').innerHTML = "Mablag' muvaffaqiyatli qo'shildi";
    document.getElementById('outputCard').innerHTML = card; // Yangilangan mablag'ni chiqarish
  } else {
    document.getElementById('output').innerHTML = "Iltimos, to'g'ri summani kiriting";
  }
}

function work2() {
  let removeMoney = parseFloat(document.getElementById("removeMoney").value);
  
  if (removeMoney > 0) { // Iltimos summani kiritish
    if (removeMoney <= card) { // Mablag' yechish
      card -= removeMoney; // Kartadagi mablag'ni yangilash
      document.getElementById('output').innerHTML = "Mablag' muvaffaqiyatli yechildi";
      document.getElementById('outputCard').innerHTML = card; // Yangilangan mablag'ni chiqarish
    } else {
      document.getElementById('output').innerHTML = "Kechirasiz, sizning hisobingizda mablag' yetarli emas";
    }
  } else {
    document.getElementById('output').innerHTML = "Iltimos, to'g'ri summani kiriting";
  }
}