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
            state.wap.cmps.push(cmp)
        },
    },
    actions: {
        async addCmp(context, { cmp }) {
            console.log(cmp)
            var addedCmp = await wapService.addCmp(cmp)
            context.commit({
                type: 'addCmp',
                addedCmp
            })
            return addedCmp
        },
    },
})
