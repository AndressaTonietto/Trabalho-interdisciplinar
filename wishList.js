const list = [
    {
        img: 'https://news-cdn.softpedia.com/images/news2/Portal-is-The-First-Game-on-Steam-for-Linux-2.jpg',
        title: 'Portal',
        text: 'Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.',
        updated: '9 mins',
    },
    {
        img: "http://image.jeuxvideo.com/medias-md/152667/1526668472-2554-card.jpg",
        title: "Minecraft",
        text: "Minecraft is a game about placing blocks and going on adventures.",
        updated: "20 days",
    },
    {
        img: "https://cdn.discordapp.com/attachments/452148075788763136/460538329931317248/f34fdaf585bb9283ddc1997e4f9353c1c13caf87.jpg",
        title: "Tomb Raider",
        text: "Tomb Raider explora a intensa história da origem de Lara Croft, e sua ascensão de uma jovem mulher a uma sobrevivente experiente.",
        updated: "2 months",
        price: "",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/steam/apps/219740/header.jpg?t=1505326169",
        title: "Don't Starve",
        text: "Don't Starve is an uncompromising wilderness survival game full of science and magic.",
        updated: '2 months',
    },
    {
        img: "https://media.contentapi.ea.com/content/bf/en-us/games/battlefield-1/_global_/_jcr_content/ccm/componentwrapper_0/components/opengraph/ogImage.img.jpg",
        title: "Battlefield 1",
        text: "Battlefield 1 is a first-person shooter video game developed by EA DICE and publushed by Eletronic Arts.",
        updated: "3 months",
    },
    {
        img: "https://res.cloudinary.com/teepublic/image/private/s--M7odt91i--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1478457254/production/designs/784128_1.jpg",
        title: "Rainbow Six",
        text: "Tom Clancy's Rainbow Six is a tactical shooter video game and the first in the Rainbow Six series. It was developed and published by Red Storm Entertainment in 1998 for the PC.",
        updated: "5 months",
    },
    {
        img: "https://cdn.discordapp.com/attachments/452148075788763136/460538705925505034/header.jpg",
        title: "To the moon",
        text: "Uma história sobre a viagem de dois doutores através das memórias de um homem morinbundo, de modo a realizar artificialmente o seu último desejo.",
        updated: "5 months",
    },
    {
        img: "https://cdn.discordapp.com/attachments/452148075788763136/460539674088177664/mirrors-edge-header.jpg",
        title: "Mirror's Edge",
        text: "In a city where information is heavily monitored, agile couries called Runners transport sensitive data away from prying eyes. In this seemingly utopian paradise, a crime has been committed, your sister has been framed and now you are being hunted.",
        updated: "6 months",
    },
    {
        img: "http://signup.citiesskylines.com/assets/meta-og-image-17ddbcd1039dffdb5ada0bfc6a509fea.jpg",
        title: "Cities Skylines",
        text: "Cities Skylines is a modern take on the classic city simulation. Build and manage your city, your are only limited by your imagination!",
        updated: "7 months",
    },
    {
        img: "https://cdn.discordapp.com/attachments/452148075788763136/460543592553906177/hl2-logo.jpg",
        title: "Half-Life 2",
        text: "Half-Life 2 is a first-person shooter video game developed and published by Valve Corporation.",
        updated: "9 months",
    },
    {
        img: "https://vignette.wikia.nocookie.net/assassinscreedbr/images/c/cb/Assassins_creed_2_logo_nosologeeks1.jpg/revision/latest?cb=20100811014738&path-prefix=pt",
        title: "Assassin's Creed II",
        text: "Assassin's Creed II is a 2009 action-adventure video game.",
        updated: "1 year",
    },
];

const updateList = (games) => {
    const wishList = document.querySelector('.wishList');

    let cards = '';

    for (let i = 0; i < games.length; i++) {
        const item = games[i];
        cards +=
            `
        <div class="col-md-4">
            <div class="card border-light mb-4 box-shadow">
                <div class="card-header">
                    <img class="card-img-top" src="${item.img}"
                        alt="${item.title}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.text}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary view" data-title="${item.title}">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary remove">Remove</button>
                    </div>
                    <small class="text-muted">${item.updated}</small>
                </div>
            </div>
        </div>
        `
    }
    wishList.innerHTML = cards;
}

window.onload = updateList(list);

const views = document.querySelectorAll('.view');
const removes = document.querySelectorAll('.remove');

views.forEach(view => {
    view.addEventListener('click', () => {
        const cardTitle = view.dataset.title;
        window.location = `http://google.com/search?q=${cardTitle}`;
    });
})

removes.forEach(remove => {
    remove.addEventListener('click', () => {
        var index = list.indexOf(this);
        if (index > -1) {
            list.splice(index, 1);
            updateList(list);
        }
    })
})

const logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location = 'index.html';
})