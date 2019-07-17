import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    const key = 'd462695041630571ba19563f0a692c52';
    const ID = '37b380d8';

    try {
      const search = await axios(
        `https://api.edamam.com/search?q=${
          this.query
        }&app_id=${ID}&app_key=${key}`
      );
      this.result = search.data.hits;
    } catch (error) {
      alert(error);
    }
  }
}
