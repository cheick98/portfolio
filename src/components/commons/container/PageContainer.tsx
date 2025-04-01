import { FC, ReactNode, useEffect } from 'react'
// my importations

type COMPONENT_TYPE = {
    children: ReactNode
    titlePage: string
}

const PageContainer: FC<COMPONENT_TYPE> = (props) => {
    const { titlePage, children } = props

    useEffect(() => {
        document.title = titlePage
    }, [titlePage])

    return children
}

export default PageContainer