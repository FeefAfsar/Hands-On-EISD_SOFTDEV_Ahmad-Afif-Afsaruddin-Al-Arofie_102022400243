const daftarEmail = [
    "Andi@gmail.com", "Budi@gmail.com", "Sari@gmail.com", 
    "Andi@gmail.com", "Rina@gmail.com", "Budi@gmail.com"
];

let emailTerlihat = [];
let duplikat = [];

daftarEmail.forEach(email => {
    if (emailTerlihat.includes(email)) {
        if (!duplikat.includes(email)) {
            duplikat.push(email); 
        }
    } else {
        emailTerlihat.push(email);
    }
});

if (duplikat.length > 0) {
    console.log("Email duplikat ditemukan: " + duplikat.join(", "));
} else {
    console.log("Tidak ada data duplikat."); 
}