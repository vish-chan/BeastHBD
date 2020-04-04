const IMG_PATH = 'images';

const getGifPath = (name) => `${IMG_PATH}/${name}.gif`;

const getImgPath = (name) => `${IMG_PATH}/${name}.png`;

export const GIFS = [
    {
        id: 0,
        src: getGifPath('fw_2'),
        x: 0,
        y: 0,
    },

    {
        id: 1,
        src: getGifPath('fw_2'),
        x: 800,
        y: 0,
    },
    {
        id: 2,
        src: getGifPath('fw_4'),
        x: 0,
        y: 400,
    },

    {
        id: 3,
        src: getGifPath('cat_1'),
        x: 1300,
        y: 500,
    },
    
    {
        id: 4,
        src: getImgPath('cat_5'),
        x: 700,
        y: '100%',
        css: 'arriveBottom'
    },

]