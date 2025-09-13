let cart = [];

// เพิ่มสินค้าในตะกร้า
function addToCart(id) {
  let product = products.find((p) => p.id === id);
  let item = cart.find((c) => c.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  showCart();
}

// ลบสินค้าออกจากตะกร้า
function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  showCart();
}

// คำนวณค่าขนส่ง
function calcShipping(type) {
  let cost = 0;
  switch (type) {
    case "normal":
      cost = 50;
      break;
    case "express":
      cost = 100;
      break;
    case "free":
      cost = 0;
      break;
  }
  return cost;
}

// แสดงตะกร้า
function showCart() {
  const cartList = document.getElementById("cartList");
  const totalDiv = document.getElementById("total");
  const summaryDiv = document.getElementById("summary");
  const shippingSelect = document.getElementById("shippingSelect");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    let sub = item.price * item.qty;
    total += sub;

    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <span>${item.name} x ${item.qty} = ${sub}฿</span>
      <button onclick="removeFromCart(${item.id})">ลบ</button>
    `;
    cartList.appendChild(div);
  });

  // ส่วนลด
  let discount = total >= 1000 ? total * 0.1 : 0;
  let shippingCost = calcShipping(shippingSelect.value);
  let finalTotal = total - discount + shippingCost;

  totalDiv.innerHTML = `
    รวม: ${total}฿ <br>
    ส่วนลด: ${discount}฿ <br>
    ค่าขนส่ง: ${shippingCost}฿
  `;

  summaryDiv.innerHTML = `<p>ยอดสุทธิ: ${finalTotal}฿</p>`;
}
