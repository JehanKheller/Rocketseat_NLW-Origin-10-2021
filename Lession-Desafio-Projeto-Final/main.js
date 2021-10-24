const userSocialMedia = {
  github: "JehanKheller",
  youtube: "channel/UCCR4VNfuRs4pm7JHSWKgv9Q",
  facebook: "khellerjehan",
  instagram: "jehankheller",
  twitter: "JehanKheller",
  linkedin: "in/jehankheller"
}

function changeSocialMedia() {
  for (let li of socialLink.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`;
  }
}

changeSocialMedia();

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLogin.textContent = data.login;
    userLink.href = data.html_url;
    userAvatar.src = data.avatar_url;
  });
}

getGitHubProfileInfo();