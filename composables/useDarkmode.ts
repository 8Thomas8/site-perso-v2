export const useDarkmode = () => {
    const isActiveCookie = useCookie('darkmode')
    isActiveCookie.value = false

    const isActive = useState('isActive', () => {
        if (isActiveCookie) {
            return isActiveCookie.value
        } else {
            return false
        }
    })

    watch(isActive, () => {
        isActiveCookie.value = isActive.value
    })

    return {
        isActive
    }
}
