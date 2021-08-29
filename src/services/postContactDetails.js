import http from '../api/http.common';

const postContactDetails = async (params, body) => {
    await http.post(params, JSON.stringify(body)
    ).then(res => {
        if (res?.status === 200) {
            return res
        }
    })
    .catch(err => {console.log('error posting contact data', err)});
}

export default postContactDetails;