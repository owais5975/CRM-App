const requestOptions = (type, requestHeaders, body) => {
    if (type === "post")
        return {
            method: 'POST',
            headers: requestHeaders,
            body: body,
            redirect: 'follow'
        };
    else
        return {
            method: 'GET',
            headers: requestHeaders,
        };
}

export default requestOptions;