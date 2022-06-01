import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
import "dotenv/config";

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const grant_type = process.env.grant_type;

const rest_service_url = process.env.rest_service_url;
const oauth_server_url = process.env.oauth_server_url;

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
    rest_service_url + `/api/workOrder?messageId=${uuidv4()}&${ids}`,
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

const getNoteHistory = (access_token, workOrderId) => {
  return fetch(
    rest_service_url +
      `/api/workOrder/noteHistory?messageId=${uuidv4()}&workOrderId=${workOrderId}`,
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

const getAdditionalFieldHistory = (access_token, fields) => {
  const { additionalFieldId, workOrderId } = fields;

  return fetch(
    rest_service_url +
      `/api/workOrder/AdditionalFieldHistory?messageId=${uuidv4()}` +
      `&workOrderId=${workOrderId}&additionalFieldId=${additionalFieldId}`,
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

const getIsmSettings = (access_token, workOrderId) => {
  return fetch(
    rest_service_url +
      `/api/workOrder/IsmSettings?messageId=${uuidv4()}&workOrderId=${workOrderId}`,
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

const acceptOrder = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/accept`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const rejectOrder = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/reject`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const reopenOrder = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/reopen`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const quoteSubmit = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/quoteSubmit`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const checkInOrder = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/checkIn`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const pauseOrder = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/pause`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const checkOutOrder = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/checkOut`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const workDoneDetails = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/workDoneDetails`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const appointmentInfo = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/appointmentInfo`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const note = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/note`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

const additionalField = (access_token, fields) => {
   fields.MessageId = uuidv4();

   return fetch(rest_service_url + `/api/workOrder/additionalField`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + access_token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
};

export {
  getToken,
  getWorkOrders,
  getNoteHistory,
  getAdditionalFieldHistory,
  getIsmSettings,
  acceptOrder,
  rejectOrder,
  reopenOrder,
  quoteSubmit,
  checkInOrder,
  pauseOrder,
  checkOutOrder,
  workDoneDetails,
  appointmentInfo,
  note,
  additionalField,
};
