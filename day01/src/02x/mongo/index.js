// mongo express
(async () => {
  const {MongoClient} = require('mongodb')
  const client = new MongoClient(
    'mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb',
    {
      useNewUrlParser: true
    }
  )
  let ret = await client.connect()
  const db = client.db('test')
  const fruits = db.collection('fruits')
  ret  = await fruits.insertOne({name: 'apple', price: 3.5})
  console.log(ret)

})()
