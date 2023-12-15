window.addEventListener("load", function() {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.display = "none";
});

function restartAnimation() {
  var image = document.getElementById('animated-image');
  image.style.animation = 'none';
  void image.offsetWidth;
  image.style.animation = 'bounce 2s ease-in-out';
}
  function chargerFichierTexte(chemin, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", chemin, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();
  }

  function choisirMotAuHasard(texte) {
    var mots = texte.split('\n');
    var motAleatoire = mots[Math.floor(Math.random() * mots.length)];
    return motAleatoire;
  }

  function afficherMotAuHasard(elementId) {
    chargerFichierTexte('noms.txt', function (texte) {
      var mot = choisirMotAuHasard(texte);
      document.getElementById(elementId).textContent = mot;
    });
  }

  window.addEventListener('load', function () {
    afficherMotAuHasard('mot-au-hasard');
    afficherMotAuHasard('mot-au-hasard2');
  });

  function relancerTirage() {
    afficherMotAuHasard('mot-au-hasard');
    afficherMotAuHasard('mot-au-hasard2');
  }
