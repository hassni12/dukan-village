export const QueryToOBJ = (search) => {

    if(!search) return {};

    const data = decodeURI(search)
        .replace(/\?/g, '')
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"');

    try {
        return JSON.parse('{"' + data + '"}');
    } catch (error) {
        return {}
    }
}

export const OBJtoQuery = (obj) => {
    var str = [];
    for (var p in obj){
        if (obj.hasOwnProperty(p) && encodeURI(obj[p])) {
            str.push(encodeURI(p) + "=" + encodeURI(obj[p]));
        }
    }
    return '?'+str.join("&");
}