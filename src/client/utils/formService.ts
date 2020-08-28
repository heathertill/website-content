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

export const handleGet = async (uri: string, setter: any) => {
    console.log('ding')
    try {
        let results = await json(uri);
        setter(results)
    } catch (e) {
        console.log(e)
    }
}

export const radioChecked = (radioValue: string, setRadio: any) => {
    if (radioValue === 'yes') {
        setRadio(true)
    } else {
        setRadio(false)
    }
}

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

// <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
// <div>
// <label htmlFor="" > </label>
// <input className="form-control" type="text" value={} placeholder={}
// onChange = {(e: React.ChangeEvent<HTMLInputElement>) => set(e.target.value)} />
//     </div>
//         </form>