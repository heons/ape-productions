const artistInfos = [
    {
        title: 'A PICTURES BOOK MAKERS',
        category: 'FILMS',
        subItems: [
            {
                title: 'LEE HEE EUN',
                url: 'https://vimeo.com/manage/videos/493065854',
            },
            {
                title: 'KIM SEUNG YEON',
                url: 'https://vimeo.com/manage/videos/493066261'
            },
            {
                title: 'KIM JI ANN',
                url: 'https://vimeo.com/manage/videos/493064042'
            },
        ],
        sampleVideoSrc: 'video/APE_A_pictures_book_makers.webm',
        initPos: {
            x: 0,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        title: 'ADIDAS x EYESMAG',
        category: 'FILMS',
        subItems: [
            {
                title: '',
                url: 'https://vimeo.com/manage/videos/379467383',
            },
        ],
        sampleVideoSrc: 'video/APE_ADIDAS_x_EYESMAG.webm',
        initPos: {
            x: 300,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        title: 'ADIDAS X MUSINSA (EK, BIG ONE)',
        category: 'FILMS',
        subItems: [
            {
                title: '',
                url: 'https://vimeo.com/manage/videos/406102148',
            },
        ],
        sampleVideoSrc: 'video/APE_musinsa adidas_ape.webm',
        initPos: {
            x: 600,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        title: 'DEMI FASHION FILM',
        category: 'FILMS',
        subItems: [
            {
                title: '',
                url: 'https://vimeo.com/manage/videos/379467842',
            },
        ],
        sampleVideoSrc: 'video/APE_DEMI_FASHION_FILM.webm',
        initPos: {
            x: 900,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        title: 'JINBO THE SUPERFREAK',
        category: 'FILMS',
        subItems: [
            {
                title: 'JINBO THE SUPERFREAK DOCUMENTARY',
                url: 'https://vimeo.com/manage/videos/418429463',
            },
            {
                title: `JINBO ‘비싸’ VISUAL FILM`,
                url: 'https://vimeo.com/manage/videos/394382257',
            },
        ],
        sampleVideoSrc: 'video/APE_JINBOTHESUPERFREAK.webm',
        initPos: {
            x: 100,
            y: 250
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    }
];


export const getInitSampleArtistsInfo = () => {
    return artistInfos.map((artist) => {
        return {
            title: artist.title,
            category: artist.category,
            sampleVideoSrc: artist.sampleVideoSrc,
            initPos: { ...artist.initPos },
            seedPos: { ...artist.seedPos },
            group: artist.group
        }
    });
}

