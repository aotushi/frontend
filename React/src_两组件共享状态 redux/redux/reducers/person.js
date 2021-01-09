import {ADD_PERSON} from '../../redux/constant';
import {v4 as uuidv4} from 'uuid';

let initPerson=[{id:uuidv4(), name:'甲', age:16}, {id:uuidv4(), name:'乙', age:17}, {id:uuidv4(), name:'丙', age:18}]
export default function personReducer(preState=initPerson, action){
    const{type, data}=action;
    switch(type){
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}