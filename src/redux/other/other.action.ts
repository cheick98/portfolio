// my importations
import { MENU_TYPE, REALISATION_TYPE, THEME_TYPE } from './other.type.ts'
import { DARK_MODE, MENU_SELECTED, OPEN_MODAL, REALISATION_SELECTED, RESET_REALISATION_SELECTED } from '../constants.ts'

const theme = localStorage.getItem('theme')

export const _changeTheme = (payload: boolean) => (dispatch: any) => {
    if (payload) localStorage.setItem('theme', 'dark')
    else localStorage.setItem('theme', 'light')

    dispatch({ type: DARK_MODE, payload })
}

export const _getTheme = () => (dispatch: any) => {
    if (theme) {
        const darkMode = (theme as THEME_TYPE) === 'dark'

        if (darkMode) {
            localStorage.setItem('theme', 'dark')

            dispatch({ type: DARK_MODE, payload: true })
        } else {
            localStorage.setItem('theme', 'light')

            dispatch({ type: DARK_MODE, payload: false })
        }
    } else {
        localStorage.setItem('theme', 'light')

        dispatch({ type: DARK_MODE, payload: false })
    }
}

export const _openModal = (payload: boolean) => (dispatch: any) => {
    dispatch({ type: OPEN_MODAL, payload })
}

export const _selectMenu = (payload: MENU_TYPE) => (dispatch: any) => {
    dispatch({ type: MENU_SELECTED, payload })
}

export const _selectRealisation = (payload: REALISATION_TYPE | null) => (dispatch: any) => {
    dispatch({ type: REALISATION_SELECTED, payload })
}

export const _resetRealisationSelected = () => (dispatch: any) => {
    dispatch({ type: RESET_REALISATION_SELECTED, payload: null })
}