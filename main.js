
var a = prompt('Birinchi sonni kiriting');
var b = prompt('Ikkinchi sonni kiriting');
var c = prompt('Uchinchi sonni kiriting');


if (a === null || a.trim() === "" || b === null || b.trim() === "" || c === null || c.trim() === "") {
    console.log("Siz amalni bajarmadingiz!");
    alert("Siz amalni bajarmadingiz!");
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Matn emas, raqam kiriting!");
    alert("Matn emas, raqam kiriting!");
} else {

    if ((a > b && a < c) || (a > c && a < b)) {

        console.log( a + " -birinchi kiritilgan son o'rta qiymat ");
        alert( a + " -birinchi kiritilgan son o'rta qiymat ");
        
    } else if ((b > a && b < c) || (b > c && b < a)) {

        console.log( b + " -ikkinchi kiritilgan son o'rta qiymat ");
        alert( b + " -ikkinchi kiritilgan son o'rta qiymat ");
    } else {

        console.log( c + " -uchinchi kiritilgan son o'rta qiymat");
        alert( c + " -uchinchi kiritilgan son o'rta qiymat");
    }


}


