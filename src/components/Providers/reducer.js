export const initialState = {
    basket : [],
    user:null
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET' : return (
            {
                ...state,
                basket:[...state.basket,action.item]
            }
        )
        case 'REMOVE_FROM_BASKET' : {
            const newbasket = [...state.basket]
            const index = newbasket.findIndex((e) => e.id === action.id)
            newbasket.splice(index,1)
            return ({
                ...state,
                basket:newbasket
            })
        }
        case 'SET_USER' : return ({
            ...state,
            user:action.user
        })
        default : return state
    }
}
export default reducer