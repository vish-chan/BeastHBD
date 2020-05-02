const IMG_PATH = 'images';

const getGifPath = (name) => `${IMG_PATH}/${name}.gif`;

const getImgPath = (name) => `${IMG_PATH}/${name}.png`;

const getOpenedImgPath = (name) => `${IMG_PATH}/opened/${name}.png`;

export const RESOURCE = [
    getGifPath("back"),
    getGifPath("cake_2"),
    getGifPath("cat_1"),
    getImgPath("cat_5"),
    getGifPath("cat_7"),
    getGifPath("download"),
    getGifPath("fw_1"),
    getGifPath("fw_2"),
    getGifPath("fw_3"),
    getGifPath("fw_4"),
    getGifPath("fw_5"),
    getGifPath("fw_6"),
    getGifPath("gift_1"),
    getImgPath("gift_btn"),
    getImgPath("modi"),
    getGifPath("nibba"),
    getOpenedImgPath("Anika"),
    getOpenedImgPath("Anuj"),
    getOpenedImgPath("Arushi"),
    getOpenedImgPath("Bubba"),
    getOpenedImgPath("Dadi"),
    getOpenedImgPath("Gurbani"),
    getOpenedImgPath("Krithi"),
    getOpenedImgPath("Maithili"),
    getOpenedImgPath("Mummy"),
    getOpenedImgPath("Niharika"),
    getOpenedImgPath("Papa"),
    getOpenedImgPath("Parth"),
    getOpenedImgPath("Prag"),
    getOpenedImgPath("Ritika"),
    getOpenedImgPath("Vishal"),
]

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
        x: 900,
        y:0,
        video: 'video/prag.mp4',
        opened: 'images/opened/Prag.png'
    },

    {
        id: 1,
        x: 0,
        y:0,
        video: 'video/Papa.mp4',
        opened: 'images/opened/Papa.png'
    },

    {
        id: 2,
        x: 300,
        y:0,
        video: 'video/Dadi.mp4',
        opened: 'images/opened/Dadi.png'
    },

    {
        id: 3,
        x: 600,
        y:0,
        video: 'video/Mummy.mp4',
        opened: 'images/opened/Mummy.png'
    },

    {
        id: 4,
        x: 1200,
        y:0,
        video: 'video/Anika.mp4',
        opened: 'images/opened/Anika.png'

    },

    {
        id: 5,
        x: 50,
        y:400,
        video: 'video/Anuj.mp4',
        opened: 'images/opened/Anuj.png'

    },

    {
        id: 6,
        x: 350,
        y:400,
        video: 'video/Arushi.mp4',
        opened: 'images/opened/Arushi.png'

    },
    {
        id: 7,
        x: 650,
        y:400,
        video: 'video/Bachpan.mp4',
        opened: 'images/opened/Bachpan.png'

    },

    {
        id: 8,
        x: 950,
        y:400,
        video: 'video/BigChill.mp4',
        opened: 'images/opened/Bigchill.png'

    },
    {
        id: 9,
        x: 1250,
        y:400,
        video: 'video/Bubba.mp4',
        opened: 'images/opened/Bubba.png'

    },

    {
        id: 10,
        x: 0,
        y:800,
        video: 'video/CandyCrush.mp4',
        opened: 'images/opened/PKNO.gif'
    },

    {
        id: 11,
        x: 300,
        y: 800,
        video: 'video/Coffin.mp4',
        opened: 'images/opened/Coffin.png'
    },

    {
        id: 12,
        x: 600,
        y: 800,
        video: 'video/Gurbani.mp4',
        opened: 'images/opened/Gurbani.png'
    },
    {
        id: 13,
        x: 900,
        y: 800,
        video: 'video/Krithi.mp4',
        opened: 'images/opened/Krithi.png'
    },

    {
        id: 14,
        x: 1200,
        y: 800,
        video: 'video/Maithili.mp4',
        opened: 'images/opened/Maithili.png'
    },

    {
        id: 15,
        x: 50,
        y: 1200,
        video: 'video/Niharika.mp4',
        opened: 'images/opened/Niharika.png'
    },

    {
        id: 16,
        x: 350,
        y: 1200,
        video: 'video/Parth.mp4',
        opened: 'images/opened/Parth.png'
    },

    {
        id: 17,
        x: 650,
        y: 1200,
        video: 'video/Potty_1.mp4',
        opened: 'images/opened/Vishal.png'
    },

    {
        id: 18,
        x: 950,
        y: 1200,
        video: 'video/Ritika.mp4',
        opened: 'images/opened/Ritika.png'
    },

    {
        id: 19,
        x: 1250,
        y: 1200,
        video: 'video/Sushi.mp4',
        opened: 'images/opened/Sushi.png'
    },
    
]