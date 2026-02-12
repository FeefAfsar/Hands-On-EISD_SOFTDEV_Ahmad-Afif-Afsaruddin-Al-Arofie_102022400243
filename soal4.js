function validasiInput(nama, email, divisi, terdaftarSaatIni) {
    // Nama tidak boleh kosong
    const namaValid = nama !== "";
    // Email tidak boleh kosong dan ada @
    const emailValid = email !== "" && email.includes("@");
    // Divisi tidak boleh kosong 
    const divisiValid = divisi !== "";
    // Jumlah peserta harus angka dan minimal 1
    const jumlahValid = typeof terdaftarSaatIni === "number" && terdaftarSaatIni >= 1;

    if (namaValid && emailValid && divisiValid && jumlahValid) {
        console.log("Data valid"); //
    } else {
        console.log("Data tidak valid"); 
    }
}

// Test case
validasiInput("Ruddi", "ruddi@mail.com", "Softdev", 10); // Data valid
validasiInput("", "aaa", "", 0); // Data tidak valid