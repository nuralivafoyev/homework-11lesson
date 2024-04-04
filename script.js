
//---------------------> loop | for <---------------------
// Masakan: Siz halqani o'yinning kompyuterlashtirilgan versiyasi deb o'ylashingiz mumkin, unda siz kimgadir bir yo'nalishda X qadam, so'ngra Y boshqa yo'nalishda qadam tashlashni buyurasiz. Masalan, "Sharqqa besh qadam tashla" g'oyasini halqa sifatida quyidagicha ifodalash mumkin:

for (let i = 0; i < 5; i++) {
    // 5 gacah qiymati oshib boradi va 4 bilan tugaydi
    console.log("Har qadamda bittadan!");
}





//---------------------->functions<--------------------
// masalan funcsiyani har xil usulda elon qilsaangiz boladi
//1
function square(number) {
    return number * number;
}

//2
const square = function (number) {
    return number * number;
  };  
  console.log(square(4)); // 16

//3
const square = (number) => {
    return number * number;
}

//4
const square = number => number * number;




//---------------------->array<-------------------------
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]