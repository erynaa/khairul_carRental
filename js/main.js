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
        const location = document.getElementById("location").value;
        const car = document.getElementById("car").value;
        const pickup = document.getElementById("pickup").value;
        const pickupTime = document.getElementById("time_pickup").value;
        const returnDate = document.getElementById("return").value;
        const returnTime = document.getElementById("time_return").value;
        const totalDate = document.getElementById("total_date").value;
        const serviceType = document.querySelector('input[name="service_type"]:checked').value;

        const message = `
Khairul Rent A Car
* Sila menyemak butiran sebelum melakukan tempahan.

Nama: ${name}
Lokasi: ${location}
Kenderaan: ${car}
Tarikh Pick Up: ${pickup}
Masa Pick Up: ${pickupTime}
Tarikh Pulang: ${returnDate}
Masa Pulang: ${returnTime}
Jumlah Hari: ${totalDate}
Jenis Perkhidmatan: ${serviceType}

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

// Toggle menu open/close
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});




document.addEventListener("DOMContentLoaded", () => {

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
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });

});



// ==============================
// CAR FILTER (FIXED)
// ==============================
// const filterItems = document.querySelectorAll(".filter-menu li");
// const rentalBoxes = document.querySelectorAll(".rental-box");

// if (filterItems.length && rentalBoxes.length) {
//     filterItems.forEach(item => {
//         item.addEventListener("click", () => {
//             // Remove active from all
//             filterItems.forEach(i => i.classList.remove("active"));
//             item.classList.add("active");

//             const filter = item.getAttribute("data-filter");

//             rentalBoxes.forEach(box => {
//                 const category = box.getAttribute("data-category");

//                 if (filter === "all" || category === filter) {
//                     box.style.display = "block";
//                 } else {
//                     box.style.display = "none";
//                 }
//             });
//         });
//     });
// }


