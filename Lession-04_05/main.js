// Variáveis let - A variável do tipo let pode ter o valor alterado sempre que necessário.
// Variáveis const - A variável do tipo const não pode ter o valor alterado pois seu valor é constante.

// Estrutura de uma função com variável pré definida.
/*function showMeSomething(text) {
  alert(text)
}

// Chamar função.
showMeSomething();*/

const userSocialMedia = {
  // Dentro do objeto, usa-se : para atribuir valores a uma propriedade.

  github: "JehanKheller",
  //youtube: "channel/UCoBecj_4WQd7u5wb2Dsbv2A/featured",
  youtube: "channel/UCCR4VNfuRs4pm7JHSWKgv9Q",
  facebook: "khellerjehan",
  instagram: "jehankheller",
  twitter: "JehanKheller",
  linkedin: "in/jehankheller"
}

function changeSocialMedia() {
  // DOM - Document Object Model - Utilizado para mapear os objetos do navegador.

  // Dentro do documento html, vou buscar um elemento do tipo ID nomeado.
  // TextContent permite acesso o conteúdo do elemento.

  //document.getElementById('userName').textContent = "Jehan Kheller";

  // O código abaixo representa a mesma função da linha de código acima, porque, o JS entende que um comando que acesse o DOM ou faça algum tipo de alteração é um ID já declarado do Documento HTML. Caso seja utilizado classes ou tag's, o código acima se faz necessário.

  //userName.textContent = "JK";

  for (let li of socialLink.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`;

    //alert(social + " - " + li.children[0].href);
    //alert(li.children[0].href);
    //alert(social);
  }
};

changeSocialMedia();

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`;

  // O comando fetch acessa a URL recebida, capturar os dados que ela receber e disponibilizar para uso.
  // Para utilizar os dados obtidos pelo fetch, utilizamos o then (promisse).
  // Arrow Function - => - É uma forma de contrair as informações e poder utiliza-las sem a necessidade de criar uma segunda função.
  fetch(url)
  .then(response => response.json())
  .then(data => {

    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLogin.textContent = data.login;
    userLink.href = data.html_url;
    userAvatar.src = data.avatar_url;

    //alert(data.login + " - " + data.id + " - " + data.bio);
  });

  //alert(url);
};

getGitHubProfileInfo();