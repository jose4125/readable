import axios from 'axios';

export const fetchAllCategories = () => axios.get('http://localhost:3001/categories',
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const fetchAllPosts = () => axios.get('http://localhost:3001/posts',
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const fetchAllCategoryPosts = category => axios
  .get(`http://localhost:3001/${category}/posts`,
    {
      headers: {
        Authorization: 'whatever-you-want',
      },
    });
