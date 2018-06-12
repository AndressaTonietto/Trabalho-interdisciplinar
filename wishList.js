const list = [
    {
        img: 'https://news-cdn.softpedia.com/images/news2/Portal-is-The-First-Game-on-Steam-for-Linux-2.jpg',
        title: 'Portal',
        text: 'Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.',
        updated: '9 mins',
        price: "",
    },
    {
        img: "http://image.jeuxvideo.com/medias-md/152667/1526668472-2554-card.jpg",
        title: "Minecraft",
        text: "Minecraft is a game about placing blocks and going on adventures.",
        updated: "20 days",
        price: "",
    },
    {
        img: "https://ih1.redbubble.net/image.505938373.2392/flat,800x800,075,f.u5.jpg",
        title: "Fortnite",
        text: "Fortnite is a co-op sandbox survival game developed by Epic Games and People Can fly and published by Epic Games.",
        updated: "2 months",
        price: "",
    },
    {
        img: "https://steamcdn-a.akamaihd.net/steam/apps/219740/header.jpg?t=1505326169",
        title: "Don't Starve",
        text: "Don't Starve is an uncompromising wilderness survival game full of science and magic.",
        updated: '2 months',
        price: "",
    },
    {
        img: "https://media.contentapi.ea.com/content/bf/en-us/games/battlefield-1/_global_/_jcr_content/ccm/componentwrapper_0/components/opengraph/ogImage.img.jpg",
        title: "Battlefield 1",
        text: "Battlefield 1 is a first-person shooter video game developed by EA DICE and publushed by Eletronic Arts.",
        updated: "3 months",
        price: "",
    },
    {
        img: "https://res.cloudinary.com/teepublic/image/private/s--M7odt91i--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1478457254/production/designs/784128_1.jpg",
        title: "Rainbow Six",
        text: "",
        updated: "5 months",
        price: "",
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/5a/67/02/5a670294-229e-c44d-ded4-22083365fd48/mzl.fqntrgwg.jpg/643x0w.jpg",
        title: "HearthStone",
        text: "Sheathe your sword, draw your deck, and get ready for Hearthstone - the fast-paced strategy card game that's easy to learn and massively fun.",
        updated: "5 months",
        price: "",
    },
    {
        img: "https://i.imgur.com/kLdd5uN.jpg",
        title: "World of WarCraft",
        text: "WoW is a massively multiplayer online role-playing game.",
        updated: "6 months",
        price: "",
    },
    {
        img: "http://signup.citiesskylines.com/assets/meta-og-image-17ddbcd1039dffdb5ada0bfc6a509fea.jpg",
        title: "Cities Skylines",
        text: "Cities Skylines is a modern take on the classic city simulation. Build and manage your city, your are only limited by your imagination!",
        updated: "7 months",
        price: "",
    },
    {
        img: "https://www.dsogaming.com/wp-content/uploads/2017/08/20170322213600_1.jpg",
        title: "Half-Life 2",
        text: "Half-Life 2 is a first-person shooter video game developed and published by Valve Corporation.",
        updated: "9 months",
        price: "",
    },
    {
        img: "https://vignette.wikia.nocookie.net/assassinscreedbr/images/c/cb/Assassins_creed_2_logo_nosologeeks1.jpg/revision/latest?cb=20100811014738&path-prefix=pt",
        title: "Assassin's Creed II",
        text: "Assassin's Creed II is a 2009 action-adventure video game.",
        updated: "1 year",
        price: "",
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
                    <p class="card-text">Price: ${item.price}</p>
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