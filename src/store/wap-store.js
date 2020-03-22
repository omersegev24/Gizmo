import { wapService } from '../services/wap.service.js'

export default ({
    state: {
        wap: {},
    },
    getters: {
        getWap(state) {
            return state.wap;
        }
    },
    mutations: {

        setWap(state, { wap }) {
            state.wap = wap
        },
        addCmp(state, { addedCmp }) {
            state.wap.cmps.push(addedCmp)
        },
        updateWap(state, { updatedCmp }) {
            const idx = state.wap.cmps.findIndex(currCmp => currCmp.id === updatedCmp.id)
            state.wap.cmps.splice(idx, 1, updatedCmp)
        },

        removeCmp(state, { cmpIdx }) {
            state.wap.cmps.splice(cmpIdx, 1)
        },

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
            const cmpCopy = JSON.parse(JSON.stringify(cmp))
            const wap = await wapService.updateWap(cmpCopy)
            context.commit({
                type: 'setWap',
                wap
            })

        },
        async removeCmp(context, { cmp }) {
            const cmpIdx = await wapService.removeCmp(cmp)
            context.commit({
                type: 'removeCmp',
                cmpIdx
            })
        },
        async updatePos(context, { updatedPos }) {
            const wap = await wapService.updatePos(updatedPos)
            context.commit({
                type: 'setWap',
                wap
            })
        },
    },
})
