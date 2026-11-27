(() => {
  const video = document.getElementById("introVideo");
  const audioBtn = document.getElementById("toggleAudioBtn");

  if (video && audioBtn) {
    audioBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      video.play().catch(() => {});
      audioBtn.textContent = video.muted ? "Attiva Audio" : "Muta Audio";
    });
  }
})();
