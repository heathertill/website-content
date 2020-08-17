import { json } from './api';
import {RouteComponentProps} from 'react-router-dom'

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
}