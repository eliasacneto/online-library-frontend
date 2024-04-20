import axios from "axios";

const BASE_URL = "https://online-library-backend-blond.vercel.app"

export class BookService {
    static getAllBooks() {
        return axios.get(BASE_URL + '/books');
    }

    static getBook(id) {
        return axios.get(`${BASE_URL}/book/${id}`);
    }

    static createBook(body) {
        return axios.post(`${BASE_URL}/book`, body);
    }

    static updateBook(id, body) {
        return axios.put(`${BASE_URL}/book/${id}`, body);
    }

    static deleteBook(id) {
        return axios.delete(`${BASE_URL}/book/${id}`);
    }

}