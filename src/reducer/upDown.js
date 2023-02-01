const initialState = 10;

const numberChange = (state = initialState,action) => {
    switch(action.type) {
        case "INCREMENT" : return state + action.pyload;
        case "DECREMENT" : return state - 1;
        default : return state;

    }

}

export default numberChange;