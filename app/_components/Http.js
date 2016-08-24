const API = 'http://open.273.cn/'

let _contacts = {}
let _initCalled = false
let _changeListeners = []

const Http = {
  result:'',

  getInfo: function (route, cb) {
    const req = new XMLHttpRequest()
    req.open('GET', API + route)
    req.setRequestHeader('Content-type', localStorage.token)
    req.send()
    req.onload = function () {
      if (req.status === 404) {
        cb(new Error('not found'), null)
      } else {
        cb(null, JSON.parse(req.response))
      }
    }
  },
  get: function (route) {
    const req = new XMLHttpRequest()
    req.open('GET', API + route, false )
    req.setRequestHeader('Content-type', localStorage.token)
    req.send()
    req.onreadystatechange  = function () {
        // _contacts = JSON.parse(req.response)
      console.log(req.responseText)
    }
    // return _contacts;
  },

  addContact: function (contact, cb) {
    postJSON(API, { contact: contact }, function (res) {
      _contacts[res.contact.id] = res.contact
      ContactStore.notifyChange()
      if (cb) cb(res.contact)
    })
  },

  removeContact: function (id, cb) {
    deleteJSON(API + '/' + id, cb)
    delete _contacts[id]
    ContactStore.notifyChange()
  },

  getContacts: function () {
    const array = []

    for (const id in _contacts)
      array.push(_contacts[id])

    return array
  },

  getContact: function (id) {
    return _contacts[id]
  },

  notifyChange: function () {
    _changeListeners.forEach(function (listener) {
      listener()
    })
  },

  addChangeListener: function (listener) {
    _changeListeners.push(listener)
  },

  removeChangeListener: function (listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l
    })
  }

}

localStorage.token = localStorage.token || (Date.now()*Math.random())

function getJSON(url, cb) {
  const req = new XMLHttpRequest()
  req.onload = function () {
    if (req.status === 404) {
      cb(new Error('not found'))
    } else {
      cb(null, JSON.parse(req.response))
    }
  }
  req.open('GET', url)
  req.setRequestHeader('Content-type', localStorage.token)
  req.send()
}

function postJSON(url, obj, cb) {
  const req = new XMLHttpRequest()
  req.onload = function () {
    cb(JSON.parse(req.response))
  }
  req.open('POST', url)
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  req.setRequestHeader('Content-type', localStorage.token)
  req.send(JSON.stringify(obj))
}

function deleteJSON(url, cb) {
  const req = new XMLHttpRequest()
  req.onload = cb
  req.open('DELETE', url)
  req.setRequestHeader('authorization', localStorage.token)
  req.send()
}


export default Http