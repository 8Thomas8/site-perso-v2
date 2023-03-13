export default (str: string) => {
    let slug = ''
    slug = str
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/_/g, '-')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w-]+/g, '')
    return slug
}