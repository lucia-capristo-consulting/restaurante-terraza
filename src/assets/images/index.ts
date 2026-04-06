const allImages = import.meta.glob<string>(
  "./**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

function img(path: string): string {
  return allImages[path] ?? "";
}

// Hero images
export const heroHome = img("./hero/home.jpg");
export const heroMenu = img("./hero/menu.jpg");
export const heroAbout = img("./hero/about.jpg");
export const heroReservations = img("./hero/reservations.jpg");
export const heroContact = img("./hero/contact.jpg");
export const heroEvents = img("./hero/events.jpg");

// Dishes
export const paellaMariscos = img("./dishes/paella-mariscos.jpg");
export const lubinaSal = img("./dishes/lubina-sal.jpg");
export const cremaCatalana = img("./dishes/crema-catalana.jpg");
export const carpaccioPulpo = img("./dishes/carpaccio-pulpo.jpg");
export const escalivada = img("./dishes/escalivada.jpg");
export const gazpacho = img("./dishes/gazpacho.jpg");
export const croquetas = img("./dishes/croquetas.jpg");
export const arrozNegro = img("./dishes/arroz-negro.jpg");
export const arrozBogavante = img("./dishes/arroz-bogavante.jpg");
export const fideua = img("./dishes/fideua.jpg");
export const lubinaMenu = img("./dishes/lubina-menu.jpg");
export const doradaPlancha = img("./dishes/dorada-plancha.jpg");
export const bacalao = img("./dishes/bacalao.jpg");
export const solomillo = img("./dishes/solomillo.jpg");
export const secretoIberico = img("./dishes/secreto-iberico.jpg");
export const carrillera = img("./dishes/carrillera.jpg");
export const tartaSantiago = img("./dishes/tarta-santiago.jpg");
export const coulant = img("./dishes/coulant.jpg");
export const sorbeteLimon = img("./dishes/sorbete-limon.jpg");

// Gallery
export const gallery1Terraza = img("./gallery/1-terraza.jpg");
export const gallery2Terraza = img("./gallery/2-terraza.jpg");
export const gallery3Barra = img("./gallery/3-barra.jpg");
export const gallery4Salon = img("./gallery/4-salon.jpg");
export const galleryEvento1 = img("./gallery/evento-1.jpg");
export const galleryEvento2 = img("./gallery/evento-2.jpg");
export const galleryEvento3 = img("./gallery/evento-3.jpg");
export const galleryEvento4 = img("./gallery/evento-4.jpg");
export const galleryEvento5 = img("./gallery/evento-5.jpg");
export const galleryEvento6 = img("./gallery/evento-6.jpg");

// Team
export const teamChef = img("./team/chef.jpg");
export const teamSommelier = img("./team/sommelier.jpg");
