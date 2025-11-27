document.addEventListener("DOMContentLoaded", () => {
  const wk = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const elWeek = document.getElementById("clock-weekday");
  const elDate = document.getElementById("clock-date");
  const elTime = document.getElementById("clock-time");
  const elYear = document.getElementById("current-year");

  const pad = (n) => String(n).padStart(2, "0");

  function updateClock() {
    const d = new Date();
    const weekday = wk[d.getDay()];
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getFullYear();
    const hh = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());

    if (elWeek) elWeek.textContent = weekday;
    if (elDate) elDate.textContent = `${day}/${month}/${year}`;
    if (elTime) elTime.textContent = `${hh}:${mm}:${ss}`;
    if (elYear) elYear.textContent = year;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // gallery for Phụ lục minh họa page
  const gallery = document.getElementById("gallery-grid");
  if (gallery) {
    const images = [
      // Tập huấn AI
      { src: "assets/taphuanai/z6881239788191_22643050eefc9dcdf03bd433862ac609.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239788441_5d2da3f342e74a3d008740233835b83c.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239788655_725dce370ff307a83eadf44e7bfbca9e.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239789169_4d9f535f5fa9bbd89ef935d47ce9206e.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239789214_1f8b00e35f1aca3027ad80bb5a9eb725.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239789899_a7cf1c478298a2cc135fa8575c29a3ea.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239790332_1c9e1c6663251257401b6416a0cce96e.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239790363_9f3490a61686d9ced2196a2a34a5a12f.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239791256_38020f65107b35ff88ba5e683cdefbc7.jpg", group: "ai" },
      // Tập huấn học bạ số
      { src: "assets/taphuanhocbaso/z7030832953112_eaa3dd78e4b18854f43c80626f128c53.jpg", group: "hocbaso" },
      { src: "assets/taphuanhocbaso/z7030833064297_1abff16a11ac468b1f20999d96560b91.jpg", group: "hocbaso" },
      { src: "assets/taphuanhocbaso/z7030833100679_259ae0d0fdf72d17fc7d5444bd126d35.jpg", group: "hocbaso" },
      { src: "assets/taphuanhocbaso/z7030833253520_c31527468b9d7b9183a3fea12ef63cdc.jpg", group: "hocbaso" },
    ];

    function renderGallery(filter) {
      const toShow =
        filter === "all" ? images : images.filter((img) => img.group === filter);
      gallery.innerHTML = "";
      toShow.forEach((img) => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        const image = document.createElement("img");
        image.src = img.src;
        image.alt =
          img.group === "ai"
            ? "Ảnh tập huấn AI"
            : "Ảnh tập huấn học bạ số";
        div.appendChild(image);
        gallery.appendChild(div);
      });
    }

    renderGallery("all");

    const filterButtons = document.querySelectorAll(".gallery-filter");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter") || "all";
        renderGallery(filter);
      });
    });
  }
});
