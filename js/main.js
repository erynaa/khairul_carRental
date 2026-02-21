// Menu
// let menu = document.querySelector('.menu-icon');

// Animate Menu
// menu.onclick = () => {
//     menu.classList.toggle("move");
// }

// ==============================
// BOOKING FORM
// ==============================
const form = document.getElementById("bookingForm")

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const ic = document.getElementById("ic").value;
        const phone = document.getElementById("phone").value;
        const alamat = document.getElementById("alamat").value;
        const destinasi = document.getElementById("destinasi").value;
        const pax = document.getElementById("pax").value;
        const car = document.getElementById("car").value;
        const carType = document.getElementById("carType").value;
        const pickup = document.getElementById("pickup").value;
        const pickupTime = document.getElementById("time_pickup").value;
        const returnDate = document.getElementById("return").value;
        const returnTime = document.getElementById("time_return").value;
        const totalDate = document.getElementById("total_date").value;
        const serviceType = document.querySelector('input[name="service_type"]:checked').value;
        const promoCode = document.getElementById("promoCode").value;

        const message = `
Khairul Rent A Car
* Sila menyemak butiran sebelum melakukan tempahan.

Nama Penyewa: ${name}
No K/P Penyewa: ${ic}
No H/Phone Penyewa: ${phone}
Alamat Penyewa: ${alamat}
Destinasi Sewaan: ${destinasi}
Jumlah Penumpang: ${pax}
Jenis Kenderaan: ${car}
Pilih Kenderaan: ${carType}
Tarikh Pick Up: ${pickup}
Masa Pick Up: ${pickupTime}
Tarikh Pulang: ${returnDate}
Masa Pulang: ${returnTime}
Jumlah Hari Sewaan: ${totalDate}
Jenis Perkhidmatan: ${serviceType}
Promo Code: ${promoCode}

Terima kasih kerana menghubungi Khairul Rent A Car. 
Kami akan menghubungi anda untuk pengesahan tempahan secepat mungkin.
        `;

        const whatsappNumber = "601111976971";
        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank")
    });
}

// ==============================
// Menu-Toggle
// ============================== 
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // CAR TYPE DROPDOWN
    // ==============================
    const carCategory = document.getElementById("car");
    const carTypeSelect = document.getElementById("carType");

    if (carCategory && carTypeSelect) {
        const carData = {
            hatchback: ["Axia", "Myvi", "Toyota Yaris", "Honda City"],
            sedan: ["Saga", "Bezza", "Toyota Vios", "Nissan Almera"],
            mpv: ["Alza", "Exora", "Sienta", "XPander", "Starex", "Alphard", "Toyota Hiace"],
            jentera: ["Hilux", "Lori 1-5 tan", "JCB", "Skylift"]
        };

        carCategory.addEventListener("change", function () {
            const selectedCategory = this.value;

            //Reset Options
            carTypeSelect.innerHTML = '<option value="">Pilih Kenderaan</option>';

            if (carData[selectedCategory]) {
                carData[selectedCategory].forEach(car => {
                    const option = document.createElement("option");
                    option.value = car;
                    option.textContent = car;
                    carTypeSelect.appendChild(option);
                });
            }
        });
    }

    // ==============================
    // CAR CATEGORY FILTER
    // ==============================
    const filterItems = document.querySelectorAll(".filter-menu li");
    const rentalBoxes = document.querySelectorAll(".rental-box");

    if (!filterItems.length || !rentalBoxes.length) return;

    filterItems.forEach(item => {
        item.addEventListener("click", () => {

            // Active state
            filterItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            const filter = item.getAttribute("data-filter");

            rentalBoxes.forEach(box => {
                const category = box.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    box.style.display = "flex";
                } else {
                    box.style.display = "none";
                }
            });

            // Auto Scroll Up Pages
            document.querySelector("#rentals").scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // ==============================
    // CAR FILTER (FIXED)
    // ==============================
    const params = new URLSearchParams(window.location.search);
    const selectedType = params.get("type")

    if (selectedType) {
        filterItems.forEach(item => {
            if (item.getAttribute("data-filter") === selectedType) {
                item.click();
            }
        });
    }

});



