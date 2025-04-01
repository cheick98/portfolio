// my importations
import { INITIAL_OTHER_STATE_TYPE } from './other.type'
import { DARK_MODE, MENU_SELECTED, OPEN_MODAL, REALISATION_SELECTED, RESET_REALISATION_SELECTED } from '../constants.ts'

const initialState: INITIAL_OTHER_STATE_TYPE = {
    darkMode: false,
    openModal: false,
    realisation: null,
    menuSelected: 'all',
}

const otherReducer = (state = initialState, action: { type: string, payload: any }): INITIAL_OTHER_STATE_TYPE => {
    const { type, payload } = action

    switch (type) {
        case DARK_MODE:
            return { ...state, darkMode: payload, }

        case OPEN_MODAL:
            return { ...state, openModal: payload, }

        case MENU_SELECTED:
            return { ...state, menuSelected: payload, }

        case REALISATION_SELECTED:
            return { ...state, realisation: payload, }

        case RESET_REALISATION_SELECTED:
            return { ...state, realisation: payload, }

        default: return state
    }
}

export default otherReducer