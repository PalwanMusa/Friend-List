export const renderFriends = (friends) => {
  const listFriends = document.getElementById("friendList");
  listFriends.innerHTML = "";

  for (const friend of friends) {
    listFriends.innerHTML += `<li class="list-friend">${friend}</li>`;
  }
};
