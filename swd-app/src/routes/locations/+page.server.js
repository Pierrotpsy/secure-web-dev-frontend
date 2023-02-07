import {redirect} from "@sveltejs/kit";
import * as api from "../../api-link.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    try {
		console.log("loading")
        const role = {value: cookies.get("role")}
        const jwt = {value: cookies.get("jwt")}

        if (jwt.value === undefined) throw redirect(300, "/login")

        const locationslist = await api.getAllLocations(jwt.value);

    	if (locationslist) return {locationslist, role, jwt}
    } catch (error) {
        throw redirect(300, "/login");
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request, cookies}) => {
    const data = await request.formData();
    const newLocation = {
        filmName: data.get("name"),
        filmType: data.get("type"),
        filmProducerName: data.get("producername"),
        filmDirectorName: data.get("directorname"),
        address: data.get("address"),
        year: data.get("year"),
    };
    await api.createLocation(newLocation, cookies.get("jwt"));
  },
};
