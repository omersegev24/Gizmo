const cmps = [
    {
        id: 'cmp101',
        type: 'app-nav',
        stlye: {},
        subClass: 'light-and-shiny',
        info: {
            logo: 'Your logo',
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
        id: 'cmp102',
        type: 'app-header',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            title: 'Header title',
            subTitle: 'Description',
            callToAction: 'Try it now!',
        }

    },
    {
        id: 'cmp103',
        type: 'app-article',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            title: 'Article title',
            subTitle: 'Article title',
            txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
        },
    },

    {
        id: 'cmp104',
        type: 'layout-2-columns',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            children: [
                {}, {}
            ],
        }
    },
    {
        id: 'cmp105',
        type: 'layout-3-columns',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            children: [
                {}, {}, {}
            ]
        }
    },
    {
        id: 'cmp106',
        type: 'app-card',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            title: 'Image Title',
            imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1'
        }
    },
    {
        id: 'cmp107',
        type: 'app-footer',
        subClass: 'light-and-shiny',
        style: {},
        info: {
            title: 'Cofferights',
            links: [
                { social: 'facebook', url: 'www.facebook.com' },
                { social: 'github', url: 'www.github.com' },
                { social: 'instagram', url: 'www.instagram.com' },
            ],
        }
    },
    {
        id: 'cmp108',
        type: 'app-contact',
        subClass: 'light-and-shiny',
        style: {},
        info: {
            title: 'CONTACT',
            country: 'Israel',
            address: 'Tel Aviv Bacher 4',
            phone: '123-456-7890',
            email: 'gizmo@gizmo.com'
        }
    },
    {
        id: 'cmp109',
        type: 'app-chat',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            title: 'Chat',
        }
    },
    {
        id: 'cmp12a9',
        type: 'app-youtube',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            title: "B.B.King",
            url: "https://www.youtube.com/embed/Y57kLy1vV1c"
        }
    },
    {
        id: 'cmp110',
        type: 'app-social-links',
        style: {},
        subClass: 'light-and-shiny',
        info: {
            links: [
                { social: 'facebook', url: 'www.facebook.com' },
                { social: 'github', url: 'www.github.com' },
                { social: 'instagram', url: 'www.instagram.com' },
            ]
        }
    },
    {
        id: 'cmp111',
        type: 'app-map',
        subClass: 'light-and-shiny',
        style: {},
        info: {
            title: 'We Sell Corona',
            center: { lat: 32.519, lng: 34.9045 },
            markers: [{ position: { lat: 32.519, lng: 34.9045 } }]
        }
    },
]

export const cmpService = {
    getById,
    query
}

function query() {
    return Promise.resolve(cmps);
}

function getById(cmpId) {
    let cmp = cmps.find(currCmp => currCmp.id === cmpId)
    let cmpCopy = JSON.parse(JSON.stringify(cmp))
    return Promise.resolve(cmpCopy)
}



