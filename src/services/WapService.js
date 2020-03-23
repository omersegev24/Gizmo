import HttpService from './http.service.js'

export const wapService = {
    query,
    getById,
    remove,
    update,
    add
}

function query() {
    return HttpService.get('wap')
}

function getById(id) {
    return HttpService.get(`wap/${id}`)
}

function remove(id) {
    return HttpService.delete(`wap/${id}`)
}

function update(wap) {
    return HttpService.put(`wap/${wap._id}`, wap)
}
function add(wap) {
    return HttpService.post('wap', wap)
}