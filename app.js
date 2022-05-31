import fetch from "node-fetch";
import "dotenv/config";

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const grant_type = process.env.grant_type;

const rest_service_url = process.env.rest_service_url;
const oauth_server_url = process.env.oauth_server_url;

fetch(oauth_server_url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  body: `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`,
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const access_token = response.access_token;

    fetch(rest_service_url + "/api/workOrder?messageId=fdasfe&ids=16425336", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  });
