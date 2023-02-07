import { error, redirect } from '@sveltejs/kit';

const API_URL = "http://localhost:3000"

async function callAPI({method, path, data, token}) {
    const request = {method, headers: {}}

    if(data) {
        request.headers["Content-Type"] = "application/json"
        request.body = JSON.stringify(data)
    }

    if(token) {
        request.headers['Authorization'] = `Bearer ${token}`
    }
    console.log(request)
    const response = await fetch(`${API_URL}/${path}`, request)

    return response.json

    throw error(res.status);
}

async function send({ method, path, data, token }) {
    const opts = { method, headers: {} };

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${base}/${path}`, opts);
    if (res.ok || res.status === 422) {
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }

    throw error(res.status);
}

export function get(path, token) {
    return callAPI({ method: 'GET', path, token });
}

export function del(path, token) {
    return callAPI({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
    return callAPI({ method: 'POST', path, data, token });
}

export function patch(path, data, token) {
    return callAPI({ method: 'PATCH', path, data, token });
}