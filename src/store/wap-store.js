import { wapService } from '../services/wap.service.js'

export default ({
    state: {
        wap: {},
    },
    getters: {
        getWap(state){
            return state.wap;
        }
    },
    mutations: {

        setWap(state, { wap }) {
            state.wap = wap
        },
        addCmp(state, { cmp }) {
            console.log('Adding new cmp!')
        },
        updateWap(state, { updatedCmp }) {
            const idx = state.wap.cmps.findIndex(currCmp => currCmp.id === updatedCmp.id)
            state.wap.cmps.splice(idx, 1, updatedCmp)
        }
    },
    actions: {
        async loadWap(context) {
            const wap = await wapService.query()
            context.commit({ type: 'setWap', wap })
            return wap
        },
        async addCmp(context, { cmp }) {
            var cmpCopy = JSON.parse(JSON.stringify(cmp))
            var addedCmp = await wapService.addCmp(cmpCopy)
            context.commit({
                type: 'addCmp',
                addedCmp
            })
            return addedCmp
        },
        async updateCmp(context, { cmp }) {
            console.log('store', cmp)
            // var updatedCmp = await wapService.updateCmp(cmp)
            context.commit({
                type: 'updateWap',
                updatedCmp: cmp
            })
        }
    },
})
