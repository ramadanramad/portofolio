// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Mendapatkan elemen tombol dan menu
const menuButton = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

// Fungsi untuk toggle menu
menuButton.addEventListener("click", () => {
  const isMenuOpen = navMenu.classList.contains("hidden");

  if (isMenuOpen) {
    navMenu.classList.remove("hidden"); // Tampilkan menu
    menuIcon.setAttribute("name", "close"); // Ubah ikon menjadi "close"
  } else {
    navMenu.classList.add("hidden"); // Sembunyikan menu
    menuIcon.setAttribute("name", "menu"); // Ubah ikon menjadi "menu"
  }
});

// Mendapatkan elemen tombol dan <html>
const darkModeButton = document.getElementById("dark-mode-button");
const html = document.documentElement;

// Cek preferensi mode sebelumnya
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark"); // Aktifkan dark mode
} else {
  html.classList.remove("dark"); // Nonaktifkan dark mode
}

// Event listener untuk tombol dark mode
darkModeButton.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark"); // Nonaktifkan dark mode
    localStorage.setItem("theme", "light"); // Simpan preferensi light mode
  } else {
    html.classList.add("dark"); // Aktifkan dark mode
    localStorage.setItem("theme", "dark"); // Simpan preferensi dark mode
  }
});

document.getElementById("sendButton").addEventListener("click", function () {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Buat link WhatsApp
  const whatsappLink = `https://wa.me/62881027331451?text=Halo,%20saya%20${firstName}%20${lastName},%20email:%20${email}%20.%20Pesan:%20${encodeURIComponent(message)}`;

  // Redirect ke WhatsApp
  window.open(whatsappLink, "_blank");
});

