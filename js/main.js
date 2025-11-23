let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Carrinho
function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} adicionado ao carrinho!`);
  renderCart();
}

function renderCart(){
  const cartEl = document.getElementById('cart-items');
  if(!cartEl) return;
  cartEl.innerHTML = '';
  let total = 0;
  cart.forEach((item,i)=>{
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - R$${item.price} <button onclick="removeItem(${i})">X</button>`;
    cartEl.appendChild(li);
  });
  document.getElementById('cart-total').innerText = total;
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout(){
  if(cart.length===0){ alert('Carrinho vazio!'); return; }
  alert('Compra finalizada! Total: R$' + cart.reduce((a,b)=>a+b.price,0));
  cart.length=0;
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

document.getElementById('cart-btn')?.addEventListener('click',()=>{document.getElementById('cart').classList.toggle('active');});

// Modal
function openModal(img){
  document.getElementById('product-modal').style.display='flex';
  document.getElementById('modal-img').src=img.src;
  document.getElementById('modal-title').innerText=img.nextElementSibling.innerText;
  document.getElementById('modal-price').innerText=img.nextElementSibling.nextElementSibling.innerText;
}

function closeModal(){document.getElementById('product-modal').style.display='none';}

// Filtro
function filterProducts(category){
  const cards=document.querySelectorAll('.product-card');
  cards.forEach(card=>{
    if(category==='todos'||card.dataset.category===category) card.style.display='block';
    else card.style.display='none';
  });
}

// Inicializar
renderCart();
