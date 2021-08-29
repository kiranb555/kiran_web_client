import http from '../api/http.common';

const getPortfolioAllData = async (params) => {
    let response = [];
    await http.post(params)
        .then(res => {
        response = res?.data ? res.data[0] : [];
    })
    .catch(err => console.log(err,'--------error loding portfolio all data -----'));
    
    return response
} 
export default getPortfolioAllData;