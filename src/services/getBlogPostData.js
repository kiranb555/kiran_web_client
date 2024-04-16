import http from "../api/http.common";

const getBlogPostData = async (params) => {
  let response = [];
  await http
    .get(params)
    .then((res) => {
      response = res?.data || [];
    })
    .catch((err) =>
      console.log(err, "-------- error loding Blogpost data -----")
    );

  return response;
};
export default getBlogPostData;
