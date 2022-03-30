export const photoWorkList = [
    {
        title: 'THE_MOMENTS_by_OH_EUN_HO',
        numItems: 16,
    },
    {
        title: 'ONEHUNNNIT20SS',
        numItems: 28,
    },
    {
        title: 'ZOOYORK20FW',
        numItems: 20,
    },
    {
        title: 'ASPARAGUS21SS',
        numItems: 28,
    },
];

export const getPhotoUrlsByIndex = (idx, isSmall=false) => {
    const baseUrl = `${process.env.PUBLIC_URL}/photo/${isSmall ? 'small/' : ''}${photoWorkList[idx].title}/${photoWorkList[idx].title}`

    const photoList = [];
    for (let i = 0; i < photoWorkList[idx].numItems; i++) {
        photoList.push(`${baseUrl}_${i+1}.jpeg`);
    }
    return photoList;
};
