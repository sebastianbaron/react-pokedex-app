
const capitalize = (string) => {
    const toLower = string.toLowerCase();
    return string.charAt(0).toUpperCase() + toLower.slice(1)
} 

export default capitalize;