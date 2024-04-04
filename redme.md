## loop | for

- Looplar biror narsani qayta-qayta bajarishning tez va oson usulini taklif qiladi.
- for operatori ozini ichiga yangi ozgaruvchi ocha oladi va har bir togri bajarilgan sikl uchun yiqmatini oshiradi yoki kamaytiradi.
- agar qiymatini bittadan oshirib borsa <code>iterator</code> deyiladi.
- qiymatini bittadan kamaytirib borsa <code>declorator</code> deyiladi.



## functions

- Funktsiyalar JavaScript-ning asosiy qurilish bloklaridan biridir. JavaScript-dagi funktsiya protseduraga o'xshaydi - topshiriqni bajaradigan yoki qiymatni hisoblaydigan iboralar to'plami, lekin protsedura funktsiya sifatida tasniflanishi uchun u biroz kirishni qabul qilishi va natijani qaytarishi kerak, agar ular o'rtasida aniq bog'liqlik mavjud bo'lsa. kirish va chiqish. Funktsiyadan foydalanish uchun siz uni chaqirmoqchi bo'lgan doirada uni belgilashingiz kerak.

- Funcsiyani qanday ishlatish uchun uni nomini yozib, qo'shimcha parametrlar va qiymatni qaytarish uchun <code>return</code> deb yozamiz.
- ## Funcsiya elon qilishni bir nechta turlari mavjud: 
### 1
```

        function square(number){/--**--/}

```

### 2   

```

        const square = function (number) {/--**--/};

```

### 3

```

        const square = (number) => {/--**--/}

```

### 4
    
```
    
        const square = number => /--code--/ * /--code--/;

```



## Array
- <code>Array</code> ifodasi an'anaviy funktsiya ifodasiga ixcham muqobil bo'lib, ba'zi semantik farqlar va foydalanishda ataylab cheklovlari bor

- <code>Array</code> uchun <code>Array.from()</code> va <code>Array.of()</code> funksiyalaridan foydalanish mumkin

- <code>Array</code> uchun <code>Array.isArray()</code> funksiyasi an'anaviy <code>Array</code> turlarini tekshirish uchun foydalanish mumkin


## Object

- <code>Objekt</code> turi JavaScript ma'lumotlar turlaridan birini ifodalaydi. U turli xil kalitli to'plamlarni va murakkabroq ob'ektlarni saqlash uchun ishlatiladi. Ob'ektlar Object() konstruktori yoki ob'ektni ishga tushirish / literal sintaksisi yordamida yaratilishi mumkin.

### Tavsif

- JavaScript-dagi deyarli barcha ob'ektlar Ob'ektning namunalari; odatiy ob'ekt Object.prototype dan xususiyatlarni (jumladan, usullarni) meros qilib oladi. Object.prototype dan meros bo'lmagan yagona ob'ektlar null prototipli yoki boshqa null prototip ob'ektlaridan kelib chiqqan ob'ektlardir.

- Object.prototype ob'ektidagi o'zgarishlar prototip zanjiri orqali barcha ob'ektlar tomonidan ko'rinadi, agar ushbu o'zgarishlarga duchor bo'lgan xususiyatlar va usullar prototip zanjiri bo'ylab bekor qilinmasa. Bu ob'ekt xatti-harakatlarini bekor qilish yoki kengaytirish uchun juda kuchli, ammo potentsial xavfli mexanizmni ta'minlaydi. Uni xavfsizroq qilish uchun Object.prototype asosiy JavaScript tilidagi o'zgarmas prototipga ega yagona ob'ektdir - Object.prototype prototipi har doim null va o'zgarmasdir.



### Protyplari

#### Object.prototype usulini to'g'ridan-to'g'ri misoldan chaqirishdan qochishingiz kerak, ayniqsa polimorf bo'lish uchun mo'ljallanmagan (ya'ni, faqat uning dastlabki xatti-harakati mantiqiy va hech qanday tushuvchi ob'ekt uni mazmunli tarzda bekor qila olmaydi). Object.prototype dan tushadigan barcha ob'ektlar bir xil nomga ega, ammo siz kutganingizdan butunlay boshqacha semantikaga ega bo'lgan shaxsiy xususiyatni belgilashi mumkin. Bundan tashqari, bu xususiyatlar null-prototipli ob'ektlar tomonidan meros qilib olinmaydi. Ob'ektlar bilan ishlash uchun barcha zamonaviy JavaScript utilitlari statikdir. Aniqroq aytganda:


- <code>valueOf()</code>, <code>toString()</code> va <code>toLocaleString()</code> polimorfik bo'lishi uchun mavjud va ob'ekt o'z amalga oshirishni oqilona xatti-harakatlar bilan belgilashini kutishingiz kerak, shuning uchun ularni misol usullari sifatida chaqirishingiz mumkin. Biroq, <code>valueOf()</code>, va <code>toString()</code> odatda turdagi konvertatsiya orqali bilvosita chaqiriladi va ularni kodingizda o'zingiz chaqirishingiz shart emas.

- __defineGetter__(), __defineSetter__(), __lookupGetter__() va __lookupSetter__() eskirgan va ishlatilmasligi kerak. Buning o'rniga <code>Object.defineProperty()</code> va <code>Object.getOwnPropertyDescriptor()</code> statik muqobillaridan foydalaning.

- __proto__ xususiyati eskirgan va ishlatilmasligi kerak. <code>Object.getPrototypeOf() </code> va <code>Object.setPrototypeOf()</code> muqobillari statik usullardir.

- <code>propertyIsEnumerable()</code> va <code>hasOwnProperty()</code> usullari mos ravishda <code>Object.getOwnPropertyDescriptor()</code> va <code>Object.hasOwn()</code> statik usullari bilan almashtirilishi mumkin.

- Agar siz konstruktorning prototip xususiyatini tekshirayotgan bo'lsangiz, <code>isPrototypeOf()</code> usuli odatda <code>instanceof</code> bilan almashtirilishi mumkin.