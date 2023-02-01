export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        pyload : num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}






// SECOND METHOD
// const incNumber = () => {type: "INCREMENT"}