const cmps = [
    {
        id: 'cmp101',
        type: 'app-nav',
        info: {
            subClass: 'light-and-shiny',
            logo: 'Youre logo here',
            links: [
                {
                    to: '#',
                    txt: 'link'
                }
            ]
        }
    },
    {
        id: 'cmp102',
        type: 'app-header',
        info: {
            subClass: 'light-and-shiny',
            title: 'Header title',
            subTitle: 'Description',
            callToAction: 'Try it now!'
        }
    },
    {
        id: 'cmp103',
        type: 'layout-columns',
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
            title: 'Image Title',
            subClass: 'light-and-shiny',
            imgUrl: 'Youre image here'
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



