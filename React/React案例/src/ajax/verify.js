import axios from 'axios';

export const reqVerifyCode=phone=>axios.post('/login/digits', {phone});

export const reqVerifyLogin=()=>axios.post('/login/verify')