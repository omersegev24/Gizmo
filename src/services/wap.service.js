import { storageService } from './storage.service.js'
const WAP_KEY = 'wap'
const gWap = {
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [
        {
            id: 'cmp100',
            type: 'app-nav',
            style: {},
            subClass: 'light-and-shiny',
            logo: 'Gizmo',
            links: [
                {
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
        },

        {
            id: 'cmp10111',
            type: 'app-header',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'tre12',
                    type: 'h1',
                    txt: 'We sell corona',
                    style: {},
                },
                {
                    id: 'saw21a',
                    type: 'button',
                    txt: 'Try me',
                    style: {},
                },
            ],
        },
        {
            id: 'cmpa103',
            type: 'layout-2-columns',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'cmp12',
                    type: 'app-card',
                    style: { color: 'red' },
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'saoomor1a',
                            type: 'img',
                            imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1',
                            style: {},
                        },
                        {
                            id: 'tr31e12',
                            type: 'p',
                            txt: 'Do it now',
                            style: {},
                        },
                        {
                            id: 'sao1w21a',
                            type: 'button',
                            txt: 'Try me',
                            style: {},
                        },

                    ]
                },
                {
                    id: 'cmp1ad2',
                    type: 'app-card',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'sadani3mor1a',
                            type: 'img',
                            imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1',
                            style: {},
                        },
                        {
                            id: 'tr4gc1e12',
                            type: 'p',
                            txt: 'Do it now',
                            style: {},
                        },
                        {
                            id: 's0aaqo1w2a',
                            type: 'button',
                            txt: 'Try me',
                            style: {},
                        },

                    ]
                },
            ]

        },

        {
            id: 'cmp104',
            type: 'app-card',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'sa12mqfo',
                    type: 'img',
                    imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1',
                    style: {},
                },
                {
                    id: 'tr4vgcpa2',
                    type: 'p',
                    txt: 'Do it now',
                    style: {},
                },
                {
                    id: 's0apaq1w27',
                    type: 'button',
                    txt: 'Try me',
                    style: {},
                },

            ]
        },
        {
            id: 'cmp106',
            type: 'app-contact',
            style: {},
            subClass: 'light-and-shiny',
            title: 'CONTACT',
            country: 'Israel',
            address: 'Tel Aviv Bacher 4',
            phone: '123-456-7890',
            email: 'gizmo@gizmo.com'
        },

        {
            id: 'cmp108',
            type: 'app-social-links',
            style: {},
            subClass: 'light-and-shiny',
            links: [
                { social: 'facebook', url: 'www.facebook.com' },
                { social: 'github', url: 'www.github.com' },
                { social: 'instagram', url: 'www.instagram.com' },
            ]
        },
        {
            id: 'cmp102',
            type: 'app-map',
            style: { width: '500', height: '500' },

            center: { lat: 32.519, lng: 34.9045 },
            markers: [{ position: { lat: 32.519, lng: 34.9045 } }]
        },
        {
            id: 'cmp109',
            type: 'layout-3-columns',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'cmp103',
                    type: 'app-article',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'yldor1a',
                            type: 'el-title',
                            txt: 'Article title',
                            style: {},
                        },
                        {
                            id: 'xr4g2e1p',
                            type: 'el-text',
                            txt: 'Article sub title',
                            style: {},
                        },
                        {
                            id: 'q0aewg2a',
                            type: 'el-text',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                            style: {},
                        },

                    ]
                },
                {
                    id: 'cmp1ope3',
                    type: 'app-article',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'yldor1a',
                            type: 'el-title',
                            txt: 'Article title',
                            style: {},
                        },
                        {
                            id: 'xr4g2e1p',
                            type: 'el-text',
                            txt: 'Article sub title',
                            style: {},
                        },
                        {
                            id: 'q0aewg2a',
                            type: 'el-text',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                            style: {},
                        },

                    ]
                },
                {
                    id: 'cmp13rt3',
                    type: 'app-article',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'ylkkfa1a',
                            type: 'el-title',
                            txt: 'Article title',
                            style: {},
                        },
                        {
                            id: 'xrzzlp',
                            type: 'el-text',
                            txt: 'Article sub title',
                            style: {},
                        },
                        {
                            id: 'q0poq2a',
                            type: 'el-text',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                            style: {},
                        },

                    ]
                },
            ]
        },
        {
            id: 'cmp107',
            type: 'app-chat',
            style: {},
            subClass: 'light-and-shiny',
            title: 'Chat',
        },
        {
            id: 'cca29',
            type: 'app-youtube',
            style: {},
            subClass: 'light-and-shiny',
            title: "B.B.King",
            url: "https://www.youtube.com/embed/Y57kLy1vV1c"
        },
        {
            id: 'cmp105',
            type: 'app-footer',
            style: {},
            subClass: 'light-and-shiny',
            title: 'Cofferights',
            links: [
                { social: 'facebook', url: 'www.facebook.com' },
                { social: 'github', url: 'www.github.com' },
                { social: 'instagram', url: 'www.instagram.com' },
            ],
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
    var wap = storageService.load(WAP_KEY)
    wap.cmps.forEach((currCmp, idx) => {
        var res = _findNode(cmp, currCmp)
        if (res) {
            if (res.children) {
                const childIdx = res.children.findIndex(childCmp => childCmp.id === cmp.id)
                res.children.splice(childIdx, 1, cmp)
            } else {
                const nodeIdx = currCmp.children.findIndex(nodeCmp => nodeCmp.id === cmp.id)
                currCmp.children.splice(nodeIdx, 1, cmp)
            }
        }

    })
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

function _findNode(cmp, currentNode) {
    var i,
        currentChild,
        result;

    if (cmp.id === currentNode.id) {
        return currentNode;
    } else if (currentNode.children) {

        for (i = 0; i < currentNode.children.length; i += 1) {
            currentChild = currentNode.children[i];

            result = _findNode(cmp, currentChild);
            if (result) {
                return currentChild;
            }
        }
        return false;
    } else {
        return false
    }
}