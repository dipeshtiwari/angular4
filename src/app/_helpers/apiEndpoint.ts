// Api base url
// const BaseUrl = 'https://calm-taiga-40248.herokuapp.com/api/';
 const BaseUrl = 'http://localhost:1010/api/';

export const ApiEndpoint = {
  LOGIN: BaseUrl + 'user/login',
  GETALLUSER: BaseUrl + 'user/getAll',
  CREATEUSER: BaseUrl + 'user/create',
  DELETEUSER: BaseUrl + 'user/'
};
