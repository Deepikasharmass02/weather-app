const url = 'https://weather-api167.p.rapidapi.com/api/weather/forecast?place=London%2CGB&cnt=3&units=standard&type=three_hour&mode=json&lang=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50aece3e8fmsh5d6d9729b30ca25p17ab7ajsnbd1ff1837332',
		'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
		Accept: 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}