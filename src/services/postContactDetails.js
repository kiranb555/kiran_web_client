import http from "../api/http.common";

const postContactDetails = async (params, body) => {
  const data = JSON.stringify(body);
  await http
    .post(params, data)
    .then((res) => {
      if (res?.status === 200) {
        return res;
      }
    })
    .catch((err) => {
      console.log("error posting contact data", err);
    });
};

export default postContactDetails;
