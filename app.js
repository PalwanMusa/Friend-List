import { renderFriends } from "./utils.js";
const searchInput = $("#searchInput")[0];
const searchButton = $("#searchButton")[0];
const storageItems = localStorage.getItem("friends");
let friendLIst = JSON.parse(storageItems) || [];
const friendsList = document.getElementById("friendList");

renderFriends(friendLIst);
// const friends = $(".list-friend");

document.cookie = "Hello";

searchButton.addEventListener("click", () => {
  if (friendLIst.includes(searchInput.value) || searchInput.value === "") {
    return console.log("Bu Maglumat Ullanyldy");
  }

  friendLIst.push(searchInput.value);
  localStorage.setItem("friends", JSON.stringify(friendLIst));
  searchInput.value = "";
  renderFriends(friendLIst);
});

friendsList.addEventListener("click", (e) => {
  const text = e.target.innerText;
  if (friendLIst.includes(text)) {
    const filteredFriends = friendLIst.filter((t) => t !== text);
    friendLIst = filteredFriends;
    renderFriends(friendLIst);
    localStorage.setItem("friends", JSON.stringify(friendLIst));
  }
});

// for (const friend of friends) {
//   friend.addEventListener("click", (e) => {
//     console.log(e.target.innerText);
//   });
// }

// console.log(searchInput);

// const numbers = [12, 3213, 123, 111111, 231, 231, 23, 1];

// for (const number of numbers) {
//   console.log(number.toString().length);
//1 2 3 belgilimi gorkezya
// }

// const numbers = [12, 3213, 123, 111111, 231, 279, 23, 794, 1];

// for (const number of numbers) {
//   const length = number.toString().length;

//   if (length === 3) {
//     console.log(number);
//   }
// }
