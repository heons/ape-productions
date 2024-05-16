const distX = 320;
const distY = 280;
const lineOffstX = 50;

export const artistInfos = [
  {
    title: "THE BOYZ",
    subItems: [
      {
        title: "THE BOYZ(더보이즈) Special Unit ‘Honey’ MV",
        url: "https://www.youtube.com/embed/JEqSqfAXN4g",
      },
    ],
  },
  {
    title: "PLEDIS ENTERTAINMENT",
    subItems: [
      {
        title: "BAEKHO&BIGONE 'Love or Die' Official MV",
        url: "https://www.youtube.com/embed/zB8u4jkJMYI",
      },
      {
        title: "VERNON 'Black Eye' Official MV",
        url: "https://www.youtube.com/embed/vPQasPdd6fI",
      },
      {
        title: "[SPECIAL VIDEO] VERNON - 'Black Eye' Band Live Session",
        url: "https://www.youtube.com/embed/AJIzboxLYKk",
      },
    ],
  },
  {
    title: "AOMG",
    subItems: [
      {
        title: "DJ Wegun - 'Ground Zero (Feat. 펀치넬로) Official Music Video",
        url: "https://www.youtube.com/embed/zhIlt7qdsV8",
      },
    ],
  },
  {
    title: "YOU.WILL.KNOVV",
    subItems: [
      {
        title: "Tabber - Being (feat. 백예린) (Official Video)",
        url: "https://www.youtube.com/embed/JWqb9mSTnD8",
      },
    ],
  },
  {
    title: "The dial music",
    subItems: [
      {
        title: "BIGONE (빅원) - Pop Punk (feat. Dive, 도한세)",
        url: "https://www.youtube.com/embed/6-7Jr0WHIyE",
      },
    ],
  },
  {
    title: `SM ENTERTAINMENT`,
    subItems: [
      {
        title: `MAX CHANGMIN 최강창민 | 바람이 분다 (이소라)`,
        url: "https://www.youtube.com/embed/oRq5rY-1TPg",
      },
      {
        title: `MAX CHANMIN - TIME WALKING ON MEMORES(Official Live Video)`,
        url: "https://player.vimeo.com/video/605380106",
      },
    ],
    sampleVideoSrc: "video/APE_TAEYEON_LIVE.mp4",
    initPos: {
      x: lineOffstX,
      y: distY * 3,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "KOZ ENTERTAINMENT",
    subItems: [
      {
        title: `Dvwn [it's not your fault] Official Visualizer`,
        url: "https://player.vimeo.com/video/536747837",
      },
      {
        title: `DVWN ‘BAD KID!!!’ Official Live`,
        url: "https://player.vimeo.com/video/546375592",
      },
      {
        title: `DVWN ‘free flight’ Official Live`,
        url: "https://player.vimeo.com/video/512347574",
      },
      {
        title: `DVWN ‘HOME’ Official Live`,
        url: "https://player.vimeo.com/video/593056163",
      },
    ],
    sampleVideoSrc: "video/APE_DVWN_BAD_KID_Official_Live.mp4",
    initPos: {
      x: lineOffstX + distX * 2,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: `Glen Check`,
    subItems: [
      {
        title: `I Feel Like Ridin Slow`,
        url: "https://www.youtube.com/embed/bdKnGhK1ySI",
      },
      {
        title: `Blush (ft. sokodomo)`,
        url: "https://www.youtube.com/embed/uCGpI6Vt4c4",
      },
      {
        title: `Sins`,
        url: "https://www.youtube.com/embed/6pFG-VYxr9Q",
      },
      {
        title: `4ever`,
        url: "https://www.youtube.com/embed/GeTz0DkHZvo",
      },
      {
        title: `One Right Now (The Weekend, Post Malone)`,
        url: "https://www.youtube.com/embed/7DlFWVzZMYU",
      },
    ],
    sampleVideoSrc: "video/APE_sins.mp4",
    initPos: {
      x: 0,
      y: 0,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: `GENNEO`,
    subItems: [
      {
        title: `Stay`,
        url: "https://www.youtube.com/embed/3HE5ArkOSZ0",
      },
    ],
    // sampleVideoSrc: 'none',
    initPos: {
      x: 0,
      y: 0,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "ADIDAS x MUSINSA (EK, BIG ONE)",
    subItems: [],
    sampleVideoSrc: "video/APE_musinsa_adidas_ape.mp4",
    initPos: {
      x: distX * 2,
      y: 0,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "Luc Belaire",
    subItems: [],
    sampleVideoSrc: "video/APE_Luc_Belaire.mp4",
    initPos: {
      x: lineOffstX + distX * 3,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "KOREAN PARTYS",
    subItems: [
      {
        title: "GQ NIGHT 2019",
        url: "https://player.vimeo.com/video/384788952",
      },
      {
        title: `SOAPSEOUL CLUB SHOE COVER`,
        url: "https://player.vimeo.com/video/390325332",
      },
      {
        title: `DHL SPACE DECO`,
        url: "https://player.vimeo.com/video/418797726",
      },
    ],
    sampleVideoSrc: "video/APE_KOREAN_PARTYS.mp4",
    initPos: {
      x: lineOffstX + distX,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: `Who Is June One? | Documentary`,
    subItems: [
      {
        title: ``,
        url: "https://player.vimeo.com/video/580135709",
      },
    ],
    sampleVideoSrc: "video/APE_Who_Is_June_One_Documentary.mp4",
    initPos: {
      x: lineOffstX + distX * 2,
      y: distY * 3,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "A PICTURES BOOK MAKERS",
    subItems: [],
    sampleVideoSrc: "video/APE_A_pictures_book_makers.mp4",
    initPos: {
      x: 0,
      y: 0,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "JINBO THE SUPERFREAK",
    subItems: [
      {
        title: "JINBO THE SUPERFREAK DOCUMENTARY",
        url: "https://player.vimeo.com/video/418429463",
      },
      {
        title: `JINBO ‘비싸’ VISUAL FILM`,
        url: "https://player.vimeo.com/video/394382257",
      },
    ],
    sampleVideoSrc: "video/APE_JINBOTHESUPERFREAK.mp4",
    initPos: {
      x: lineOffstX,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "BLEACH DIARIES",
    subItems: [
      {
        title: "BLEACH DIARIES #1 - JUNE ONE",
        url: "https://www.youtube.com/embed/zzTUQx6b4aY",
      },
      {
        title: "BLEACH DIARIES #2 Hyuk Jun",
        url: "https://www.youtube.com/embed/mdDJJYyC2Vc",
      },
    ],
    // sampleVideoSrc: 'none',
    initPos: {
      x: lineOffstX,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "TAMAGO PRODUTION",
    subItems: [
      {
        title: "QWER 'Discord (디스코드)' Official MV",
        url: "https://www.youtube.com/embed/WGm2HmXeeRI",
      },
    ],
    // sampleVideoSrc: 'none',
    initPos: {
      x: lineOffstX,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "CONVERSE X KASINA",
    subItems: [
      {
        title: "CONVERSE X KASINA",
        url: "https://player.vimeo.com/video/944704181",
      },
    ],
    // sampleVideoSrc: 'none',
    initPos: {
      x: lineOffstX,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
  {
    title: "VANS BY RAREBIRTH",
    subItems: [
      {
        title: "VANS BY RAREBIRTH",
        url: "https://player.vimeo.com/video/944410387",
      },
    ],
    // sampleVideoSrc: 'none',
    initPos: {
      x: lineOffstX,
      y: distY,
    },
    seedPos: {
      x: 0,
      y: 0,
    },
  },
];

// Init Ids
let cntId = 1;
artistInfos.forEach((item) => (item.id = `${cntId++}`));

export const getInitSampleArtistsInfo = () => {
  const artistsWithSampleVideo = artistInfos.filter(
    (artist) => artist.sampleVideoSrc
  );
  let sampleId = 1;
  return artistsWithSampleVideo.map((artist) => {
    return {
      id: artist.id,
      sampleId: sampleId++,
      title: artist.title,
      category: artist.category,
      sampleVideoSrc: artist.sampleVideoSrc,
      initPos: { ...artist.initPos },
      seedPos: { ...artist.seedPos },
      hasDetailPage: artist.subItems.length > 0 ? true : false,
    };
  });
};

export const getArtistDetailById = (id) => {
  return artistInfos.find((artist) => artist.id === id);
};

// No use
export const getArtistDetail = (title) => {
  return artistInfos.find((artist) => artist.title === title);
};

// No use
export const getArtistListInCategory = (category) => {
  if (category === undefined) {
    return artistInfos;
    // return [];
  } else {
    return artistInfos.filter(
      (artist) => artist.category === category.toUpperCase()
    );
  }
};
