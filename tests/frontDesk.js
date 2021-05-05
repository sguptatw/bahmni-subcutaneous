/* globals gauge*/

"use strict";
// const https = require('https')
const axios = require('axios');

step("Receptionist Start an OPD for patient with first name <firstName> last name <lastName> gender <gender> and year of birth <year>", async function (firstName, lastName, gender, year) {
  const access_token = process.env.receptionist 

  //DB call to start OPD for the patient
});

step("Create a patient with first name <firstName> last name <lastName> gender <gender> year of birth <birthyear>", async function(firstName, lastName, gender, birthyear) {
});

step("Delete the patient with first name <firstName>, last name <lastName>, gender <gender> and year <birthyear>", async function(firstName, lastName, gender, birthyear) {
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
