var database = require('./database')

function getCats() {
  return new Promise((resolve, reject) => {
    database.db().collection('cats').find().toArray((err, docs) => {
      if (err) {
        reject(err)
      } else {
        resolve(docs)
      }
    })
  })
}

function addCat(cat) {
  return new Promise((resolve, reject) => {
    database.db().collection('cats').insertOne(cat, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  getCats,
  addCat
}


