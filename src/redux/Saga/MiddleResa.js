import { takeLatest, call, put } from "redux-saga/effects"


const getCityList = async ({type, payload}) => {
    const res = await fetch(`https://openweathermap.org/data/2.5/find?q=${payload}&appid=439d4b804bc8187953eb36d2a8c26a02`)
    const data = await res.json()
    return data
}

function* getCityListData(keysearch) {
    const cityList = yield call(getCityList, keysearch)
    yield put({ type: "SET_CITY_LIST", payload: cityList.list })
}


const getCityForecast = async ({type, payload}) => {
    const {lat, lon} = payload
    const req = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=439d4b804bc8187953eb36d2a8c26a02`)
    const forecast = await req.json()
    return forecast
}

function* getCityForecastData(coordinate) {
    const cityForecast = yield call(getCityForecast, coordinate)
    yield put({ type: "SET_CITY_CHOSEN", payload: cityForecast })
}



function* mySaga() {
    yield takeLatest("GET_CITY_LIST_DATA", getCityListData)
    yield takeLatest("GET_CITY_FORECAST_DATA", getCityForecastData)
}


export default mySaga