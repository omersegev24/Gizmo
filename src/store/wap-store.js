import { wapService } from '../services/wap.service.js'
import cloudinaryService from "../services/cloudinary.service.js";

export default ({
    state: {
        wap: {},
        wapTheme: 'dark-theme',
    },
    getters: {
        getWap(state) {
            return state.wap;
        },
        getWapTheme(state) {
            return state.wapTheme;
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
        changeWapTheme(state, { wapTheme }) {
            state.wapTheme = wapTheme
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
        async updateTitleAndTheme(context, { wapConfig }) {
            const wap = await wapService.updateWapConfig(wapConfig)
            context.commit({
                type: 'setWap',
                wap
            })
            const { wapTheme } = wapConfig
            context.commit({
                type: 'changeWapTheme',
                wapTheme
            })
        },
        async uploadImg(context, {ev}) {
            context.commit({ type: 'setInProgress', inProgress: true })
            const res = await cloudinaryService.uploadImg(ev);
            context.commit({ type: 'setInProgress', inProgress: false })
            const { url } = res;
            return (url) ? url : "http://res.cloudinary.com/omer1234/image/upload/v1584998858/li0hhzwliqjrqcqv2coz.jpg";
        },
    },
})
