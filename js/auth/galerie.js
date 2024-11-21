const galerieImage = document.getElementById("allImages");

//Récuperer les informations des images
let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')"/>';
let imgSource = "../Images/food-1050813_1280.jpg";

let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage;


function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return ` <div class="col p-3">
                    <div class="image-card text-light">
                        <img src="${urlImage}" class="rounded w-100"/>
                        <p class="titre-image">${titre}</p>
                        <div data-show="admin" class="action-image-buttons">
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>`;
}