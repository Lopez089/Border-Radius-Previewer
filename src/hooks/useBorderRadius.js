import { useEffect, useState } from 'react'
import { inicialState } from '../constant/index'

export const useBorderRadius = () => {
    const [border, setBorder] = useState([])

    useEffect(() => {
        let data = localStorage.getItem('borderRadius')

        if (data) setBorder(JSON.parse(data))
        if (!data) setBorder(inicialState)
    }, [])

    return [border, setBorder]
}
