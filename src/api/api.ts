import axios from "axios";


const axiosInst = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/`
});

export const searchAPI = {
    getBooks: (bookTitle: string, currentPage: number = 0) => {
        return axiosInst
            .get(`volumes?key=AIzaSyCp-HBFILbM8aF8n9Gne5SOThUHxgzuyrE&q=${bookTitle}&startIndex=${currentPage}&maxResults=30`);
    },
};