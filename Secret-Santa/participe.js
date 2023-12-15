function mettreAJourNombreParticipants() {
  var nombreParticipants = document.getElementById('listePrenoms').getElementsByTagName('li').length;
  document.getElementById('nombreParticipants').textContent = nombreParticipants;
}

function ajouterPrenom() {
  var prenom = document.getElementById('prenomInput').value;

  if (prenom !== '') {
    var nouvelElement = document.createElement('li');
    nouvelElement.textContent = prenom;

    document.getElementById('listePrenoms').appendChild(nouvelElement);
    document.getElementById('prenomInput').value = '';

    mettreAJourNombreParticipants();
  } else {
    alert('Veuillez entrer un prénom valide.');
  }
}
function tirerAuSort() {
  var listePrenoms = document.getElementById('listePrenoms').getElementsByTagName('li');

  if (listePrenoms.length > 1) {
    var indexOffrant = Math.floor(Math.random() * listePrenoms.length);
    var indexRecevant = Math.floor(Math.random() * listePrenoms.length);

    while (indexRecevant === indexOffrant) {
      indexRecevant = Math.floor(Math.random() * listePrenoms.length);
    }

    var nomOffrant = listePrenoms[indexOffrant].textContent;
    var nomRecevant = listePrenoms[indexRecevant].textContent;

    document.getElementById('resultatTirage').textContent = "Le prénom tiré au sort est : " + nomRecevant;
    document.getElementById('offreCadeau').textContent = nomOffrant + " offre un cadeau à " + nomRecevant;
  } else {
    document.getElementById('resultatTirage').textContent = "Ajoutez au moins deux prénoms pour pouvoir effectuer un tirage au sort.";
    document.getElementById('offreCadeau').textContent = "";
  }
}
