// JavaScript - veb səhivələrə interaktivlik gətirmək üçün 
// istifadə olunan proqramlaşdırma dilidir

// alert("Salam") - istifadəçiyə xabardalıq pəncərəsi göstərir
// alert("Salam");

// Əsas anlayışlar

// Dəyişənlər (Variables)

let ad = "Aysel";
let yas = 20;

console.log( "Menim adim: " + ad + " ve yasim "  + yas + " -dir"); 

// let dəyişən yaratmaq üçün
// console.log(...) - nəticəni brauzerin konsolunda göstərir


// Əməliyyatlar

let a = 5;
let b = 3;
let c = a + b;

console.log("Cemi: " + c); 

// Şərt operatorlaı

let yas2 = 18;

if (yas2 >= 18) {
    console.log("Sen boyuksen.")
} else {
    "Sen hele kiciksen"
}

// Dovrler (loops)

for (let i = 1; i <= 5; i++ ) {
    console.log("Addim: " + i);
}

// Funksiyalar

function salamla(ad) {
    console.log ("Salam, " + ad + "!")
}

salamla("Nigar");
salamla("Rauf");


// Tpasiriq 1: I?stifadecinin adini sorus ve salamla

// let ad2 = prompt("Adinizi daxil edin: ")
// alert("Salam " + ad2 + "!")

// Tapşırıq 2: iki ədədin cəmini tap.

let eded1 = Number(prompt("Birinci ədədi daxil edin: "));
let eded2 = Number(prompt("İkinci ədədi daxil edin: "));
let cem = eded1 + eded2;

alert("Cəm: " + cem);


// Tapşırıq 3: 1-dən 10-na qədər ədədləri konsola yaz

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Sadə funksiya yaz

function kvadrat(x) {
    return x * x;
}

console.log(" 5-nin kvadratı: " + kvadrat(5));




