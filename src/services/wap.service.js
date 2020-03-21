import { storageService } from './storage.service.js'
const WAP_KEY = 'wap'
const gWap =
{
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [
        {
            id: 'cmp100',
            type: 'app-nav',
            style: {},
            subClass: 'light-and-shiny',
            info: {
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
            }
        },
        {
            id: 'cmp101',
            type: 'app-header',
            style: {},
            subClass: 'light-and-shiny',
            info: {
                title: 'We Sell Corona',
                subTitle: 'and alcojel',
                callToAction: 'Try it now!'
            }
        },
        {
            id: 'cmp103',
            type: 'layout-2-columns',
            style: {},
            subClass: 'light-and-shiny',
            info: {
                children: [
                    {
                        id: 'cmp12',
                        type: 'app-card',
                        style: {},
                        subClass: 'light-and-shiny',
                        info: {
                            title: 'Do it now',
                            imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
                        }
                    },
                    {
                        id: 'cmp13',
                        type: 'app-card',
                        style: {},
                        subClass: 'light-and-shiny',
                        info: {
                            title: 'Do it now',
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
            subClass: 'light-and-shiny',
            info: {
                title: 'Do it now',
                imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
            }
        },
        {
            id: 'cmp106',
            type: 'app-contact',
            subClass: 'light-and-shiny',
            style: {},
            info: {
                title: 'Get in touch',
                address: 'Tel Aviv Bacher 4',
                phone: '123-456-7890',
            }
        },
 
        {
            id: 'cmp108',
            type: 'app-social-links',
            style: {},
            subClass: 'light-and-shiny',
            info: {
                links: [
                    { to: 'facebook', url: 'www.facebook.com' }
                ]
            }
        },
        {
            id: 'cmp102',
            type: 'app-map',
            subClass: 'light-and-shiny',
            style: {},
            info: {
                title: 'We Sell Corona',
                center: { lat: 32.519, lng: 34.9045 },
                markers: [{ position: { lat: 32.519, lng: 34.9045 } }]
            }
        },
        {
            id: 'cmp109',
            type: 'layout-3-columns',
            style: {},
            subClass: 'light-and-shiny',
            info: {
                children: [
                    {
                        id: 'cmp1091',
                        type: 'app-article',
                        style: {},
                        subClass: 'light-and-shiny',
                        info: {
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    },
                    {
                        id: 'cmp1092',
                        type: 'app-article',
                        style: {},
                        subClass: 'light-and-shiny',
                        info: {
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    },
                    {
                        id: 'cmp1093',
                        type: 'app-article',
                        style: {},
                        subClass: 'light-and-shiny',
                        info: {
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    }
                ]
            }
        },

        {
            id: 'cmp107',
            type: 'app-chat',
            style:{},
            subClass: 'light-and-shiny',
            info: {
                title: 'Chat',
            }
        },
        {
            id: 'cmp105',
            type: 'app-footer',
            subClass: 'light-and-shiny',
            style:{},
            info: {
                title: 'Cofferights',
            }
        },
    ]
}

export const wapService = {
    query,
    addCmp,
    updateWap,
    removeCmp
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
    let wap = storageService.load(WAP_KEY)
    const idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
    wap.cmps.splice(idx, 1, cmp)
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(wap)
}

function removeCmp(cmp){
    let wap = storageService.load(WAP_KEY)
    const idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
    wap.cmps.splice(idx, 1)
    storageService.store(WAP_KEY, wap)
    return Promise.resolve(idx)
}
function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}