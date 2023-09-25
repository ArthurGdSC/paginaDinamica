
  var produtos = [  ['Tenis', 1009.99, 'images.jpg'],
  ['Tenis', 339.99, 'images12.jpg'],
  ['Tênis', 99.99, 'images2.jpg'],
  ['Tenis', 709.99, 'images3.jpg'],
  ['Tenis', 1366.99, 'images13.jpg'],
  ['Tenis', 1000.99, 'images5.jpg'],
  ['Tenis', 809.99, 'images6.jpg'],
  ['Tenis', 600.99, 'images7.jpg'],
  ['Tenis', 200.99, 'images8.jpg'],
  ['Tenis', 1056.99, 'images9.jpg'],
  ['Tenis', 0.99, 'images10.jpg'],
  ['Tenis', 694, 'images11.jpg']
];

var container = document.getElementById('tenis');

for (let i = 0; i < produtos.length; i++) {
  var div = document.createElement('div');
  
  var img = document.createElement('img');
  img.src = produtos[i][2];
  div.appendChild(img);
  
  var pNome = document.createElement('p');
  pNome.textContent = produtos[i][0];
  div.appendChild(pNome);
  
  var pPreco = document.createElement('p');
  pPreco.textContent = `R$ ${produtos[i][1].toFixed(2)}`;
  div.appendChild(pPreco);
  
  var botao = document.createElement('button');

  container.appendChild(div);
 
}
