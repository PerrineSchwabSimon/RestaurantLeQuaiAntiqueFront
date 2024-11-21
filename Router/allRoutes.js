import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie","La galerie", "/pages/galerie.html", [], "/js/auth/galerie.js"),
    new Route("/carte","La carte", "/pages/gestcarte/carte.html", []),
    new Route("/signin","Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup","Inscription", "/pages/auth/signup.html",["disconnected"], "/js/auth/signup.js"),
    new Route("/account","Mon compte", "/pages/auth/pageaccount.html", ["client", "admin"]),
    new Route("/editPassword","Modifier le mot de passe", "/pages/auth/editpassword.html", ["client", "admin"]),
    new Route("/allresa","Vos réservations", "/pages/reservations/allresa.html", ["client"]),
    new Route("/editresa","Ma réservation", "/pages/reservations/editresa.html", ["client"]),
    new Route("/editcarte","Modifier la carte", "/pages/gestcarte/editcarte.html", ["admin"]),
    ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";

