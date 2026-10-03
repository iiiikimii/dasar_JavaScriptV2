// Tugas 1
var mobil = {
    nama: "Xpander",
    merek: "Mitsubishi",
    tipeMobil: "Minibus",
    tahunDibuat: "2007",
    warna: "Putih",
    majuCepat: function () {
        return "Mobil ini melaju dengan kecepatan 300 km/h";
    },
    majuLambat: function () {
        return "Mobil ini melaju dengan kecepatan 10 km/h";
    },
    mundur: function () {
        return "Mobil ini bergerak ke belakang";
    },
    stop: function () {
        return "Mobil ini berhenti";
    }
};

console.log(mobil.nama);
console.log(mobil.merek);
console.log(mobil.majuCepat());
console.log(mobil.stop());
console.log(mobil.majuLambat());
console.log(mobil.mundur());

// Tugas 2
function buatObjectKucing(nama, jenis, warna) {
    var kucing = {};
    kucing.nama = nama;
    kucing.jenis = jenis;
    kucing.warna = warna;
    kucing.bersuara = function () {
        return "Meow..";
    }
    return kucing;
}

var kucing1 = buatObjectKucing("Milo", "Persia", "Putih");

console.log(kucing1.nama);
console.log(kucing1.jenis);
console.log(kucing1.warna);
console.log(kucing1.bersuara());

// Tugas 3
function Kursi(jenis, warna, bahan) {
    this.jenis = jenis;
    this.warna = warna;
    this.bahan = bahan;
    this.result = function () {
        alert("This page says\n" + this.jenis + " dengan warna " + this.warna + " dan menggunakan bahan " + this.bahan + " telah selesai dibuat");
    }
}

var kursi1 = new Kursi("Sofa", "Putih", "Kain");
kursi1.result();