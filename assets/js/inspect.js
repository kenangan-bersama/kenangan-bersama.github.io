// Mencegah munculnya menu konteks saat mengklik kanan
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Mengatur interval untuk memeriksa apakah jendela inspeksi terbuka
var checkInspectorInterval = setInterval(function () {
  if (
    window.outerWidth - window.innerWidth > 100 ||
    window.outerHeight - window.innerHeight > 100
  ) {
    alert("Maaf, tidak dapat membuka inspeksi.");
    clearInterval(checkInspectorInterval);
  }
}, 1000);

// Mencegah akses ke inspeksi menggunakan shortcut keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("Maaf, tidak dapat membuka inspeksi.");
  }
});
