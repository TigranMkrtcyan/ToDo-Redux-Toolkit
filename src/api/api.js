import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const API = {
    getToDO() {
        return instance.get("/todos?_limit=10")
    },
    postToDO(newToDO) {
        return instance.post("/todos", newToDO)
    },
    patchToDo(id,updatedData) {
        return instance.patch(`/todos/${id}`,updatedData)
    },
    deleteToDo(id) {
        return instance.delete(`/todos/${id}`)
    }
}

export default API