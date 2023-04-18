const mongoose =require('mongoose')
mongoose.connect(`mongodb+srv://aneeahanish:YAs1pXAHVvpDd8sn@cluster0.oqrtkfl.mongodb.net/?retryWrites=true&w=majority`
,{useNewUrlParser: true})
.then(() => 
  console.log('Connected to the database'))
.catch(err =>
  console.error('Error connecting to the database', err));


  module.exports = mongoose;