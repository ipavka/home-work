import axios from "axios";

export type ResponseType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}

export const requestAPI = {
    async getRequestFetch(value: boolean) {
        try {
            const URL = "https://neko-cafe-back.herokuapp.com/auth/test";
            const res = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({success: value})
            })
            return res.json()
        } catch (error: any) { // при ошибке сюда не попадаю ?!
            console.log('error')
            console.log({...error});
            return error.response ? error.response.data.errorText : error.message;
        }
    },
    async getRequestAxios(value: boolean) {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
            .then(res => res.data)
            .catch(rej => {
                console.log('error:', rej.message)
                return rej.response.data
            })

    }
}




