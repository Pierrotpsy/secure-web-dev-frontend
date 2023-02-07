import {redirect} from "@sveltejs/kit";

export async function load({ cookies }) {
    cookies.delete("jwt")
    cookies.delete("role")
    throw redirect(300, "/login");
}