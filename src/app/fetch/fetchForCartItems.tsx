import axios from "axios"
import { requestsToApi } from "./endpoints";

export default async function fetchForCartItems(id: number)
{

    let url: string;
    url = requestsToApi.requestCartItems;
    url = url + '/' + id;
    console.log(url);
    try {
        return (await axios.get(url)
                .then(res => res.data));
    } catch (error) {
        console.error('Error from fetch: ', error);
    }
}
