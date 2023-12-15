import requestHeaders from "../commons/requestHeaders";
import requestOptions from "../commons/requestOptions";

const post = async (url, body) => {
    return await fetch(url, requestOptions("post", requestHeaders, body))
        .then(response => response.json())
        .catch(error => console.log(error));
};

const get = async (url) => {
    return await fetch(url, requestOptions("get", requestHeaders))
        .then(response => response.json())
        .catch(error => console.log(error));
};

const handleRequests = { post, get };
export default handleRequests;
