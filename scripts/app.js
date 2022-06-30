// for dom manipulation
const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    // this is object shorthand notation since the name and value are of the same name
    return {
        cityDetails,
        weather
    }
}

cityForm.addEventListener('submit', e => {
    // prevent default action (refresh)
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with the new city
    // updateCity(city)
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

});
