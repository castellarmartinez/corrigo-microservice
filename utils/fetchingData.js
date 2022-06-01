import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
import "dotenv/config";

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const grant_type = process.env.grant_type;

const rest_service_url = process.env.rest_service_url;
const oauth_server_url = process.env.oauth_server_url;

const messageId = uuidv4();

const getToken = fetch(oauth_server_url, {
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
    return response.access_token;
  });

const getWorkOrders = (access_token, ids) => {
  if (Array.isArray(ids)) {
    ids = ids.map((id) => "ids=" + id).join("&");
  } else {
    ids = "ids=" + ids;
  }

  return fetch(
    rest_service_url + `/api/workOrder?messageId=${messageId}&${ids}`,
    {
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
      return response;
    });
};

export { getToken, getWorkOrders };
