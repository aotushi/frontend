import axios from 'axios';

/**
 * 请求登录
 * @param {*} phone 
 * @param {*} code 
 */
export const reqLogin=(phone,code)=>{
    return axios.post('/login/phone', {phone,code});
}