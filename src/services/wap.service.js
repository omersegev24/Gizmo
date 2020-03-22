import { storageService } from './storage.service.js'
const WAP_KEY = 'wap'
const gWap = {
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [{
        id: 'cmp100',
        type: 'app-nav',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            logo: 'Gizmo',
            links: [{
                to: 'app-header',
                txt: 'Home'
            },
            {
                to: 'app-contact-us',
                txt: 'Contact'
            },
            {
                to: 'app-article',
                txt: 'About'
            },
            ]
        }
    },
    {
        id: 'cmp101',
        type: 'app-header',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            title: 'We Sell Corona',
            subTitle: 'and alcojel',
            callToAction: 'Try it now!'
        }
    },
    {
        id: 'cmp103',
        type: 'layout-2-columns',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            children: [{
                id: 'cmp12',
                type: 'app-card',
                style: {},
                info: {
                    subClass: 'light-and-shiny',
                    title: 'Do it now',
                    subTitle: 'Check out our team',
                    callToAction: 'Check it out',
                    imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
                }
            },
            {
                id: 'cmp13',
                type: 'app-card',
                style: {},
                info: {
                    subClass: 'light-and-shiny',
                    title: 'Do it now',
                    subTitle: 'Check out our team',
                    callToAction: 'Check it out',
                    imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
                }
            },
            ]
        }
    },

    {
        id: 'cmp104',
        type: 'app-card',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            title: 'Do it now',
            subTitle: 'Check out our team',
            callToAction: 'Check it out',
            imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
        }
    },
    {
        id: 'cmp106',
        type: 'app-contact',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            title: 'CONTACT',
            country: 'Israel',
            address: 'Tel Aviv Bacher 4',
            phone: '123-456-7890',
            email: 'gizmo@gizmo.com'
        }
    },

    {
        id: 'cmp108',
        type: 'app-social-links',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            links: [
                { social: 'facebook', url: 'www.facebook.com' },
                { social: 'github', url: 'www.github.com' },
                { social: 'instagram', url: 'www.instagram.com' },
            ]
        }
    },
    {
        id: 'cmp102',
        type: 'app-map',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            center: { lat: 32.519, lng: 34.9045 },
            markers: [{ position: { lat: 32.519, lng: 34.9045 } }]
        }
    },
    {
        id: 'cmp109',
        type: 'layout-3-columns',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            children: [{
                id: 'cmp1091',
                type: 'app-article',
                style: {},
                info: {
                    subClass: 'light-and-shiny',
                    title: 'Article title',
                    subTitle: 'Article sub title',
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                }
            },
            {
                id: 'cmp1092',
                type: 'app-article',
                style: {},
                info: {
                    subClass: 'light-and-shiny',
                    title: 'Article title',
                    subTitle: 'Article sub title',
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                }
            },
            {
                id: 'cmp1093',
                type: 'app-article',
                style: {},
                info: {
                    subClass: 'light-and-shiny',
                    title: 'Article title',
                    subTitle: 'Article sub title',
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                }
            }
            ]
        }
    },
    {
        id: 'cmp107',
        type: 'app-chat',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            title: 'Chat',
        }
    },
    {
        id: 'cca29',
        type: 'app-youtube',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            title: "B.B.King",
            url: "https://www.youtube.com/embed/Y57kLy1vV1c"
        }
    },
    {
        id: 'cmp105',
        type: 'app-footer',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            title: 'Cofferights',
            links: [
                { social: 'facebook', url: 'www.facebook.com' },
                { social: 'github', url: 'www.github.com' },
                { social: 'instagram', url: 'www.instagram.com' },
            ],
        }
    },
    ]
}

export const wapService = {
    query,
    addCmp,
    updateWap,
    removeCmp,
    updatePos
}


function query() {
    let wap = storageService.load(WAP_KEY)
    if (wap) return Promise.resolve(wap)
    wap = gWap
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(wap);
}


function addCmp(cmp) {
    let wap = storageService.load(WAP_KEY)
    cmp.id = _makeId()
    wap.cmps.push(cmp);
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(cmp)
}

function updateWap(cmp) {
    if (cmp.type === 'app-youtube') {
        const youtubeId = _getYoutubeVidId(cmp.info.url)
        cmp.info.url = 'https://www.youtube.com/embed/' + youtubeId
    }
    let wap = storageService.load(WAP_KEY)
    const idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
    wap.cmps.splice(idx, 1, cmp)
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(wap)
}

function removeCmp(cmp) {
    let wap = storageService.load(WAP_KEY)
    const idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
    wap.cmps.splice(idx, 1)
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(idx)
}

function updatePos(updatedPos) {
    let wap = storageService.load(WAP_KEY)
    const idx = wap.cmps.findIndex(cmp => cmp.id === updatedPos.cmp.id)
    if (idx + updatedPos.diff < 0 || idx + updatedPos.diff > wap.cmps.length) return Promise.resolve(wap)
    wap.cmps.splice(idx, 1)
    wap.cmps.splice(idx + updatedPos.diff, 0, updatedPos.cmp)
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(wap)
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function _getYoutubeVidId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : '';
}