const BASE_SCREEN_WIDTH = 1024;

export const computeSizeFromWidth = (size, width) => {
    const ratio = width / BASE_SCREEN_WIDTH;
    return {
        width: Math.round(size.width * ratio),
        height: Math.round(size.height * ratio),
        ratio: ratio
    }
}

export const paddingBottomByRatio = {
    '1:1': '100%',
    '16:9': '56.25%',
    '4:3': '75%',
    '3:2': '66.66%',
    '8:5': '62.5%',
};