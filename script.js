const data = [
    {
        title: "viaje 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies.",
        url_img: "assets/viajes/viajes-1.jpg"
    },
    {
        title: "viaje 2",
        description: "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, ultricies nec sem id, efficitur convallis arcu.",
        url_img: "assets/viajes/viajes-2.jpg"
    },
    {
        title: "viaje 3",
        description: "Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac.",
        url_img: "assets/viajes/viajes-3.jpg"
    }
];


const cities = [
    "Burgos",
    "Madrid",
    "Barcelona",
    "Valencia",
    "Sevilla",
    "Bilbao",
    "Granada",
    "Málaga",
    "Palma de Mallorca",
    "Alicante",
    "Zaragoza"
];

const recommendedContainer =
    document.getElementById("recommended");


data.forEach((trip) => {

    const card = document.createElement("article");

    card.classList.add("travel-card");

    const image = document.createElement("img");

    image.src = trip.url_img;
    image.alt = trip.title;

    const content = document.createElement("div");

    content.classList.add("travel-card-content");

    const title = document.createElement("h3");

    title.textContent = trip.title;

    const description = document.createElement("p");

    description.textContent = trip.description;

    content.appendChild(title);
    content.appendChild(description);

    card.appendChild(image);
    card.appendChild(content);

    recommendedContainer.appendChild(card);
});

const destinationSelect =
    document.getElementById("destination");


cities.forEach((city) => {

    const option = document.createElement("option");

    option.value = city;
    option.textContent = city;

    destinationSelect.appendChild(option);
});