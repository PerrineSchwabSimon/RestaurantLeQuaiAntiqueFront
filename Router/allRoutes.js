import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie","La galerie", "/pages/galerie.html"),
    new Route("/carte","La carte", "/pages/gestcarte/carte.html"),
    new Route("/signin","Connexion", "/pages/auth/signin.html"),
    new Route("/signup","Inscription", "/pages/auth/signup.html"),
    new Route("/account","Mon compte", "/pages/auth/pageaccount.html"),
    new Route("/editPassword","Modifier le mot de passe", "/pages/auth/editpassword.html"),
    new Route("/allresa","Vos réservations", "/pages/reservations/allresa.html"),
    new Route("/editresa","Ma réservation", "/pages/reservations/editresa.html"),
    new Route("/editcarte","Modifier la carte", "/pages/gestcarte/editcarte.html"),
    ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";

