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

export const fetchSinglePost = id => axios
  .get(`http://localhost:3001/posts/${id}`,
    {
      headers: {
        Authorization: 'whatever-you-want',
      },
    });

export const fetchSinglePostComments = id => axios
.get(`http://localhost:3001/posts/${id}/comments`,
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const saveComments = comment => axios
.post('http://localhost:3001/comments', comment,
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const editComments = (comment, id) => axios
.put(`http://localhost:3001/comments/${id}`, comment,
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const deleteSingleComment = id => axios
.delete(`http://localhost:3001/comments/${id}`,
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const savePosts = post => axios
.post('http://localhost:3001/posts', post,
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });

export const editPosts = (post, id) => axios
.put(`http://localhost:3001/posts/${id}`, post,
  {
    headers: {
      Authorization: 'whatever-you-want',
    },
  });
