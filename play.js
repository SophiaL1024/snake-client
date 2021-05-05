const {connect}=require('./client');

console.log("Connecting ...");
connect();
connect().on('data', (data) => {
  console.log(data);
})