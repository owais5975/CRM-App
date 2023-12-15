import storageHelper from "../helpers/storageHelper"

const requestHeaders = {
    "Content-Type" : "application/json",
    Authorization : storageHelper.getItem("Token") ?? ""
};

export default requestHeaders;