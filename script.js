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
      { src: "assets/taphuanai/z6881239789899_a7cf1c478298a2cc135fa8575c29a3ea.jpg", group: "ai" },
      { src: "assets/taphuanai/z6881239790363_9f3490a61686d9ced2196a2a34a5a12f.jpg", group: "ai" },
      // Tập huấn học bạ số
      { src: "assets/taphuanhocbaso/z7030832953112_eaa3dd78e4b18854f43c80626f128c53.jpg", group: "hocbaso" },
      { src: "assets/taphuanhocbaso/z7030833064297_1abff16a11ac468b1f20999d96560b91.jpg", group: "hocbaso" },
      { src: "assets/taphuanhocbaso/z7030833100679_259ae0d0fdf72d17fc7d5444bd126d35.jpg", group: "hocbaso" },
      { src: "assets/taphuanhocbaso/z7030833253520_c31527468b9d7b9183a3fea12ef63cdc.jpg", group: "hocbaso" },
      // Chuyên đề công nghệ và hành trình lịch sử
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6283821235669_f284f6ddbc83d2281f34045e01c881fb.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284170558012_425a0cb4437f90efb3f69d8d77ed1c54.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284170577446_84ce97f426c29b2449ed5b4b9ea042e6.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284170581719_99548c1fa494fc72c3e6cd45cf6994b8.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284170587880_fd1c0bec91334e565a32ec8d74334548.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284170592564_7f05403af2c01cd8bf22b2f0179041f8.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284170599942_59d39859dcd0c9336b869292f88955e8.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363103442_c22e486891ca9c999f7cae4612c96757.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363107115_894144f0fa86dc6c1d125d8f57089128.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363125914_8f83ff5ab57e886902a189702db75d21.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363129346_68fa046b93c067fe06bc1306b053c894.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363129731_fc6ce0809b56c4d4797eec0436bd7c03.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363143617_2a1a47b6c4169f220665425b6513a627 - Copy.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363145734_97196260e9aed33f1e5d10b25ff370e1.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363148176_71312d10cde4fc586fec3189356dd255 - Copy.jpg", group: "congnghe" },
      { src: "assets/chuyendecongnghevahanhtrinhlichsu/z6284363158464_ca251537466156275807699370fe867e.jpg", group: "congnghe" },
      // Chuyên đề thiết kế lớp học mơ ước
      { src: "assets/chuyendethietkelophocmouoc/z7267897521865_550ddd79bd12b40cb23af04dc13cf8a0.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897522154_2f5be7c99dc4f1e4a8d5a8a437969a80.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897535636_dadc0509d7df1af31714c47229095929.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897543474_e70bac1a147f89db33832a43fab1d36d.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897547630_d6e338e96102b8b7c98f1dfea7968c50.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897547927_b2177540b976e3d7ddde7cb9187deee0.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897557372_f7b493f154ed99c9c84e051a0b2e7408.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897567933_91fb8afd75c9f8972f12b784a71dcef5.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897576205_6eccf04045c684374e2cb66e0cdc69dd.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897576485_e0bd460b48bf2ca034d350f1ea8946ca.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897582668_244e327703d76fee8113c2fb012e4989.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897593216_dd62b1ef7904268bff0a79380cf1af89.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897599535_b5e28d103a55667b53ced319871cc3ae.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897607646_71e1122d16d14c07f1f991a4a4156c22.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897728789_ec9e9c1659f3c531683679254f0c966b.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897743606_174cbc4367b4681e32868d779ac6bd56.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897746476_6f412281cf053d7f5eb4902ebf4cd260.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897755000_a5b90ecedac9f90a56d64520c6672e58.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897762244_80afb4c15142001aee0e8b0da8435187.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897765236_3dce1d50fc94e800f6fc6a54dd0f9200.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897775766_2acb58786551bf6dead28e034a536dcc.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897780847_d27e63e07d05b26de9a576437a3bf631.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897788014_19fa779235f5f542d4222f8638e45a6a.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897795504_a2b84b20529f4bcc73d5fd7053f25a25.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897798784_51599f5b73c8c899b2d31cafdf4999bd.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897808851_0b48d3e34672630f5f1495a60f2872e4.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897813738_3b84b53c4a5831659d851a28ea2a2db6.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897821009_4b254e225229731b46ad4b369c0284f4.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897821271_ccb86dae0fe3665e691a32314024aef7.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897826227_f49a5f5634f2249bab7d40220947292f.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897835278_6a6981e30477ad83ca0a9d9bad4e6841.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897838176_9c84c33dc1de227408542715a6e2deab.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897846465_5a77ac0b832a7b7a258fdd76911c61a9.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897859279_a8accd80cb4f542f7aae23c19c3c4ed9.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897862250_b0651b71138fcb1b17ad9819d4e976c9.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897867877_9e4a26e26c8c65cb8a3e50b584bc980c.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897872569_b55b06d66828e6091ac74a2503341110.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897879901_130cb347d3e40a35fa9a3e2d5a50b13f.jpg", group: "thietkelop" },
      { src: "assets/chuyendethietkelophocmouoc/z7267897890821_99dfed8aa1d6f6d297f5feb0a44d5b2b.jpg", group: "thietkelop" },
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
            : img.group === "hocbaso"
            ? "Ảnh tập huấn học bạ số"
            : img.group === "congnghe"
            ? "Ảnh chuyên đề công nghệ và hành trình lịch sử"
            : "Ảnh chuyên đề thiết kế lớp học mơ ước";

        // Add click event for image preview
        image.addEventListener("click", () => openImageModal(img.src, image.alt));

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

  // Image Modal Functions
  function openImageModal(src, alt) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");

    modalImg.src = src;
    modalImg.alt = alt;
    modalCaption.textContent = alt;

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeImageModal() {
    const modal = document.getElementById("image-modal");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto"; // Restore scrolling
  }

  // Close modal when clicking backdrop or close button
  document.addEventListener("click", (e) => {
    const modal = document.getElementById("image-modal");
    if (e.target === modal || e.target.classList.contains("modal-backdrop") || e.target.classList.contains("modal-close")) {
      closeImageModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeImageModal();
    }
  });

  // Hamburger Menu Functionality
  const hamburger = document.querySelector(".hamburger");
  const mainMenu = document.querySelector(".main-menu");

  if (hamburger && mainMenu) {
    hamburger.addEventListener("click", () => {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
      hamburger.classList.toggle("active");
      mainMenu.classList.toggle("active");
    });

    // Close menu when clicking on a menu item
    mainMenu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.classList.remove("active");
        mainMenu.classList.remove("active");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !mainMenu.contains(e.target)) {
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.classList.remove("active");
        mainMenu.classList.remove("active");
      }
    });
  }
});
