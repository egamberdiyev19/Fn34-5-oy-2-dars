// 1. Funksiya uchun xato tashlash
function num1(x1 ) {
    if (x1 < 0 || x1 !== 'number') {
        throw new reportError("Faktorialni hisoblash uchun musbat son kerak!")
    }
    if(x1==1) {
        return 1
    } else {
        return x * num1(x-1);
    }
}
try {
    console.log(num1(5));
    
} catch (error) {
    console.log("Xato yuz berdi: xato haqida xabar", error);
    
}
// 2. Array bilan ishlashda xatolarni boshqarish
// 1-masala
function ortacha21(son21) {
    if (!Array.isArray(son21) || son21.length === 0) {
        throw new Error("Massiv uzatilmadi yoki bo'sh massiv!");
    }

    let sum21 = 0;

    son21.forEach((son211) => {
        sum21 += son211;  
    });

    const ortacha21 = sum21 / son21.length;

    return ortacha21;
}

console.log(ortacha21([5, 9, 12, 18]));  
// 2-masala
/*function ortacha22(son22)  {
    const num22 = son22.every(value22 => {
        if (value22 === 'number') {
            throw new Error("Massivda faqat sonlar bolishi kerak");
            
        }

    
    let sum22 = 0;
    son22.forEach(son221 => {
        sum22 += son221;
    });
    const ortacha22 = sum22 / son22.length;
    return ortacha22;
})
console.log(ortacha22);*/
// 3-masala
function num233(massiv233) {
    try {
        if (massiv233.length === 0) {
            throw new Error("Massiv bo'sh bo'lsa, o'rtacha qiymatni hisoblab bo'lmaydi.");
        }
        let sum233 = massiv233.reduce((arr233, cut233) => {
            if (typeof cut233 !== 'number') {
                throw new Error(`Massivda noto'g'ri qiymat`);
            }
            return arr233 + cut233;
        }, 0);
        let aver233 = sum233 / massiv233.length;
        return aver233;
        
    } catch (error) {
        console.log(`Xato yuz berdi, error`);
    }
}
// 3. O‘z xatolik funksiyasini yaratish
// 1-masala
function num311(a311, b311) {
    try {
    
        if (typeof a311 !== 'number' || typeof b311 !== 'number') {
            throw "Ikkala argument ham son bo‘lishi kerak";
        }
        if (b311 === 0) {
            throw "Bo‘luvchi nolga teng bo‘lmasligi kerak";
        }
        return a311 / b311;

    } catch (error) {
        console.log(`Xato yuz berdi, error`);
    }
}



// Massivlarga oid masalalar
// 1-masala
function num1 (arr1) {
    let sum1 = 0;
    for (let i =0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 0) {
            sum1 += arr1[1]
        }
    }
    return sum1
}
const number1 = [1, 8, 6, 5];
console.log(num1(number1));
// 2-masala
function num2(arr2) {
    return arr2.filter(soon => soon % 2 === 0);
}
const number2 = [5, 10, 5, 9]
console.log(num2(number2));
// 3-masala
function num3(arr3) {
    let new3 = [];
    for (let i = 0; i < arr3.length; i++) {
        if (new3.indexOf(arr3[i]) === -1) {
            new3.push(arr3[i]);
        }
    }
    return new3.length;
}
let arr3 = [5, 8, 64, 2];
console.log(num3(arr3)); 
// 4-masala
function num4 (arr4) {
    let max4 = Math.max(...arr4);
    let min4 = Math.min(...arr4);
    return max4 - min4
}
let arr4 = [2, 9, 7, 3, 4]
console.log(num4(arr4));
// 5-masala
function num5 (arr5) {
    return [...arr5].reverse()
}
let arr5 = [5, 11, 54, 32]
console.log(num5(arr5));
// 6-masala
function num6 (arr6, value6) {
    return arr6.filter(item6 => item6 === value6).length;
}
let arr6 = [5, 9, 5, 6]
console.log(num6(arr6, 2));
// 7-masala
function num7 (arr7) {
    return arr7.sort((a7, b7) => a7.length - b7.length);
}
let arr7 = ["apple", "banana", "kiwe"]
console.log(num7(arr7));
// 8-masala
function num8 (arr8) {
    let fist8 = Math.floor(arr8.length / 2)
    let fist81 = arr8.slice(0, fist8)
    let fist82 = arr8.slice(fist8)
    return [fist81, fist82]
}
let arr8 = [5, 9, 7, 3]
console.log(num8(arr8));
// 9-masala
function num9(arr9) {
    return arr9.filter(son9 => son9 > 0);
}
let arr9 = [-5, 8, -6, 4, 3]
console.log(num9(arr9));
// 10-masala
function num10(arr10) {
    let sum10 = 0;
    arr10.forEach(son10 => {
        sum10 += son10
    })
    return sum10 / arr10.length
}
let arr10 = [4, 8, 35, 41]
console.log(num10(arr10));
// 11-masala
function num11(arr11) {
    let res11 = []
    arr10.forEach(element11 => {
        res11.push(element11, element11)
    })
    return res11
}
let arr11 = [5, 8, 71, 16, 63]
console.log(num11(arr11));
// 12-masala
function num12(arr12) {
    return arr12.map(str12 => {
        return str12.charAt(0).toUpperCase() + str12.slice(1).toLowerCase();
    })
}
let arr12 = ['hello', 'wild', 'finish']
console.log(num12(arr12));
// 13-masala
function num13(arr13, isA13) {
if(isA13) {
    return arr13.sort((a13, b13) => a13 - b13);
} else {
    return arr13.sort((a13, b13) => b13 - a13);
}
}
let arr13 = [5, 7, 2, 9]

console.log(num13(arr13, true));
// 14-masala
function num14(arr14) {
    let long = arr14[0];
    let short = arr14[0];
    arr14.forEach(str14 => {
        if(str14.length > long.length) {
            long = str14;
        }
        if (str14.length < short.length) {
            short = str14
        }
    })
    return [short, long]
}
let arr14 = ['apple', 'banana', 'kiwi']
console.log(num14(arr14));
// 15-masala
function num15(arr15) {
    return arr15.map(element15 => element15.toString())
}
let arr15 = [5, 8, 7, 9]
console.log(num15(arr15));
// Stringlarga oid masalalar
// 16-masala
function num16(arr16) {
    const unli16 = ['a','e', 'i', 'o', 'u']
    let count = 0;
    for(let i = 0; i < arr16.length; i++ ) {
        if (unli16.includes(arr16[i].toLowerCase())) {
            count ++;
        }
    }
    return count;
}
let arr16 = "hello world"
console.log(num16(arr16));
// 17-masala
function num17(arr17) {
    return arr17.replace('', '')
}
let arr17 = "The quick brown fox jumps over the lazy dog";
console.log(num17(arr17));
// 18-masala
function num18(arr18) {
    let words18 = arr18.split(' ');
    for(let i = 0; i < arr18.length; i--) {
        const x18 = Math.floor(Math.random() * (i+1));
        [words18[i], words18[x18]] = [words18[x18], words18[i]];
    }
    return words18.join(' ')
}
let arr18 = "Bugun yaxwi kun";
console.log(num18(arr18));
// 19-masala
function num19(arr19) {
    let words19 = arr19.split(' ');
    words19.sort((a19, b19) => a19.length - b19.length )
    return words19.join(' ')
}
let arr19 = "ertaga hayot yaxwi boladi";
console.log(num19(arr19));
// 21-masala
function num21 (arr21) {
return arr21.split('').map(function(tri) {
    if (tri === tri.toLowerCase()) {
        return tri.toUpperCase();
    } else {
        return tri.toLowerCase()
    }
}).join('')
}
let re21 = "Salom, Dunyo!";
console.log(num21(re21));
// 23-masala
function num23(arr23) {
    let res23 = '';
    for (let i = 0; i < arr23.length; i++) {
        if (res23.indexOf(arr23[i]) === -1) {
            res23 += arr23[i]
        }
    }
    return res23;
}
let sum23 = "Salom yaxshimislar"
console.log((num23(sum23)));
// 24-masala
function num24(arr24) {
    return arr24.split('').reverse().join('');

}
let res24 = "faind the in somtingis"
console.log(num24(res24));
// 25-masala
function num25(arr25) {
    return arr25.split('').map(function(wold25) {
        return wold25.charAt(0).toUpperCase() + wold25.slice(1)
    }).join(' ')
}
let res25 = "bugun yaxwi kunlardir";
console.log(num25(res25));
// Massiv va string metodlarini birgalikda ishlatadigan masalalar
// 26-masala
function num26(arr26) {
    return arr26.split(' ').sort();

}
let res26 = "bu yer kotta";
console.log(num26(res26));
// 27-masala
function num27(arr27) {
    return arr27.join(" ")
}
let word27 = ["sozlar", "dunyo", "tillilar"]
console.log(num27(word27));
// 28-masala
function num28(arr28) {
    let res28 ="";
    for(let i = 0; i < arr28.length; i++) {
        if (arr28[i].length > res28.length) {
            res28 = arr28[i]
        }
    }
    return res28;
}
let full28 = ["name", "age", "location"];
console.log(num28(full28));
// 29-masala
function num29(arr29) {
    return arr29.map(srt29 => {
        return srt29.split('').reverse().join('');

    })
}
let res29 = ["hello", "aplle", "full"]
console.log(num29(res29));
// 30-masala
function num30(arr30) {
    let word30 = arr30.split(' ');
    let rev30 = [];
    word30.forEach(arr301 => {
        if (word30.indexOf(arr301) === word30.lastIndexOf(arr301)) {
            rev30.push(arr301)
        }
    })
    return rev30
}
let full30 = "Salom dunyo dunyo qale yaxwi"
console.log(num30(full30));





















