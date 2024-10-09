/* 
    Les chaînes de caractères, ou string en anglais, permettent de représenter du texte.
*/

/* 
    1. Intégrer des expressions dans des chaînes de caractères.
*/

let money = 457;

/* Ancienne façon de faire */
/* Compliqué de faire des retours à la ligne \n, d'intégrer des expressions, échapper les apostrophes/guillemets, etc... */

const unserAccountInfo1 = "Il vous reste " + money + " euros sur votre compte.";
console.log(unserAccountInfo1);


/* "Nouvelle" façon de faire (2015+), cela permet de prendre en compte les retours à la ligne, d'éviter d'échapper les apostrophes, et facilite grandement l'intégration d'expression dans les chaînes.  */
/* On peut faire des calculs et appeler des fonctions dans les accolades. */


// Templata litterals 

const unserAccountInfo2 = `Il vous reste ${money + 10} euros sur le compte.`
console.log(unserAccountInfo2);

/* 
    2. La concaténation, ou l'assemblage de plusieurs chaînes.
*/

const chunk1 = "abc";
const chunk2 = "def";
const chunk3 = chunk1 + chunk2

console.log(chunk3);

/* 
    3. Quelques astuces : Sélectionner un caractère, retourner la longueur, etc...
*/

const userName = "Léonard de Vinci";
console.log(userName.length);        /*nombre de caractères*/
console.log(userName[2]);           /*lettre a la position [x] */
console.log(userName.indexOf("d")); /* ou ce trouve la lettre */



