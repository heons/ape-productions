const distX = 320
const distY = 280
const lineOffstX = 50

const artistInfos = [
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
        id: '2',
        title: 'ADIDAS x EYESMAG',
        category: 'FILM',
        subItems: [
            {
                title: '',
                url: 'https://player.vimeo.com/video/379467383',
            },
        ],
        sampleVideoSrc: 'video/APE_ADIDAS_x_EYESMAG.webm',
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
        sampleVideoSrc: 'video/APE_musinsa adidas_ape.webm',
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
        id: '4',
        title: 'DEMI FASHION FILM',
        category: 'FILM',
        subItems: [
            {
                title: '',
                url: 'https://player.vimeo.com/video/379467842',
            },
        ],
        sampleVideoSrc: 'video/APE_DEMI_FASHION_FILM.webm',
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
        sampleVideoSrc: 'video/APE_JINBOTHESUPERFREAK.webm',
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
        sampleVideoSrc: 'video/APE_KOREAN_PARTYS.webm',
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
                url: 'https://www.youtube.com/embed/G-uMzkrpELE',
            },
        ],
        sampleVideoSrc: 'video/APE_DVWN_BAD_KID_Official_Live.webm',
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
        id: '8',
        title: 'Luc Belaire',
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/443832322',
            },
        ],
        sampleVideoSrc: 'video/APE_Luc_Belaire.webm',
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
        id: '9',
        title: `MOONSUN 'Mon Coeur' Official M/V`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://www.youtube.com/embed/oyvVMVWXIvc',
            },
        ],
        sampleVideoSrc: 'video/APE_MOOSUN_Mon_Coeur_Official.webm',
        initPos: {
            x: 0,
            y: distY * 2
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group2'
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
        sampleVideoSrc: 'video/APE_OWEN_EPISODE_2.webm',
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
        sampleVideoSrc: 'video/APE_OWEN_EPISODE_3_FINAL.webm',
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
        id: '12',
        title: `PUMA CELL ENDURA`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/379467708',
            },
        ],
        sampleVideoSrc: 'video/APE_PUMA_CELL_ENDURA.webm',
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
        id: '13',
        title: `ミニアルバム『#GirlsSpkOut』収録曲「Sorrow」のStudio Live Ver.を公開`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/485249062',
            },
        ],
        sampleVideoSrc: 'video/APE_TAEYEON_LIVE.webm',
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
        id: '14',
        title: `VARPOLLFANCLUB Fashion FIlm`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/379467402',
            },
        ],
        sampleVideoSrc: 'video/APE_VARPOLLFANCLUB_Fashion_FIlm.webm',
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
        id: '15',
        title: `Who Is June One? | Documentary`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://www.youtube.com/embed/wabRZtH7CZo',
            },
        ],
        sampleVideoSrc: 'video/APE_Who_Is_June_One_Documentary.webm',
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
        id: '16',
        title: `ZOO YORK 20FS`,
        category: 'FILM',
        subItems: [
            {
                title: ``,
                url: 'https://player.vimeo.com/video/466787052',
            },
        ],
        sampleVideoSrc: 'video/APE_ZOO_YORK_20FS.webm',
        initPos: {
            x: lineOffstX + distX * 3,
            y: distY * 3
        },
        seedPos: {
            x: 0,
            y: 0
        },
        group: 'group1'
    }
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
        console.log(category.toUpperCase());
        return artistInfos.filter((artist) => artist.category === category.toUpperCase());
    }
}


export const clientCompanyList = [
    'ADIDAS',
    'PUMA',
    'REEBOK',
    'MUSINSA',
    'GQ KOREA',
    'W KOREA',
    'SM ENTERTAINMENT',
    'KOZ ENTERTAINMENT',
    'WOONGJIN THINKBIG',
    'EYESMAG',
    'SOAPSEOUL',
    'UNDER ARMOUR',
    'YVES SAINT LAURANT',
    'GOLDEN GOOSE',
    'MARK GONZALES',
    'MKIT RAIN',
    'ASPARAGUS',
    'ONEHUNNNIT',
    'LABELESS',
    'NEW WAVE RECORDS',
    'NONDEFINE',
    'LUC BELAIRE',
    'THE QOOS',
];

export const clientArtistList = [
    'GLENCHECK',
    'OWEN OVADOZ',
    'KEITH APE',
    'B-FREE',
    'BLOO (블루)',
    'JUNE ONE (GLENCHECK)',
    'TAEYEON (SM ENTERTAINMENT)',
    'MAX CHANGMIN (SM ENTERTAINMENT)',
    'DVWN (KOZ ENTERTAINMENT)',
    'JEREMY QUE$T',
    'DHL',
    'DJ CONAN',
    '한국사람',
    '야화',
    'FS GREEN',
    'JINBO THE SUPERFREAK',
    'LIL CHERRY/JITO MO',
    'MBA EK',
    'BIG ONE',
    'YOUNG COCO',
];

export const photoWorkList = [
    {
        title: 'ONEHUNNNIT20SS',
        numItems: 28,
    },
    {
        title: 'ZOOYORK20FW',
        numItems: 20,
    },
];

export const getPhotoUrlsByIndex = (idx) => {
    const baseUrl = `photo/${photoWorkList[idx].title}/${photoWorkList[idx].title}`

    const photoList = [];
    for (let i = 0; i < photoWorkList[idx].numItems; i++) {
        photoList.push(`${baseUrl}_${i+1}.jpeg`);
    }
    return photoList;
};