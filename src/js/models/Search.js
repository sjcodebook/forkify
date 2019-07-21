import axios from 'axios';
import { key, ID } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    try {
      const search = await axios(
        `https://api.edamam.com/search?q=${
          this.query
        }&to=30&app_id=${ID}&app_key=${key}`
      );
      this.result = search.data.hits;
    } catch (error) {
      alert(error);
    }
  }
}
