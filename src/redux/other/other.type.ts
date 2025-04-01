export type THEME_TYPE = 'dark' | 'light'
export type MENU_TYPE = 'all' | 'web' | 'mobile'
export type REALISATION_TYPE = { type: 'web' | 'mobile', title: string, description: string, images: string[], technologies: string[] }

export type INITIAL_OTHER_STATE_TYPE = {
    darkMode: false
    openModal: boolean
    menuSelected: MENU_TYPE
    realisation: REALISATION_TYPE | null
}