// Menu
// let menu = document.querySelector('.menu-icon');

// Animate Menu
// menu.onclick = () => {
//     menu.classList.toggle("move");
// }

const form = document.getElementById("bookingForm")

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const car = document.getElementById("car").value;
        const pickup = document.getElementById("pickup").value;
        const returnDate = document.getElementById("return").value;

        const message = `
Khairul Car Rental | Tempahan Sewa Kereta

Nama: ${name}
No Telefon: ${phone}
Kenderaan: ${car}
Tarikh Ambil: ${pickup}
Tarikh Pulang: ${returnDate}

Terima kasih.
        `;

        const whatsappNumber = "601111976971";
        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank")
    });
}