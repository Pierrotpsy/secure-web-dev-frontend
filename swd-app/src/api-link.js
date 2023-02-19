const API_URL = "https://pierrotpsy-backend.onrender.com";

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

export async function getAllLocations(jwt) {
  try {
		const request = {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + jwt,
			},
		  }
		const response = await fetch(`${API_URL}/locations/`, request)
		return response.json()
  } catch (error) {
    	console.error(error);
  }
}

export async function deleteLocation(id, jwt) {
  	try {
		const request = {
			method: "DELETE",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + jwt,
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

export async function createLocation(location, jwt) {
  try {
		const request = {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + jwt,
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

export async function updateLocation(id, jwt, location) {
  try {
		const request = {
			method: "PATCH",
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + jwt,
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