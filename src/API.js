import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/items'

const saveItem = (data) => {
    var options = {
        method: 'POST',
        url: BASE_URL,
        data: data,
    }

    return axios(options);
}

const fetchAllProduct = () => {
    var options = {
        method: 'GET',
        url: BASE_URL,
    }

    return axios(options);
}

const fetchProductById  = (id) => {
    var options = {
        method: 'GET',
        url: BASE_URL + "/search/" +id,
    }

    return axios(options);
}
export {saveItem, fetchAllProduct, fetchProductById}