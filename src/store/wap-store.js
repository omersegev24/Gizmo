import { wapService } from '../services/wap.service.js'

export default ({
    state: {
        wap: {},
    },
    getters: {

    },
    mutations: {

        setWap(state, { wap }) {
            state.wap = wap
        },
        addCmp(state, { cmp }) {
            console.log('Adding new cmp!')
        },
    },
    actions: {
        async addCmp(context, { cmp }) {
            var cmpCopy = JSON.parse(JSON.stringify(cmp))
            var addedCmp = await wapService.addCmp(cmpCopy)
            context.commit({
                type: 'addCmp',
                addedCmp
            })
            return addedCmp
        },
    },
})
