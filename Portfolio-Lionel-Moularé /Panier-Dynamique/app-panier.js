// ALGO 1 Afficher liste de produits dynamique

// DATA + visualisation 

//A Les données : Creer Array de liste de produit (String)
// function initArrayProduct
 
//B Vider le menu UL LI : fonction resetMenu()

//C boucler sur la liste des produit (boucle for array) function addAllToMenu()

//D Sur chaque produit Ajouter ELEMENT GRAPHIQUE addItemToMenu (param name)

//E reserAndInitMenu() // resetMenu + addAllToMenu

var arrayDeProduits = [];

//A
function initArrayProduct(){
    arrayDeProduits.push("IPhone");
    arrayDeProduits.push("IPhone 3");
    arrayDeProduits.push("IPhone 4");
    arrayDeProduits.push("IPhone 4");
    arrayDeProduits.push("IPhone 5");
    arrayDeProduits.push("IPhone 8");
    arrayDeProduits.push("IPhone X");
    arrayDeProduits.push("Ipad Pro 2020");
    console.log("arrayDeProduits",arrayDeProduits)
}
initArrayProduct()

//B

function resetMenu(){
    var ul = document.querySelector('ul');
    var lis = document.querySelectorAll('li');
    for (var i=0 ; i < lis.length; i++) {
        var liCurrent = lis[i];
        ul.removeChild(liCurrent)
    }
}


//C

function addAllToMenu(){
    for (var i =0 ; i<arrayDeProduits.length;i++) {
        var produit = arrayDeProduits[i];
        console.log("produit",produit)
        addItemToMenu(produit)


    }
}

//D

function addItemToMenu(name) {
    var ul = document.querySelector('ul');
    var li = document.createElement("li");
    var a = document.createElement('a');
    a.textContent = name
    a.setAttribute('href','#')
    a.setAttribute('onmouseover',"setInput('"+name+"')")
    a.setAttribute('onclick',"addToCard('"+name+"')")
    li.appendChild(a)
    ul.appendChild(li)
}
//E
function reserAndInitMenu(){
    resetMenu()
    addAllToMenu();
}
reserAndInitMenu();

//ALGO 2 Ajouter des produit au catalogue

//A Creer un champs input 
//B creer un bouton avec EVENT onclick
//C sur event appeler fonction AddItem(name) (le nom vient du input)
//D Ajouter element de le arrayDeProduit
//E call reserAndInitMenu
//F BONUS function checkDoublons (return un boolean true )
// function avec param name a tester / boucle sur produit et test chaque elemement
// si element trouver retur true / sinon false

function addItem(){
    
    var nameProd = document.getElementById("prod-input").value;
    console.log("addItem " + nameProd)
    if (checkDoublons(nameProd)) {
        alert("Ce produit existe deja")
    } else {
        arrayDeProduits.push(nameProd);
    }
   
    console.log("arrayDeProduits",arrayDeProduits)
    reserAndInitMenu();
}

function checkDoublons(produitATester) {
    var isDoublons = false;
    for (var i = 0 ; i < arrayDeProduits.length;i++) {
        var prod = arrayDeProduits[i];
        if (prod === produitATester) {
            isDoublons = true;
        }
    }
    return isDoublons;
}

//ALGO 3 suprimer un produit de notre inventaire

//A ajouter bouton DELETE
//B creer fonction deleteItem(name)
//C paracourir la liste de produit  et supprimer si trouvé
//D BONUS mousseOver item menu SET INPUT

function deleteItem(){
    var nameProd = document.getElementById("prod-input").value;
    for (var i=0; i<arrayDeProduits.length ; i++) {
        var prod = arrayDeProduits[i];
        if (prod === nameProd){
            arrayDeProduits.splice(i,1)
        }
    }
    console.log("arrayDeProduits",arrayDeProduits)
    reserAndInitMenu();
}

function setInput(name){
    console.log("setInput")
    document.getElementById("prod-input").value = name
}

//ALGO PANIER AJOUTER ET VIDER

//A Creer un ARRAY qui correspont a notre panier 
//B afficherTexte Panier 
//C onclick sur les elelement tu menu AddToCard(name)
//D bouton VIDER PANIER 
//E afficher le detail du panier (tous les produit )

var arrayPanier = [];

function afficherTextePanier(){
    if (arrayPanier.length >1) {
        document.getElementById('panier').textContent = "Il y a " + arrayPanier.length + " produits au panier"
    } else {
        document.getElementById('panier').textContent = "Il y a " + arrayPanier.length + " produit au panier"
    }
  
}
afficherTextePanier()

function addToCard (name) {
    arrayPanier.push(name)
    console.log('arrayPanier',arrayPanier)
    afficherTextePanier()
    afficherDetailPanier();
}

function viderPanier(){
    arrayPanier = [];
    afficherTextePanier()
    afficherDetailPanier();
}

function afficherDetailPanier(){
    var detail = "Detail du panier : ";
    for (var i = 0 ; i< arrayPanier.length;i++) {
        detail = detail + " , " + arrayPanier[i];
    }
    document.getElementById('detail-panier').textContent = detail;
}