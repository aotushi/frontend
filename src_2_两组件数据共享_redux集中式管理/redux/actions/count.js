import { INCREMENT, DECREMENT } from '../../redux/constant'

function countIncrementAction(value) {
    return {
        type: INCREMENT, data: value
    }
}

function countDecrementAction(value) {
    return {
        type: DECREMENT, data: value
    }
}

function countIncrementAsyncAction(value, time) {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(countIncrementAction(value))
        }, 500)
    }
}

export { countIncrementAction, countDecrementAction,countIncrementAsyncAction }