// Ganti nomor WhatsApp berikut dengan nomor kamu
const NOMOR_WHATSAPP = "6281380747386"; // Pastikan nomor diawali dengan kode negara tanpa tanda "+" (cth. 085-XXX-XXX-XXX diubah menjadi 6285-XXX-XXX-XXX)

const ewc_hidden = document.querySelectorAll(".ewc_hidden");
const ewc_button = document.querySelectorAll(".ewc_button");
const ewc_audio = new Audio(
  "https://res.cloudinary.com/xviidev/video/upload/v1642074623/whatsapp-web_tqjtgm.mp3"
);

const ewcShow = () => {
  ewc_hidden.forEach((el) => {
    el.style.display = "flex";
    el.ariaHidden = "false";
  });
  ewc_audio.play();
  setTimeout(() => {
    ewc_hidden.forEach((el) => {
      el.style.opacity = "1";
    });
  }, 0);
  setTimeout(() => {
    document.getElementById("ewChatBubble").style.opacity = "1";
  }, 300);
};

const ewcHide = () => {
  ewc_hidden.forEach((el) => {
    el.style.opacity = "0";
    document.getElementById("ewChatBubble").style.opacity = "0";
    el.ariaHidden = "true";
  });
  setTimeout(() => {
    ewc_hidden.forEach((el) => {
      el.style.display = "none";
    });
  }, 1000);
};

function ewcOpen() {
  if (ewChatBox.style.display == "none") {
    ewcShow();
  } else {
    ewcHide();
  }
}

document.querySelectorAll(".ewc_close").forEach((el) => {
  el.addEventListener("click", ewcHide);
});

document.querySelectorAll(".ewc_open").forEach((el) => {
  el.addEventListener("click", ewcOpen);
});

document.getElementById("ewc_send").addEventListener("click", () => {
  const messageInput = document.getElementById("ewc_message");
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    window.open(
      `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURI(messageText)}`
    );
  } else {
    // Tampilkan pesan kesalahan atau lakukan aksi lain jika pesan kosong
    alert("Harap masukkan pesan sebelum mengirim.");
  }
});

function pesanTemaUndangan() {
  var pesan =
    "Halo min bagaimana cara pesan undangan websitenya ? Bisa dibantu ? [Via Website]";
  window.open("https://wa.me/6285313839671?text=" + encodeURI(pesan));
}

function pesanTema(nomorTema) {
  var pesanAwal =
    "Hai min, saya mau order tema pernikahan " +
    nomorTema +
    " yah, tolong dibantu yah";
  bukaWhatsAppChat("6285313839671", pesanAwal);
}

function ubahPesanWhatsApp() {
  var pesan =
    "Halo min, saya mau pesan undangan websitenya, bisa dibantu? - [Via Website]";
  bukaWhatsAppChat("6285313839671", pesan);
}

function bukaWhatsAppChat(nomorWhatsApp, pesan) {
  var waURL =
    "https://api.whatsapp.com/send?phone=" +
    nomorWhatsApp +
    "&text=" +
    encodeURIComponent(pesan);
  window.open(waURL, "_blank");
}
