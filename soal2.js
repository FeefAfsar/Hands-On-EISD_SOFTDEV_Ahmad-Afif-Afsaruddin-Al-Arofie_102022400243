const studyGroups = [
    { nama: "Software Development", kuota: 20, terdaftar: 18 },
    { nama: "UI/UX Design", kuota: 15, terdaftar: 15 },
    { nama: "Technopreneur", kuota: 25, terdaftar: 10 },
    { nama: "Intelligence System", kuota: 10, terdaftar: 10 }
];

console.log("=== Status Pendaftaran Study Group ===");

// Menampilkan yang masih tersedia (terdaftar < kuota)
console.log("Tersedia:");
studyGroups.forEach(sg => {
    if (sg.terdaftar < sg.kuota) {
        console.log(`- ${sg.nama} (Sisa: ${sg.kuota - sg.terdaftar})`);
    }
});

// Menampilkan yang sudah penuh (terdaftar >= kuota)
console.log("\nPenuh:");
studyGroups.forEach(sg => {
    if (sg.terdaftar >= sg.kuota) {
        console.log(`- ${sg.nama}`);
    }
});