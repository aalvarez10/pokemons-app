import axios from "axios";

const url = "https://bp-pokemons.herokuapp.com";

const axiosApi = axios.create({
    baseURL: url,

})

export async function get(url: string) {
    return axiosApi.get(url).then((response) => response.data)
}


export async function post(url: string, data: Object) {
    return axiosApi.post(url, {...data}).then(response => response.data)
}

export async function put(url: string, data: Object) {
    return axiosApi.put(url, {...data}).then(response => response.data)
}

export async function del(url: string) {
    return axiosApi.delete(url).then(response => response.data)
}