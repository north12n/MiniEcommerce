// ฟังก์ชันโหลด fragment html เข้าไปใน div ตาม id
async function loadFragment(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`โหลดไฟล์ ${file} ไม่สำเร็จ`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    // ถ้าโหลด cart.html เสร็จ → bind event ให้ shippingSelect
    if (id === "cart") {
      const shippingSelect = document.getElementById("shippingSelect");
      if (shippingSelect) {
        shippingSelect.addEventListener("change", showCart);
      }
      // render cart ครั้งแรก
      showCart();
    }

    // ถ้าโหลด product.html เสร็จ → render products
    if (id === "product") {
      showProducts();
    }

  } catch (err) {
    console.error(err);
  }
}

// ฟังก์ชันเริ่มต้นเมื่อโหลดหน้าเสร็จ
window.onload = () => {
  loadFragment("header", "header.html");
  loadFragment("product", "product.html");
  loadFragment("cart", "cart.html");
  loadFragment("footer", "footer.html");
};
