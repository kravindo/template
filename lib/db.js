import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'core',
});

const xenditInvoiceURL = "https://api.xendit.co/v2/invoices"
const xenditApiKey = "xnd_development_h4X6dZL9UexFBA0wGnQnUoGKxXjXAOY0Y9I23byTCsl3RcA0v2xFYfIJxtQ1"

const coreApiURL = "http://127.0.0.1:8080/v1"

const getOne = async (query, params) => {
    const [result] = await db.query(query, params);
    return result.length > 0 ? result[0] : null;
};

const getMany = async (query, params) => {
    const [results] = await db.query(query, params);
    return results;
};

const getXenditInvoice = async (number) => {
    try {
        const url = `${xenditInvoiceURL}?external_id=${number}`
        console.log(url)
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Basic ${btoa(xenditApiKey + ':')}`,
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error(`Error fetching invoice: ${response.statusText}`);
        }

        const result = await response.json();
        return result[0];
    } catch (error) {
        throw error
    }
}

const getCore = async (path, headers) => {
    try {
        const url = `${coreApiURL}/${path}`
        console.log(url)
        const response = await fetch(url, {
            method: "GET",
            headers
        })
        if (!response.ok) {
            throw new Error(`Error fetching invoice: ${response.statusText}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        throw error
    }
}


export { getOne, getMany, getXenditInvoice, getCore };