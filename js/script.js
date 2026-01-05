// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Pesan Sekarang

const pesanSekarangBtn = document.querySelector(".cta");

if (pesanSekarangBtn) {
  pesanSekarangBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Arahkan ke section product
    document.querySelector("#product").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toogle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const modalContainer = document.querySelector(".modal-container");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Tutup modal saat klik area gelap
itemDetailModal.addEventListener("click", () => {
  itemDetailModal.style.display = "none";
});

// Supaya klik di dalam modal TIDAK menutup
modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Tombol close (X)
document.querySelector(".close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//  Search Menu atau Product

// Jalankan saat tekan ENTER di search
searchBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const keyword = searchBox.value.toLowerCase();

    // Ambil semua menu & produk
    const menuItems = document.querySelectorAll(".menu-card");
    const productItems = document.querySelectorAll(".product-card");

    let found = false;

    // Cek menu
    menuItems.forEach((item) => {
      const text = item.innerText.toLowerCase();
      if (text.includes(keyword)) {
        document.querySelector("#menu").scrollIntoView({
          behavior: "smooth",
        });
        found = true;
      }
    });

    // Cek produk
    productItems.forEach((item) => {
      const text = item.innerText.toLowerCase();
      if (text.includes(keyword)) {
        document.querySelector("#product").scrollIntoView({
          behavior: "smooth",
        });
        found = true;
      }
    });

    // Jika tidak ditemukan
    if (!found) {
      alert("Menu atau produk tidak ditemukan");
    }

    // Tutup search setelah pencarian
    searchForm.classList.remove("active");
    searchBox.value = "";
  }
});
