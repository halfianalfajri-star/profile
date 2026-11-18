// Target awal: 30 Desember 2026 pukul 00.00
const defaultTarget = new Date(2026, 11, 30, 0, 0, 0).getTime();

let targetTime = defaultTarget;
let countdownInterval;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("status").textContent =
      "WAKTU PSAS II TELAH DIMULAI!";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");

  document.getElementById("status").textContent =
    "Waktu terus berjalan...";
}

function startCountdown() {
  clearInterval(countdownInterval);
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function startCustomTimer() {
  const selectedDate = document.getElementById("customDate").value;

  if (!selectedDate) {
    alert("Silakan pilih tanggal dan waktu terlebih dahulu!");
    return;
  }

  const customTime = new Date(selectedDate).getTime();

  if (isNaN(customTime) || customTime <= Date.now()) {
    alert("Pilih waktu yang masih akan datang!");
    return;
  }

  targetTime = customTime;
  startCountdown();

  alert("Countdown berhasil diubah!");
}

function resetTimer() {
  targetTime = defaultTarget;
  document.getElementById("customDate").value = "";
  startCountdown();
  alert("Countdown dikembalikan ke tanggal 30 Desember 2026!");
}

// Jalankan countdown saat halaman dibuka
startCountdown();