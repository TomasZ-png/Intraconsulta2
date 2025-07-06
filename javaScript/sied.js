  const modal = document.getElementById("modalSIED");
  const btn = document.getElementById("sied-unlam-card");
  const span = document.getElementById("cerrarModal");

  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

