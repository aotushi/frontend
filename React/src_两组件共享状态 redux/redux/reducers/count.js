import {INCREMENT, DECREMENT} from '../../redux/constant';

export default function countReducer(preState=666, action){
    const{type, data}=action;
    switch(type){
        case INCREMENT:
            return preState+data;
        case DECREMENT:
            return preState-data;
        default:
            return preState;
    }
}

