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
      const token = await api.loginUser(user)
      const jwtContent = JSON.parse(atob(token.jwt.split(".")[1]));

      cookies.set("jwt", token.jwt);
      cookies.set("role", jwtContent.role);

    } catch {
      cookies.set("jwt");
      cookies.set("role");
    }
    throw redirect(300, "/locations");
  },
};