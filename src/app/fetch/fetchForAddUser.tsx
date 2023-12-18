import axios from 'axios'
import { requestsToApi } from './endpoints';
import CommercialId from './../modules/CommercialId';

export default async function fetchForAddUser(cariunvan: string, name: string, surname: string, userName: string, phoneNumber: string,
                                            mail: string, password_: string, isAdmin: boolean)
{
    const data: CommercialId =
    {
        commercialID: 0,
        name: name,
        surname: surname,
        commercialTitle: cariunvan,
        phone: phoneNumber,
        email: mail,
        address: 'null',
        username: userName,
        password: password_,
        isAdmin: isAdmin
    }

    let url: string;
    url = requestsToApi.requestAdminAddUser;

    try {
        await axios.post(url, data);
      } catch (error) {
        console.error('Error from fetch: ', error);
      }
}