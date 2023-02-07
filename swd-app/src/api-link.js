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
        console.log(error);
  }
}

export async function registerUser(user) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    });
    return response.json()
  } catch (error) {
    console.error(error);
  }
}

export async function getAllLocations(JWT_TOKEN) {
  try {
    const response = await fetch(`${API_URL}/locations/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN,
      },
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteLocation(locationId, JWT_TOKEN) {
  try {
    await fetch(`${API_URL}/locations/${locationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function createLocation(location, JWT_TOKEN) {
  try {
    const response = await fetch(`${API_URL}/locations`, {
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
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function updateLocation(locationId, JWT_TOKEN, location) {
  try {
    const response = await fetch(`${API_URL}/locations/${locationId}`, {
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
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}