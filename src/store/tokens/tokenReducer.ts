import { Action } from './actions';

export interface TokenState {
    tokens: string
}

export const initialstate = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialstate, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload }
        }

        default:
            return state
    }
}