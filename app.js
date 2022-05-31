import fetch from "node-fetch";

fetch("http://oauth-pro-v2.corrigo.com/OAuth/Token", {
   method: 'POST',
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
   },
   body: 'grant_type=client_credentials&client_id=B516137BD2FC0F25420603569E5031AC&client_secret=83C336CCEDDFCD646B2B06FF43970009C1392244E626E0260258B510C1F557E0F6FBFF84AF1766D648AF0FA6F50FE2AB05F994652EEDC55CE20FCA9429BCA275'
   })
   .then((response) => {
      return response.json()
   }).then((response) => {
      const access_token = response.access_token;

      fetch("https://am-api.corrigopro.com/Direct/api/workOrder?messageId=fasfe&ids=16425336", {
      method: 'GET',
      headers: {
         'Authorization': 'Bearer ' + access_token
      }})
      .then((response) => {
         return response.json()
      }).then((response) => {
         console.log(response);
      })
   })
