// mongo express

(async () => {
  try {
    const {MongoClient} = require('mongodb')
    const client = await new MongoClient(
      'mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    let ret = client.connect()
    const db = client.db('test')
    const fruits = db.collection('fruits')
    ret  = await fruits.insertOne({name: 'apple', price: 3.5})
    console.log(ret)
  } catch (e){
    console.log(e)
  }
})()
