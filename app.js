// les variables à rentrer
var a = document.getElementById("a")
var b = document.getElementById("b")
// console.log(`La valeur de a est de ${a.value}`)
// console.log(`La valeur de b est de ${b.value}`)

// opérateurs
var plus = document.getElementById('plus')
var moins = document.getElementById('moins')
var divise = document.getElementById('divise')
var multip = document.getElementById('multip')
var modulo = document.getElementById('modulo')
var moyenne = document.getElementById('moyenne')

// Réception erreur et/ou résultat
var invalide = document.getElementById('invalide')
var correct = document.getElementById("correct")

// raccourci
var vide = ``;

// Fonction addition
plus.addEventListener('click', (event) => {
    event.preventDefault();
    addition()
  });
const addition = () => {
    if(a.value === vide || b.value === vide )
    {
        invalide.innerHTML = `<p>Ces champs ne devront pas être vide 🙄</p>`
        correct.innerHTML = vide
    }
    
    else{
        correct.innerHTML = `${a.value} + ${b.value}`
        invalide.innerHTML = vide
        var resultat = Math.ceil(a.value) + Math.ceil(b.value)
        correct.innerHTML = `${a.value} + ${b.value} = ${resultat}`
    }
}

// Fonction Soustraction
moins.addEventListener('click', (event) => {
    event.preventDefault();
    soustraction()
  });
const soustraction = () => {
    if(a.value === vide || b.value === vide )
    {
        invalide.innerHTML = `<p>Ces champs ne devront pas être vide 🙄</p>`
        correct.innerHTML = vide
    }
    else{
        correct.innerHTML = `${a.value} - ${b.value}`
        invalide.innerHTML = vide
        var resultat = Math.ceil(a.value) - Math.ceil(b.value)
        correct.innerHTML = `(${a.value}) - (${b.value}) = ${resultat}`
    }
}

// Fonction division
divise.addEventListener('click', (event) => {
    event.preventDefault();
    division()
  });
const division = () => {
    if(a.value === vide || b.value === vide )
    {
        invalide.innerHTML = `<p>Ces champs ne devront pas être vide 🙄</p>`
        correct.innerHTML = vide
    }
    else{
        correct.innerHTML = `${a.value} / ${b.value}`
        invalide.innerHTML = vide
        var resultat = Math.ceil(a.value) / Math.ceil(b.value)
        correct.innerHTML = `${a.value} / ${b.value} = ${resultat}`
    }
}

// Fonction multiplication
multip.addEventListener('click', (event) => {
    event.preventDefault();
    multiplication()
  });
const multiplication = () => {
    if(a.value === vide || b.value === vide )
    {
        invalide.innerHTML = `<p>Ces champs ne devront pas être vide 🙄</p>`
        correct.innerHTML = vide
    }
    else{
        correct.innerHTML = `${a.value} * ${b.value}`
        invalide.innerHTML = vide
        var resultat = Math.ceil(a.value) * Math.ceil(b.value)
        correct.innerHTML = `(${a.value}) * (${b.value}) = ${resultat}`
    }
}

// Fonction modulo
modulo.addEventListener('click', (event) => {
    event.preventDefault();
    moduloCalcul()
  });
const moduloCalcul = () => {
    if(a.value === vide || b.value === vide )
    {
        invalide.innerHTML = `<p>Ces champs ne devront pas être vide 🙄</p>`
        correct.innerHTML = vide
    }
    else{
        correct.innerHTML = `${a.value} % ${b.value}`
        invalide.innerHTML = vide
        var resultat = Math.ceil(a.value) % Math.ceil(b.value)
        correct.innerHTML = `(${a.value}) % (${b.value}) = ${resultat}`
    }
}

// Fonction moyenne
moyenne.addEventListener('click', (event) => {
    event.preventDefault();
    moyenneCalcul()
  });
const moyenneCalcul = () => {
    if(a.value === vide || b.value === vide )
    {
        invalide.innerHTML = `<p>Ces champs ne devront pas être vide 🙄</p>`
        correct.innerHTML = vide
    }
    
    else{
        correct.innerHTML = `${a.value} + ${b.value}/2`
        invalide.innerHTML = vide
        var resultat = (Math.ceil(a.value) + Math.ceil(b.value))/2
        correct.innerHTML = `(${a.value} + ${b.value})/2 = ${resultat}`
    }
}