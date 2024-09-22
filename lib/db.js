import mysql from 'mysql2/promise';

require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

const xenditInvoiceURL = process.env.XENDIT_INVOICE_URL;
const xenditApiKey = process.env.XENDIT_API_KEY;
const coreApiURL = process.env.CORE_API_URL;

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

const getCore = async (path) => {
    try {
        const url = `${coreApiURL}/${path}`
        const response = await fetch(url, {
            method: "GET",
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