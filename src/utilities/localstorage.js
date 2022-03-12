
export const getLocalStorage = ({ key = '' }) => {
    const res = localStorage.getItem(key)
    return res
}