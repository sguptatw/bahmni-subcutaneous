/* globals gauge*/

"use strict";
// const https = require('https')
const axios = require('axios');

step("Receptionist Start an OPD for patient with first name <firstName> last name <lastName> gender <gender> and year of birth <year>", async function (firstName, lastName, gender, year) {
});
step("As a receptionist capture the type of visit for patient", async function () {
  var careContextAPIs = await invokeCareContextAPI()

  for(var i=0;i<careContextAPIs.data.length;i++){
    console.log(careContextAPIs.data[i])
  }
});

step("Search a patient with first name <firstName> last name <LastName> gender <gender> and year of birth <yearOfBirth>", async function (firstName, lastName, gender, yearOfBirth) {
  var response = await createRequest()
});

function createHeader(){

}

function invokeCareContextAPI(){
  var bahmniHost = process.env.bahmniHost;
  var careContextAPI = process.env.careContextAPI;

  const access_token = process.env.accessToken 
  return axios.get(bahmniHost+"/"+careContextAPI, {
    params: { patientUuid: process.env.patientUuid },
    headers: {
      'Authorization': `token ${access_token}`
    }
  });
}

async function receptionistLogin(){
  return await invokeCareContextAPI()
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    throw error
  })
}

async function createRequest(){
  return await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const users = res.data;

    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
    return users
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

}

// async function createRequest(){
//   https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// }
// async function createRequest(){
//   const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     path: '/users',
//     method: 'GET'
//   }
  
//   const req = https.request(options, res => {
//     res.on('data', d => {
//       process.stdout.write(d)
//     })
//     res.on('end',d=>{
//       console.log("*****************************")
//       process.stdout.write(d)
//       console.log(JSON.parse(d).explanation);

//     })
//   })
//   req.on('error', error => {
//     console.log(error)
//     throw error;
//   })
  
//   req.end()
//     // var xhttp = new XMLHttpRequest();
//   // xhttp.onreadystatechange = function() {
//   //   if (this.readyState == 4 && this.status == 200) {
//   //     return this.responseText;
//   //   }
//   //   return "Error";
//   // };
//   // xhttp.open("GET", "demo_get.asp", true);
//   // xhttp.send();
// }
