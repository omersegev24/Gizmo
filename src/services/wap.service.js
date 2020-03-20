const wap =
{
    _id: 'wap92829',
    title: 'My First Wap',
    style: {},
    cmps: [
        // {
        //     id: 'cmp100',
        //     type: 'app-nav',
        //     info: {
        //         subClass: 'light-and-shiny',
        //         logo: 'gizmo',
        //         links: [
        //             {
        //                 to: 'footer Id',
        //                 txt: 'go down'
        //             }
        //         ]
        //     }
        // },
        // {
        //     id: 'cmp101',
        //     type: 'app-header',
        //     info: {
        //         subClass: 'light-and-shiny',
        //         title: 'We Sell Corona',
        //         subTitle: 'and alcojel',
        //         callToAction: 'Try it now!'
        //     }
        // },
        // {
        //     id: 'cmp102',
        //     type: 'app-map',
        //     info: {
        //         title: 'We Sell Corona',
        //         subClass: 'light-and-shiny',
        //         center: {lat: 32.519, lng: 34.9045 },
        //         markers: [{ position: {lat: 32.519, lng: 34.9045 } }]
        //     }
        // },
        // {
        //     id: 'cmp103',
        //     type: 'layout-columns',
        //     info: {
        //         subClass: 'light-and-shiny',
        //         children: [
        //             {}, {}
        //         ]
        //     }
        // },
        // {
        //     id: 'cmp104',
        //     type: 'app-card',
        //     info: {
        //         title: 'XPhotos',
        //         content: 'Check out our team',
        //         subClass: 'light-and-shiny',
        //         imgUrl: 'https://lh3.googleusercontent.com/proxy/rGO29t6QjUVMGshGYHcumfhNtbyEroFXO6OfJxbCgcTx0vYLba66IhgvoH7ILdVIr2qnJoZ_fobLsfK8k3qQ2M6CCf_Yp0CrNmRi4rSv_eIQgfcJa_hKLEGrQy6K-vDTqI4fe32GiZw'
        //     }
        // },
        {
            id: 'cmp105',
            type: 'app-footer',
            info: {
                title: 'Cofferights',
                subClass: 'light-and-shiny',
            }
        },
        // {
        //     id: 'cmp106',
        //     type: 'app-contact',
        //     info: {
        //         subClass: 'light-and-shiny',
        //         title: 'Get in touch',
        //         address:'Tel Aviv Bacher 4',
        //         phone: '123-456-7890',
        //         subClass: 'light-and-shiny',
        //     }
        // },
        // {
        //     id: 'cmp107',
        //     type: 'app-chat',
        //     info: {
        //         subClass: 'light-and-shiny',
        //         title: 'Chat',
        //     }
        // },
        // {
        //     id: 'cmp108',
        //     type: 'app-social-links',
        //     info: {
        //         subClass: 'light-and-shiny',
        //         links:[
        //             {to: 'facebook', url: 'www.facebook.com'}
        //         ]
        //     }
        // }
    ]
}

export const wapService = {
    query,
    addCmp
}

function query() {
    return Promise.resolve(wap);
}


function addCmp(cmp) {
    cmp.id = _makeId()
    wap.cmps.push(cmp);
    return Promise.resolve(cmp)
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

// app-social-links