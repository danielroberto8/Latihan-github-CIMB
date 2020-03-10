//database orang-orang
//setiap orang memiliki nama, umur dan pekerjaan
//jumlah orangnya ada 5
//tampilkan nama umur dan pekerjaan setiap orang

// let arrNames = ['Bambang','Naruto','Yayat','Jihyo','Usman']
// let arrAges = [17,18,19,20,21]
// let arrJobs = ['IT Staff','Hokage Konoha','Security','Sekretaris','CEO Mandiri']
// let arrNumbers = ['111111','222222',['333333','333334'],'444444',['555555','555552']]

// let display = 'NAMA\tUMUR\tPEKERJAAN\tTELPON'
// for(let i=0;i<arrNames.length;i++){
//     display += `\n${arrNames[i]}\t${arrAges[i]}\t${arrJobs[i]}`
//     if(i==2||i==4){
//         for(let j=0;j<2;j++)
//             display += `\t${arrNumbers[i][j]}`
//     }else
//         display += `\t${arrNumbers[i]}`
// }

// let arrPegawai = [
//   ["Bambang", 17, "IT Staff", "11111"],
//   ["Naruto", 18, "Hokage Konoha", "222222"],
//   ["Yayat", 19, "Security", "333333"]
// ];

// let result = "NAMA\tUMUR\tPEKERJAAN\tTELPON";
// for (let i = 0; i < arrPegawai.length; i++) {
//   result += "\n";
//   for (let j = 0; j < arrPegawai[i].length; j++) {
//     result += `${arrPegawai[i][j]}\t`;
//   }
// }

// console.log(result);


// //OBJEK
// let mobil = {
//     warna: 'Merah',
//     tahun: '2018',
//     merek: 'Honda'
// }

// mobil.tipe = 'Sedan'
// mobil.warna = 'Putih'
// //node notation
// console.log(mobil.warna)
// //bracket notation
// console.log(mobil['merek'])

//studi kasus
let karyawan = {
    nama : 'Sasuke',
    umur : 20,
    pekerjaan : 'Barista',
    contactDetails : {
        alamat : 'Konoha',
        telepon : ['123456','7891011']
    }
}

karyawan['bosDivisi'] = 'saya'

console.log(karyawan)