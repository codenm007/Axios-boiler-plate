const Axios = require('axios');

let token = "";

const config = {
    headers: {     
    "Authorization": `Bearer ${token}`
}
};

// 'application/x-www-form-urlencoded'

// const bodyParameters = {
//    address: "",
//    city:"",
//    email:"",
//    firstname:"",
//    lastname:"",
//    mobile:"",
//    province:""
// };
let path = ``

Axios.get( 
  `enter your url here`,
  config
).then((data)=>{
  let details =data;
console.log(details);
}).catch(err =>{
    console.log(err);
});



// https://github.com/axios/axios/issues/362