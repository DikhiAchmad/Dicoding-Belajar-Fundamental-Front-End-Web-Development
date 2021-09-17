import axios from 'axios';

class DataSource {
  static getData() {
    return axios
      .get('http://my-json-server.typicode.com/dimadani/dicoding-api/cake/')
      .then((response) => {
        return response.data;
      });
  }
}

export default DataSource;
