const list = [
    {
        img: 'https://news-cdn.softpedia.com/images/news2/Portal-is-The-First-Game-on-Steam-for-Linux-2.jpg',
        title: 'Portal',
        text: 'Portal™ é um novo jogo para um jogador da Valve. Estabelecido nos misteriosos Laboratórios Aperture Science, Portal é aclamado como um dos novos jogos mais inovadores no horizonte e oferecerá aos jogadores horas de jogabilidade única.',
        updated: ''
    },
    {
        img: "https://vignette.wikia.nocookie.net/youtube/images/7/70/Minecraft-logo.png/revision/latest?cb=20131202211201",
        title: "Minecraft",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content.  This content is a little bit longer.",
        updated: "",
    },
    {
        img: "https://ih1.redbubble.net/image.505938373.2392/flat,800x800,075,f.u5.jpg",
        title: "Fortnite",
        text: "Text",
        updated: "updated",
    },
    {
        img: "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c9/Logo.png/revision/latest?cb=20140324103850",
        title: "Dont't Starve",
        text: 'text',
        updated: '',
    },
    {
        img: "https://s3.amazonaws.com/gamerzarena-app/game-title/30",
        title: "Battlefield 1",
        text: "text",
        updated: "updated",
    },
    {
        img: "https://res.cloudinary.com/teepublic/image/private/s--M7odt91i--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1478457254/production/designs/784128_1.jpg",
        title: "Rainbow Six",
        text: "text",
        updated: "",
    },
    {
        img: "https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/5a/67/02/5a670294-229e-c44d-ded4-22083365fd48/mzl.fqntrgwg.jpg/643x0w.jpg",
        title: "HearthStone",
        text: "text",
        updated: "",
    },
    {
        img: "https://i.imgur.com/kLdd5uN.jpg",
        title: "World of WarCraft",
        text: "text",
        updated: "updated",
    },
    {
        img: "http://signup.citiesskylines.com/assets/meta-og-image-17ddbcd1039dffdb5ada0bfc6a509fea.jpg",
        title: "Cities Skylines",
        text: "text",
        updated: "updated",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Half-Life_2_Logo.svg/2000px-Half-Life_2_Logo.svg.png",
        title: "Half Life 2",
        text: "text",
        updated: "updated",
    },
    {
        img: "https://vignette.wikia.nocookie.net/assassinscreedbr/images/c/cb/Assassins_creed_2_logo_nosologeeks1.jpg/revision/latest?cb=20100811014738&path-prefix=pt",
        title: "Assassin's Creed II",
        text: "text",
        updated: "updated",
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
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="${item.img}"
                    alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.text}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary view" data-title="${item.title}">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary remove">Remove</button>
                        </div>
                        <small class="text-muted">${item.updated}</small>
                    </div>
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
        window.location = `http://google.com/search?q= ${cardTitle}`;
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