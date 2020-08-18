import { json } from './api';
import { RouteComponentProps } from 'react-router-dom'

import Swal from 'sweetalert2';

export const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, uri: string, method: string, body: any) => {
    e.preventDefault();
    try {
        let newSubmit = await json(uri, method, body)
        if (newSubmit) {
            return newSubmit

        }
    } catch (e) {
        console.log(e)
    }
};

export const wayToGo = (message?: string, then?: any) => {
    Swal.fire({
        title: message,
        timer: 1500,
        showConfirmButton: false,
        onClose: () => {
            then;
        } 
    })
}