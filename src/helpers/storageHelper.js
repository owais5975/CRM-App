
const setItem = (title, data) => {
    localStorage.setItem(title, data)
}

const getItem = (title) => {
    return localStorage.getItem(title)
}

const deleteItem = (title) => {
    localStorage.removeItem(title)
}


const obj = {setItem, getItem, deleteItem}
export default obj;