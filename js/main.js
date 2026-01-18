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