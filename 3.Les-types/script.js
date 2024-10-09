/* 
    En JavaScript, il existe plusieurs types permettant de manipuler des valeurs avec des comportements et des caractéristiques différents.
*/

/* 
    NUMBER : Le type nombre représente un nombre entier ou à virgule entre -9007199254740991 et 9007199254740992.
    Au-delà de ces nombres, les calculs ne sont plus fiables et nous pouvons utiliser un nouveau type bigInt.
*/
let age = 99;
console.log(age);
// typeof indique le type 
console.log(typeof age);

let legume = "carotte"
console.log(typeof legume);



/*
    STRING : Le type représentant des chaînes de caractères.
    On peut utiliser la longueur de la chaîne grâce à length.
    On peut accéder à une lettre avec la bracket notation.
*/
const userName = "Christian"
console.log(userName);
// length = Nombre de charactéres  
console.log(userName.length);
// Pour cibler un caractère précis avec [] braket notation
console.log(userName[0]);
// le 0 correspont au premier indice 
console.log(userName[5]);





/*
    BOOLEAN : Un type représentant une valeur vraie(true) ou fausse(false).
*/
// Pour assigné une variable (is) informe que c'est un boolean 
let isAdult = false;
console.log(isAdult);

/*
    UNDEFINED : Le type représentant une valeur non-définie, typiquement quand une variable n'a pas encore reçue de valeurs.
*/

let price;
console.log(price);


/*
    NULL : Ce type réprente une valeur qui n'existe pas, typiquement quand on essaye d'utliser une variable non créée.
*/

console.log(typeof null);

// C'est un bug historique ne pouvant être fixé

/*
    BIGINT : Ce type représente des nombres très grands.
    Il a été rajouté récemment pour palier à des problèmes assez rares.
*/

console.log(typeof 999999999999999999999999999n);


/*
    SYMBOL : Un symbole est un identifiant unique qui permet d’éviter des collisions entre des valeurs similaires.
    À ce stade de votre apprentissage, il ne vous sert à rien de vous pencher dessus.
*/



/*
    OBJECT : Un objet est un container de propriétés représentant des valeurs.
    On appelle une propriété "méthode" lorsque sa valeur est une fonction.
    C'est un type très important, qu'il faut maîtriser et qui représente une grande partie du fonctionnement du langage JavaScript.
*/


// U objet est représenté par {Propriété(clés)} "valeurs"  
const norway = {
    name: "norway",
    capital: "Oslo",
    populaion: 5400000
};
console.log(norway.capital);
// Accessible avec la dot notation

/*
    FUNCTION : Les fonctions sont ... des objets ! Même si typeof nous donne le "type" function, ce sont bien des objets éxécutables.
    Nous verrons le fonctionnement des fonctions en détail dans ce cours, regardons simplement un exemple classique.
*/

// function  nom (paramétre) 
function getSquare(a) {
    return a * a;
}

// console.log(nom)(argument qui correspont a un paramétre); 

console.log(getSquare(5));


/*
    ARRAY : Les tableaux sont ... également des objets !
    Mais alors, pourquoi les avoir créés ? Afin d'exploiter certaines propriétés et méthodes très pratiques, propres aux tableaux, comme la propriété length, ou les méthodes .map(), .filter(), etc ...
    Nous reviendrons également très en détail sur les tableaux.
*/
const salaries = [1530, 6752, 1633, 725]

// On accède aux élément d'un tableau grâce à l'indice de ce dernier qui commence à 0
// C'est à dire que le premier élément est à l'indice 0.
console.log(salaries[2]);
console.log(typeof salaries);



salaries.forEach(salary => console.log(salary)
);
// forEach est méthode qui appelle une fonction pour chaque élément dans un tableau.