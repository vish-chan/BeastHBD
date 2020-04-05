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
        src: getGifPath('fw_5'),
        x: 400,
        y: 200,
    },
    {
        id: 2,
        src: getGifPath('fw_6'),
        x: 0,
        y: 400,
    },

    {
        id: 3,
        src: getGifPath('fw_5'),
        x: 800,
        y: 400,
    },
    {
        id: 4,
        src: getGifPath('fw_3'),
        x: 1200,
        y: 0,
    },
    {
        id: 5,
        src: getGifPath('fw_1'),
        x: 0,
        y: 550,
    },

    {
        id: 6,
        src: getGifPath('fw_6'),
        x: 1400,
        y: 500,
    },

    {
        id: 7,
        src: getGifPath('fw_1'),
        x: 800,
        y: 0,
    },

    {
        id: 15,
        src: getGifPath('fw_1'),
        x: 1000,
        y: 100,
    },

    {
        id: 8,
        src: getGifPath('cat_1'),
        x: 1300,
        y: 500,
    },
    
    {
        id: 9,
        src: getImgPath('cat_5'),
        x: 700,
        y: '100%',
        css: 'arriveBottom'
    },

    {
        id: 10,
        src: getImgPath('modi'),
        x: 700,
        y: '100%',
        css: 'modi'
    },
    {
        id: 11,
        src: getGifPath('nibba'),
        x: 1400,
        y: 0,
        scale: '100%',
    },
    {
        id: 12,
        src: getGifPath('cat_7'),
        x: 0,
        y: 0,
    },

    {
        id: 13,
        src: getGifPath('cake_2'),
        x: 500,
        y: 0,
        scale: '60%',
    },
    
    {
        id: 14,
        src: getGifPath('gift_1'),
        x: 900,
        y: 0,
        scale: '70%',
    },
]

export const GIFTS = [
    {
        id: 0,
        x: 0,
        y:0,
        video: 'video/prag.mp4',
        opened: 'images/prag.PNG'
    },

    {
        id: 1,
        x: 300,
        y:0,
        video: 'video/papa.mp4',
    },

    {
        id: 2,
        x: 600,
        y:0,
        video: 'video/dadi.mp4'
    }
]