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
                subClass: 'light-and-shiny / dark-and-magic',
                logo: 'gizmo',
                links: [
                    {
                        to: 'footer Id',
                        txt: 'go down'
                    }
                ]
            }
        },
        {
            id: 'cmp101',
            type: 'app-header',
            info: {
                subClass: 'light-and-shiny / dark-and-magic',
                title: 'We Sell Corona',
                subTitle: 'and alcojel',
                callToAction: 'Try it now!'
            }
        },
        {
            id: 'cmp102',
            type: 'app-map',
            info: {
                title: 'We Sell Corona',
                subType: 'sattelite',
                center: {lat: 32.519, lng: 34.9045 },
                markers: [{ position: {lat: 32.519, lng: 34.9045 } }]
            }
        },
        {
            id: 'cmp104',
            type: 'app-card',
            info: {
                title: 'Do it now',
                subClass: 'or later',
                imgUrl: ''
            }
        },
    ]
}

export const wapService = {
    query,
}

function query() {
    return Promise.resolve(wap);
}


// app-social-links

// app-chat

// app-bot