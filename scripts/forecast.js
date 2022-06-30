const key = 'ZF0zTjOsYTQy9SMp1AQXaskzDuFQPrjN' // api key for accuweather api
//const city = document.querySelector('')

const getCity = async (city) => { 

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data[0]); // first element is closest match
    return data[0];

}

// getCity('manchester')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));