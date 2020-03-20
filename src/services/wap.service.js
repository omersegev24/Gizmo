const wap =
{
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [
        {
            id: 'cmp100',
            type: 'app-nav',
            info: {
                subClass: 'light-and-shiny',
                logo: 'gizmo',
                links: [
                    {
                        to: 'footer',
                        txt: 'go down'
                    }
                ]
            }
        },
        {
            id: 'cmp101',
            type: 'app-header',
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
            info: {
                subClass: 'light-and-shiny',
                children: [
                    {
                        id: 'cmp11',
                        type: 'app-article',
                        info: {
                            subClass: 'light-and-shiny',
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    },
                    {
                        id: 'cmp12',
                        type: 'app-article',
                        info: {
                            subClass: 'light-and-shiny',
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    }
                ]
            }
        },
        {
            id: 'cmp104',
            type: 'app-card',
            info: {
                title: 'Do it now',
                subClass: 'light-and-shiny',
                imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
            }
        },
        {
            id: 'cmp105',
            type: 'app-footer',
            info: {
                title: 'Cofferights',
                subClass: 'light-and-shiny',
            }
        },
        {
            id: 'cmp106',
            type: 'app-contact',
            info: {
                subClass: 'light-and-shiny',
                title: 'Get in touch',
                address: 'Tel Aviv Bacher 4',
                phone: '123-456-7890',
                subClass: 'light-and-shiny',
            }
        },
        {
            id: 'cmp107',
            type: 'app-chat',
            info: {
                subClass: 'light-and-shiny',
                title: 'Chat',
            }
        },
        {
            id: 'cmp108',
            type: 'app-social-links',
            info: {
                subClass: 'light-and-shiny',
                links: [
                    { to: 'facebook', url: 'www.facebook.com' }
                ]
            }
        },
        {
            id: 'cmp102',
            type: 'app-map',
            info: {
                title: 'We Sell Corona',
                subClass: 'light-and-shiny',
                center: { lat: 32.519, lng: 34.9045 },
                markers: [{ position: { lat: 32.519, lng: 34.9045 } }]
            }
        },
        {
            id: 'cmp109',
            type: 'layout-3-columns',
            info: {
                subClass: 'light-and-shiny',
                children: [
                    {
                        id: 'cmp1091',
                        type: 'app-article',
                        info: {
                            subClass: 'light-and-shiny',
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    },
                    {
                        id: 'cmp1092',
                        type: 'app-article',
                        info: {
                            subClass: 'light-and-shiny',
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    },
                    {
                        id: 'cmp1093',
                        type: 'app-article',
                        info: {
                            subClass: 'light-and-shiny',
                            title: 'Article title',
                            subTitle: 'Article title',
                            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        }
                    }
                ]
            }
        },
    ]
}

export const wapService = {
    query,
    addCmp,
    updateWap
}

function query() {
    return Promise.resolve(wap);
}


function addCmp(cmp) {
    cmp.id = _makeId()
    wap.cmps.push(cmp);
    return Promise.resolve(cmp)
}

function updateWap(cmp) {
    console.log('wapservice', cmp)
    const idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
    wap.cmps.splice(idx, 1, cmp)
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