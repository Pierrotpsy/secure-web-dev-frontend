import { error, redirect } from "@sveltejs/kit";
import * as api from "../../api-link";

/** @type {import('./$types').PageServerLoad} */
export async function load() {}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    try {
      const data = await request.formData();
      const user = {
        username: data.get("username"),
        password: data.get("password")
      }
      const created = await api.registerUser(user)
    } catch {
    }
    throw redirect(302, "/login");
  },
};