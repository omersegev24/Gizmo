const wap =
{
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [
        {
            id: 'cmp101',
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
            id: 'cmp10',
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
                center: { lat: 12.98, lng: 98.76 }
            }
        },
        {
            id: 'cmp103',
            type: 'app-layout-2',
            info: {
                children: [
                    {}, {}
                ]
            }
        },
        {
            id: 'cmp104',
            type: 'app-card',
            info: {
                title: 'Do it now',
                subType: 'or later',
                icon: 'success'
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

// LAYOUT
// Cmp Types:
// app-header,
// app-footer
// app-map
// app-row-2
// app-card
// app-contact-us
// app-nav
// app-social-links
// app-chat
// app-bot
