const distX = 320
const distY = 280
const lineOffstX = 50

const artistInfos = [
    {
        id: '13',
        title: `SM ENTERTAINMENT`,
        category: 'FILM',
        subItems: [
            {
                title: `Teayeon ‘Sorrow’ Studio Live`,
                url: 'https://player.vimeo.com/video/485249062',
            },
            {
                title: `MAX CHANGMIN 최강창민 | 바람이 분다 (이소라) `,
                url: 'https://www.youtube.com/embed/oRq5rY-1TPg',
            },
        ],
        sampleVideoSrc: 'video/APE_TAEYEON_LIVE.mp4',
        initPos: {
            x: lineOffstX,
            y: distY * 3
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        id: '7',
        title: 'KOZ ENTERTAINMENT',
        category: 'FILM',
        subItems: [
            {
                title: `Dvwn [it's not your fault] Official Visualizer`,
                url: 'https://player.vimeo.com/video/536747837',
            },
            {
                title: `DVWN ‘BAD KID!!!’ Official Live`,
                url: 'https://player.vimeo.com/video/546375592',
            },
            {
                title: `DVWN  ‘Norman Fucking Rockwell’ A Cover Live`,
                url: 'https://player.vimeo.com/video/496160223',
            },
            {
                title: `DVWN ‘free flight’ Official Live`,
                url: 'https://player.vimeo.com/video/512347574',
            },
            {
                title: `DVWN ‘HOME’ Official Live`,
                url: 'https://player.vimeo.com/video/593056163',
            },
        ],
        sampleVideoSrc: 'video/APE_DVWN_BAD_KID_Official_Live.mp4',
        initPos: {
            x: lineOffstX + distX * 2,
            y: distY
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        id: '2',
        title: 'ADIDAS x EYESMAG',
        category: 'FILM',
        subItems: [
            {
                title: '',
                url: 'https://player.vimeo.com/video/379467383',
            },
        ],
        sampleVideoSrc: 'video/APE_ADIDAS_x_EYESMAG.mp4',
        initPos: {
            x: distX * 1,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        id: '3',
        title: 'ADIDAS X MUSINSA (EK, BIG ONE)',
        category: 'FILM',
        subItems: [
            {
                title: '',
                url: 'https://player.vimeo.com/video/406102148',
            },
        ],
        sampleVideoSrc: 'video/APE_musinsa_adidas_ape.mp4',
        initPos: {
            x: distX * 2,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '12',
        title: `PUMA CELL ENDURA`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/379467708',
            },
        ],
        sampleVideoSrc: 'video/APE_PUMA_CELL_ENDURA.mp4',
        initPos: {
            x: distX * 3,
            y: distY * 2
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '16',
        title: `ZOO YORK 20FS`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/466787052',
            },
        ],
        sampleVideoSrc: 'video/APE_ZOO_YORK_20FS.mp4',
        initPos: {
            x: lineOffstX + distX * 3,
            y: distY * 3
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '4',
        title: 'DEMI FASHION FILM',
        category: 'FILM',
        subItems: [
            {
                title: '',
                url: 'https://player.vimeo.com/video/379467842',
            },
        ],
        sampleVideoSrc: 'video/APE_DEMI_FASHION_FILM.mp4',
        initPos: {
            x: distX * 3,
            y: 0
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        id: '8',
        title: 'Luc Belaire',
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/443832322',
            },
        ],
        sampleVideoSrc: 'video/APE_Luc_Belaire.mp4',
        initPos: {
            x: lineOffstX + distX * 3,
            y: distY
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '14',
        title: `VARPOLLFANCLUB Fashion FIlm`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/379467402',
            },
        ],
        sampleVideoSrc: 'video/APE_VARPOLLFANCLUB_Fashion_FIlm.mp4',
        initPos: {
            x: lineOffstX + distX * 1,
            y: distY * 3
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '6',
        title: 'KOREAN PARTYS',
        category: 'FILM',
        subItems: [
            {
                title: 'GQ NIGHT 2019',
                url: 'https://player.vimeo.com/video/384788952',
            },
            {
                title: `CAKESSHOP PARTY`,
                url: 'https://player.vimeo.com/video/381299108',
            },
            {
                title: `SOAPSEOUL CLUB SHOE COVER`,
                url: 'https://player.vimeo.com/video/390325332',
            },
            {
                title: `987 PARTY VIDEO`,
                url: 'https://player.vimeo.com/video/379467324',
            },
            {
                title: `PEACH`,
                url: 'https://player.vimeo.com/video/381098725',
            },
            {
                title: `DHL SPACE DECO`,
                url: 'https://player.vimeo.com/video/418797726',
            },
            {
                title: `DJ FS GREEN`,
                url: 'https://player.vimeo.com/video/381097915',
            },
        ],
        sampleVideoSrc: 'video/APE_KOREAN_PARTYS.mp4',
        initPos: {
            x: lineOffstX + distX,
            y: distY
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '10',
        title: `OWEN OVADOZ - MKIT RAIN ART FILM 2`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/379467620',
            },
        ],
        sampleVideoSrc: 'video/APE_OWEN_EPISODE_2.mp4',
        initPos: {
            x: distX * 1,
            y: distY * 2
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    },
    {
        id: '11',
        title: `OWEN OVADOZ - MKIT RAIN ART FILM 3`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/379467655',
            },
        ],
        sampleVideoSrc: 'video/APE_OWEN_EPISODE_3_FINAL.mp4',
        initPos: {
            x: distX * 2,
            y: distY * 2
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        id: '15',
        title: `Who Is June One? | Documentary`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/580135709',
            },
        ],
        sampleVideoSrc: 'video/APE_Who_Is_June_One_Documentary.mp4',
        initPos: {
            x: lineOffstX + distX * 2,
            y: distY * 3
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
    {
        id: '1',
        title: 'A PICTURES BOOK MAKERS',
        category: 'FILM',
        subItems: [
            {
                title: 'LEE HEE EUN',
                url: 'https://player.vimeo.com/video/493065854',
            },
            {
                title: 'KIM SEUNG YEON',
                url: 'https://player.vimeo.com/video/493066261'
            },
            {
                title: 'KIM JI ANN',
                url: 'https://player.vimeo.com/video/493064042'
            },
        ],
        sampleVideoSrc: 'video/APE_A_pictures_book_makers.mp4',
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
        id: '5',
        title: 'JINBO THE SUPERFREAK',
        category: 'FILM',
        subItems: [
            {
                title: 'JINBO THE SUPERFREAK DOCUMENTARY',
                url: 'https://player.vimeo.com/video/418429463',
            },
            {
                title: `JINBO ‘비싸’ VISUAL FILM`,
                url: 'https://player.vimeo.com/video/394382257',
            },
        ],
        sampleVideoSrc: 'video/APE_JINBOTHESUPERFREAK.mp4',
        initPos: {
            x: lineOffstX,
            y: distY
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
    },
];


export const getInitSampleArtistsInfo = () => {
    return artistInfos.map((artist) => {
        return {
            id: artist.id,
            title: artist.title,
            category: artist.category,
            sampleVideoSrc: artist.sampleVideoSrc,
            initPos: { ...artist.initPos },
            seedPos: { ...artist.seedPos },
            group: artist.group
        }
    });
}

export const getArtistDetailById = (id) => {
    return artistInfos.find((artist) => artist.id === id);
}

export const getArtistDetail = (title) => {
    return artistInfos.find((artist) => artist.title === title);
}

export const getArtistListInCategory = (category) => {
    if (category === undefined) {
        return artistInfos;
        // return [];
    } else {
        return artistInfos.filter((artist) => artist.category === category.toUpperCase());
    }
}
