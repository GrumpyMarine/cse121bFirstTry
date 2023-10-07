/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = "Jason Kiger";
myProfile.photo = "images/jason.png";
myProfile.favoriteFoods = [
  "Pizza",
  "Cheese BUrgers",
  "Lasagna",
  "Salads",
  "Chocolate cake",
];
myProfile.hobbies = [
  "Going to the Beach",
  "Family trips",
  "Camping",
  "Video Games",
  "Classic Cars",
];
myProfile.placesLived = [];

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.push(
  {
    place: "Lancaster, CA",
    length: "23 years",
  },
  {
    place: "Honululu, HI",
    length: "3.5 years",
  },
  {
    place: "Palmdale, CA",
    length: "12 years",
  }
);
myProfile.placesLived.forEach(place => {
  let dt = document.createElement("dt");
  dt.textContent = place.place;

  let dd = document.createElement("dd");
  dd.textContent = place.length;

  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
