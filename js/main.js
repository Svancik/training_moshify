// Níže je konstanta všechny vyselektované elementy v documentu (document = stránka)
// Dále říkáme že pro každý item, který je třídy collapsible přidáváme event, kdy při kliknutí se implementuje třída collapsible-expanded
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);