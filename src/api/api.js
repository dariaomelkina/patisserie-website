// before usage run:
// json-server src/api/data.js --port 3004

const PORT = '3004';

export default class Api {
    static getData() {
        const url = 'http://localhost:' + PORT + "/data";
        return fetch(url, {
            method: 'GET'
        });
    }
}