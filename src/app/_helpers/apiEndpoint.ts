import {environment} from '../../environments/environment';

// Api base url
// const serverUrl = 'https://calm-taiga-40248.herokuapp.com/api/';
// const serverUrl = '/api/';
// const serverUrl = 'http://localhost:1010/api/';

export const ApiEndpoint = {
  LOGIN: environment.serverUrl + 'user/login',
  GETALLUSER: environment.serverUrl + 'user/getAll',
  CREATEUSER: environment.serverUrl + 'user/create',
  DELETEUSER: environment.serverUrl + 'user/'
};
