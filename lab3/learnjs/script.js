'use strict';

// //basics
// alert("Я JavaScript!");

// /*
// this is another commentary
// */





// // variables
// ____________________________________
// let user = 'John';
// let age = 25;
// let message = 'Hello';
// let message_copy = message;
// alert(message_copy);

// const myBirthday = '18.04.1982';
// // myBirthday = '01.01.2001'; ошибка, константу нельзя перезаписать!

// let name = 'John';
// let admin = name;
// alert(admin);




// // data types
// ____________________________________
// let n = 123;
// n = 123.45;
// alert(-1 / 0);
// alert('a' / 1);
// alert(NaN + 1);
// alert(NaN ** 0);
// // символ "n" в конце означает, что это BigInt
// const bigInt = 1234567890123456789012345678901234567890n;
// let userName = 'Ivan'
// alert(`My name is ${userName}`)
// alert(`1 + 2 equals to ${1 + 2}`)
// let nameFieldChecked = true; // да, поле отмечено
// let ageFieldChecked = false; // нет, поле не отмечено
// let isGreater = 4 > 1;
// alert( isGreater );





// //type casting
// ____________________________________
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// value += 'ly'
// alert(value)
// alert(typeof value); // string
// alert("6" / "2")

// let text = "1234"
// text = Number(text)
// alert(typeof text)

// let num = "a"
// num = Number(num)
// alert(num)

// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("Привет!") ); // true
// alert( Boolean("") ); // false




// basic operators 
// ____________________________________
// alert(2 + 2 + '1' ); // будет "41", а не "221"
// alert( 6 - '2' ); // 4, '2' приводится к числу
// alert( '6' / '2' ); // 3, оба операнда приводятся к числам

// alert(typeof +"1")
// alert(+true)

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0

// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2

// let counter = 1;
// let a = counter++; // (*) меняем ++counter на counter++

// alert(a); // 1

// let a = (1 + 2, 3 + 4);

// alert( a ); // 7 (результат вычисления 3 + 4)
// // три операции в одной строке
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     ...
//    }




//comparison operators
// ____________________________________
// alert('a' > -10000)
// alert( null === undefined ); // false
// alert( null == undefined ); // true
// alert(null == 0)

// 5 > 4 → true
// "ананас" > "яблоко" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false



// conditional statements
// ____________________________________

// let year = prompt("What is the current year");
// if (+year === 2025) alert("Yep");

// let age = 20
// let result = (age > 18) ? true : false;

// if("0") alert(true)


//logic operators
// ____________________________________
// alert(null || 2 || undefined);
// alert( alert(1) || 2 || alert(3) );
// alert( 1 && null && 2 );
// alert( alert(1) && alert(2) );
// alert( null || 2 && 3 || 4 );

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );


// let user;
// alert(user ?? "Аноним");

// let num1 = 10,
//     num2 = 20,
//     result;

// result ??= (num1 ?? num2);

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }



//cycles

// let i = 0;
// while(i !== 3){
//     alert(i++);
// }

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)
  
//       // сделать что-нибудь со значениями...
//     }
//   }
  
//   alert('Готово!');

// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 2; i <= 10; i += 2){
//     alert(i)
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0
// while(3 > i){
//     alert(`number ${i++}!`)
// }