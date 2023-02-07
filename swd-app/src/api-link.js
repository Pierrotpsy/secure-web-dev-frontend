const API_URL = "http://localhost:3000";

export async function loginUser(user) {
    try {
        const request = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
        }
        const response = await fetch(`${API_URL}/users/login`, request);
        return response.json()
  } catch (error) {
        console.error(error);
  }
}

export async function registerUser(user) {
  try {
    const request = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: user.username,
			password: user.password,
		}),
		}
		const response = await fetch(`${API_URL}/users/register`, request)
		return response.json()
  } catch (error) {
      	console.error(error);
  }
}

export async function getAllLocations(JWT_TOKEN) {
  try {
		const request = {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + JWT_TOKEN,
			},
		  }
		const response = await fetch(`${API_URL}/locations/`, request)
		return response.json()
  } catch (error) {
    	console.error(error);
  }
}

export async function deleteLocation(id, JWT_TOKEN) {
  try {
		const request = {
			method: "DELETE",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + JWT_TOKEN,
			},
		  }
		console.log(request)
		console.log(id)
    	const response = await fetch(`${API_URL}/locations/${id}`, request)
		console.log(response)
  } catch (error) {
    	console.error(error);
  }
}

export async function createLocation(location, JWT_TOKEN) {
  try {
		const request = {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + JWT_TOKEN,
			},
			body: JSON.stringify({
			  filmName: location.filmName,
			  filmType: location.filmType,
			  filmProducerName: location.filmProducerName,
			  filmDirectorName: location.filmDirectorName,
			  address: location.address,
			  year: location.year,
			}),
		  }

		const response = await fetch(`${API_URL}/locations`, request)
		return response.json()
  } catch (error) {
    	console.error(error);
  }
}

export async function updateLocation(id, JWT_TOKEN, location) {
  try {
		const request = {
			method: "PATCH",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + JWT_TOKEN,
			},
			body: JSON.stringify({
			  filmType: location.filmType,
			  filmProducerName: location.filmProducerName,
			  filmDirectorName: location.filmDirectorName,
			  address: location.address,
			  year: location.year,
			}),
		  }
		console.log(request)
		console.log(id)
		const response = await fetch(`${API_URL}/locations/${id}`, request)
		return response.json()
  } catch (error) {
    	console.error(error);
  }
}