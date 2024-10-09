/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/

const title = document.querySelector("h1");


//           Ecoute         type    fonction
// title.addEventListener("click", handleClick);

title.addEventListener("click", handleClick);

function handleClick() {
    console.log("Cliked !");
    title.textContent = `${title.textContent + "A"}`;
    title.style.color = "royalBlue";
}


