window.addEventListener("load", function() {
  const form = document.getElementById("FavoriteForm");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  favoriteInput();
};

function favoriteInput() {
  const favoriteThing1 = document.getElementById("FavoriteThing1").value;
  const favoriteThing2 = document.getElementById("FavoriteThing2").value;
  const favoriteThing3 = document.getElementById("FavoriteThing3").value;

  let favoriteArray = [favoriteThing1, favoriteThing2, favoriteThing3];
  console.log(favoriteArray);
}