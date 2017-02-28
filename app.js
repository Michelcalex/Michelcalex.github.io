window.addEventListener('load', function() {
    let shiftWindow = function() { scrollBy(0, -75) };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);

    //------Portfolio Samples --------------------------
    let portfolioSamples = [
        {
            link: 'https://drumcircle1.herokuapp.com/', 
            img: 'assets/drum-circle.png', 
            alt: 'Drum Circle', 
            name: 'Drum Circle', 
            description: 'An open source library of drum samples where users can browse through the database, save their favorite sounds, and play them by building their own customized drum kits.', 
            tech: 'Angular, Angular Material, Gulp, Sass, Dragula'
        },
        {
            link: 'https://github.com/Michelcalex/lemonade-stand',
            img: 'assets/lemonaid.png', 
            alt: 'Queen City\'s Lemonaid', 
            name: 'Queen City\'s Lemonaid', 
            description: 'A simplistic version of the online game, Lemonade stand, where each player is responsible for managing their stand\'s reputation and aiming to make the most profit', 
            tech: 'Angula, Gulp, Sass, AJAX'
        },
        {
            link: 'https://github.com/Michelcalex/movie-emporeum', 
            img: 'assets/scene-that.png', 
            alt: 'Scene That', 
            name: 'Scene That', 
            description: 'Movie rating application using a movie API.', 
            tech: 'Angula, Gulp, Foundation, Sass, REST API'
        },
        {
            link: 'https://github.com/Michelcalex/menu-app', 
            img: 'assets/nomnom.png', 
            alt: 'Nom Nom', 
            name: 'Nom Nom', 
            description: 'Menu application that allows you to filter through the menu and add food items.', 
            tech: 'jQuery, Moustache, Foundation, Sass'
        },
        ];

    let parent = document.querySelector('#portfolio-grid');
    for(let i=0; i < portfolioSamples.length; i++) {

        let portfolioContent = document.createElement('li');
        portfolioContent.innerHTML = Mustache.render (
            document.querySelector('#portfolio-template').innerHTML,
            { 
                sampleLink: portfolioSamples[i].link, 
                sampleImage: portfolioSamples[i].img,
                sampleAlt: portfolioSamples[i].alt, 
                sampleName: portfolioSamples[i].name, 
                sampleDescription: portfolioSamples[i].description, 
                sampleTech: portfolioSamples[i].tech, 
             }
        );
        parent.appendChild(portfolioContent);
    }   


//------Contact info --------------------------

let contactInfo = [
    {
        link: '#',
        img: 'assets/location.png', 
        alt: 'location',
        description: 'Charlotte, NC',
    },
    {
        link: '#',
        img: 'assets/mail.png', 
        alt: 'email',
        description: 'Michelcalex@gmail.com',
    },
    {
        link: 'https://github.com/michelcalex',
        img: 'assets/github.png', 
        alt: 'github',
        description: 'github.com/michelcalex',
    },
    {   
        link: 'https://www.linkedin.com/in/michelcalex/',
        img: 'assets/linkedin.png', 
        alt: 'linkedin',
        description: 'linkedin.com/in/michelcalex',
    },
    {   
        link: 'assets/LexiMichelResume2017.pdf',
        img: 'assets/resume.png', 
        alt: 'Lexi Michel\'s resume',
        description: 'My history',
    },
];

let contactParent = document.querySelector('#info-container');
    for(let i=0; i < contactInfo.length; i++) {

        let contactContent = document.createElement('div');
        contactContent.innerHTML = Mustache.render (
            document.querySelector('#contact-template').innerHTML,
            { 
                contactLink: contactInfo[i].link, 
                contactImage: contactInfo[i].img,
                contactAlt: contactInfo[i].alt, 
                contactInfo: contactInfo[i].description, 
             }
        );
        contactParent.appendChild(contactContent);
    }   
});
