// สินค้าตั้งต้น
let products = [
  { id: 1, name: "เสื้อยืด", price: 250 },
  { id: 2, name: "กางเกง", price: 500 },
  { id: 3, name: "หมวก", price: 150 },
];

// ฟังก์ชันแสดงสินค้า
function showProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((p) => {
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <span>${p.name} - ${p.price}฿</span>
      <button onclick="addToCart(${p.id})">Add</button>
    `;
    productList.appendChild(div);
  });
}
