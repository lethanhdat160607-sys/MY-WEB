const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const header = $("#header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
$$(".nav a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("open")));

$$("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const today = new Date().toISOString().split("T")[0];
$("#quickDate").value = today;
$("#date").value = today;

$("#quickDate").addEventListener("change", e => $("#date").value = e.target.value);
$("#quickTime").addEventListener("change", e => $("#time").value = e.target.value);
$("#quickGuests").addEventListener("change", e => $("#guests").value = e.target.value);
$("#quickExperience").addEventListener("change", e => $("#experience").value = e.target.value);

const modal = $("#successModal");
const toast = $("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function bookingCode() {
  return `BMR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
}

$("#bookingForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    code: bookingCode(),
    name: $("#name").value,
    email: $("#email").value,
    phone: $("#phone").value,
    date: $("#date").value,
    time: $("#time").value,
    guests: $("#guests").value,
    experience: $("#experience").value,
    staff: $("#staff").value,
    notes: $("#notes").value,
    status: "Chờ xác nhận",
    createdAt: new Date().toISOString()
  };

  const bookings = JSON.parse(localStorage.getItem("bmrBookings") || "[]");
  bookings.push(data);
  localStorage.setItem("bmrBookings", JSON.stringify(bookings));

  $("#bookingCode").textContent = data.code;
  $("#bookingSummary").innerHTML = `
    <strong>${data.name}</strong><br>
    ${data.date} · ${data.time}<br>
    ${data.guests} khách · ${data.experience}<br>
    Nhân viên: ${data.staff}<br>
    <b>Trạng thái: ${data.status}</b>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  showToast("Đã lưu phiếu đặt trải nghiệm trên trình duyệt.");
});

$("#modalClose").addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", e => {
  if (e.target === modal) $("#modalClose").click();
});

$("#printBooking").addEventListener("click", () => window.print());

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$(".reveal").forEach(el => observer.observe(el));
