import axios from "axios";

const key = 'key=AIzaSyCp-HBFILbM8aF8n9Gne5SOThUHxgzuyrE';
const portionSize = 'maxResults=30';
const printType = 'printType=books';

const axiosInst = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/volumes`,
});

export const searchAPI = {
    getBooks: (bookTitle: string, page: number, orderBy: string) => {
        return axiosInst
            .get(`?${key}&q=${bookTitle}&startIndex=${page}&${portionSize}&${printType}&orderBy=${orderBy}`);
    },
};