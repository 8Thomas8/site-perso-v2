    export default function () {
        const darkmode = useState('darkmode', () => ({
            active: false
        }))


        return {
            darkmode}
}
