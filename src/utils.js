const BASE_SCREEN_WIDTH = 1024;

export const computeSizeFromWidth = (size, width) => {
    const ratio = width / BASE_SCREEN_WIDTH;
    return {
        width: Math.round(size.width * ratio),
        height: Math.round(size.height * ratio),
        ratio: ratio
    }
}