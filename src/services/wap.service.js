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
    // {
    //     id: 'cmp10111',
    //     type: 'app-header',
    //     style: {
    //         backgroundColor:'red'
    //     },
    //     subClass:'light-and-shiny',
    //     children: [
    //         {
    //             htmlTagName: 'h2',
    //             prefs: {
    //                 style: {
    //                     fontSize: 80,
    //                     color: 'blue',
    //                     textAlign: 'center'
    //                 },
    //             },
    //             children: [
    //                 'Your Brand Comes Here'
    //             ]
    //         },
    //         {
    //             htmlTagName: 'button',
    //             prefs: {
    //                 style: {
    //                     fontSize: 15,
    //                     color: 'black',
    //                     textAlign: 'center'
    //                 },
    //             },
    //             children: [
    //                 'Try it now'
    //             ]
    //         },
    //     ],
    //     info: {
    //         subClass: 'light-and-shiny',
    //         title: 'We Sell Corona',
    //         subTitle: 'and alcojel',
    //         callToAction: 'Try it now!'
    //     }
    // },
    {
        id: 'cmp103',
        type: 'layout-2-columns',
        style: {},
        info: {
            subClass: 'light-and-shiny',
            children: [{
                id: 'cmp12',
                type: 'app-card',
                style: { color: 'red' },
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
        style: { width: '500', height: '500' },
        info: {
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

// function updateWap(cmp) {
//     if (cmp.type === 'app-youtube') {
//         const youtubeId = _getYoutubeVidId(cmp.info.url)
//         cmp.info.url = 'https://www.youtube.com/embed/' + youtubeId
//     }
//     let wap = storageService.load(WAP_KEY)
//     const idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
//     if (idx < 0 || idx > wap.cmps.length) return Promise.reject()
//     wap.cmps.splice(idx, 1, cmp)
//     storageService.store(WAP_KEY, wap)
//     return Promise.resolve(wap)
// }

function updateWap(cmp) {
    var wap = storageService.load(WAP_KEY)
    
    wap.cmps.forEach(currCmp => {
        var res = _findNode(cmp.id, currCmp)
        console.log(res)
    })
    // const res = _findItemNested(wap, cmp.id, "children");
    // console.log(res);

    // wap.cmps.splice(idx, 1, cmp)
    // storageService.store(WAP_KEY, wap)
    return Promise.resolve(wap)
}
function _findNode(id, currentNode) {
    var i,
        currentChild,
        result;

    if (id == currentNode.id) {
        return currentNode;
    } else if (currentNode.info.children) {

        // Use a for loop instead of forEach to avoid nested functions
        // Otherwise "return" will not work properly
        for (i = 0; i < currentNode.info.children.length; i += 1) {
            currentChild = currentNode.info.children[i];

            // Search in the current child
            result = _findNode(id, currentChild);

            // Return the result if the node has been found
            if (result !== false) {
                return result;
            }
        }

        // The node has not been found and we have no more options
        return false;
    }
}

// function  _findItemNested(arr, itemId, nestingKey){
//     return arr.reduce((a, item) => {
//         if (a) return a;
//         if (item.id === itemId) return item;
//         if (item[nestingKey]) return findItemNested(item[nestingKey], itemId, nestingKey)
//     }, null)
// };



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


