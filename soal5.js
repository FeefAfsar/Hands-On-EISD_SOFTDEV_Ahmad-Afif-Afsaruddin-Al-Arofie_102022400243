const dataPeserta = [18, 15, 10, 10]; 
let total = 0; 

for (let i = 0; i < dataPeserta.length; i++) {
    total += dataPeserta[i]; // Hitung total 
}

const rataRata = total / dataPeserta.length; // Hitung rata-rata 

console.log(`Total seluruh peserta: ${total}`);
console.log(`Rata-rata peserta per Study Group: ${rataRata}`);