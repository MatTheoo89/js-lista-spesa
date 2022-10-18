console.log('link ok');

const listaSpesa = [
  'Caffè',
  'Latte',
  'Frutta',
  'Pasta',
  'Passata di pomodoro',
  'Carne di manzo',
  'Pollo',
  'Bibite',
  'Birra',
  'Cereali',
  'Frutta secca',
]
// console.log(listaSpesa);

const ul = document.createElement('ul');
const container = document.querySelector('.container');
console.log(ul);
console.log(container);


for(let i = 0; i < listaSpesa.length; i++){
  // crea variabile LI
  let li = document.createElement('li');
  console.log(li);
  
  // creo variabile che racchiude i singoli prodotti
  let alimento = listaSpesa[i];

  // stampa i singoli prodotti in una variabile LI
  li.innerText = alimento;
  console.log(li.innerText);
  
  // appendi gli LI ad UL
  ul.append(li);
  
  //appendi UL a container
  container.append(ul);
  
  container.innertext = ul;
};








