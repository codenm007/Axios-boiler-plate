const Axios = require('axios');

let token = "";

const config = {
    headers: {     
    "Authorization": `Bearer ${token}`
}
};

// 'application/x-www-form-urlencoded'

const bodyParameters = {
   username:"admin",
   password:"password"
};
let path = ``

Axios.post( 
  `enter your url here`,
  bodyParameters
).then((data)=>{
  let details =data;
console.log(details);
}).catch(err =>{
    console.log(err);
});



// https://github.com/axios/axios/issues/362