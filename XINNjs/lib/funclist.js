const fs = require('fs');

global.addResponList = (key, response, isImage, image_url, _db) => {
    var obj_add = {
        key: key,
        response: response,
        isImage: isImage,
        image_url: image_url
    }
    _db.push(obj_add)
    fs.writeFileSync('./XINNjs/database/listall.json', JSON.stringify(_db, null, 3))
}

global.getDataResponList = (key, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position]
    }
}

global.isAlreadyResponList = (key, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].key === key) {
            found = true
        }
    })
    return found
}

global.sendResponList = (key, _dir) => {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _dir[position].response
    }
}

global.delResponList = (key, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./XINNjs/database/listall.json', JSON.stringify(_db, null, 3))
    }
}

global.clearAllList = (_dir) => {
    Object.keys(_dir).forEach((i) => {
        _dir.splice(_dir[i], 1)
        fs.writeFileSync('./XINNjs/database/listall.json', JSON.stringify(_dir, null, 3))
    })
    console.log('Sukses Clear All List')
}