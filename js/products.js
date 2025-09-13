// สินค้าตั้งต้น
let products = [
  { 
    id: 1, 
    name: "เสื้อยืด", 
    price: 250, 
    image: "https://picsum.photos/200?random=1" 
  },
  { 
    id: 2, 
    name: "กางเกง", 
    price: 500, 
    image: "https://picsum.photos/200?random=2" 
  },
  { 
    id: 3, 
    name: "หมวก", 
    price: 150, 
    image: "https://picsum.photos/200?random=3" 
  },
  { 
    id: 4, 
    name: "รองเท้า", 
    price: 1200, 
    image: "https://picsum.photos/200?random=4" 
  }
];

// ฟังก์ชันแสดงสินค้า
function showProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((p) => {
    let div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img"/>
      <h3>${p.name}</h3>
      <p>${p.price}฿</p>
      <button onclick="addToCart(${p.id})">เพิ่มลงตะกร้า</button>
    `;
    productList.appendChild(div);
  });
}
