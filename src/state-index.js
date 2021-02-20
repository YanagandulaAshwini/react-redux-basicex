import {createStore} from 'redux';
const addData=(data)=>{
    return {
        type:'AddItem',
        title:'Sample'
    }
}
const reducer=(state=[],action)=>{
    switch(action.type){
        case 'AddItem':
            return[...state,action.title]
            default:
                return state;
    }
}
const store=createState(reducer)
store.dispatch(addData('Legato'));
store.dispatch(addData('Company'));
console.log(store.getSate());