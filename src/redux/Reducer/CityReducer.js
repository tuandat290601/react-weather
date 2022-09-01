const CityState = {
    cityList: [],
    cityChosen: null,
    name: "",
    dayChosen: null,
}

const cityReducer = (state = CityState, { type, payload }) => {
    
    switch (type) {
        
        case "SET_CITY_LIST":
            return {
                ...state,
                cityList: payload
            }
        case "SET_CITY_CHOSEN":
            return {
                ...state,
                cityChosen: payload
            }
        case "SET_DAY_CHOSEN":
            return {
                ...state,
                dayChosen: payload
            }
        case "SET_NAME": {
            return {
                ...state,
                name: payload
            }
        }
        default:
            return state
    }
}

export default cityReducer 