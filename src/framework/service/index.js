// import request from '../utils/request';
// import qs from 'qs';
//
// export async function query(api, params) {
//   return request(`${api}?${qs.stringify(params)}`);
// }
//
// export async function create(api, params) {
//   return request(api, {
//     method: 'post',
//     body: JSON.stringify(params),
//   });
// }
//
// export async function get(api, params) {
//   return request(`${api}/${params.id}?${qs.stringify(params)}`);
// }
//
// export async function remove(api, params) {
//   return request(`${api}/${params.id}`, {
//     method: 'delete'
//   });
// }
//
// export async function update(api, params) {
//   return request(`${api}/${params.id}`, {
//     method: 'put',
//     body: JSON.stringify(params)
//   });
// }
//
// export async function createRaw(api, params) {
//   return request(api, {
//     method: 'post',
//     body: params,
//   });
// }



import request from '../utils/request';
import qs from 'qs';

export async function query(api, params) {
  return request(`${api}?${qs.stringify(params)}`);
}

export async function create(api, params) {
  return request(api, {
    method: 'post',
    body: JSON.stringify(params),
  });
}

export async function get(api, params) {
  // return request(`${api}/${params.id}?${qs.stringify(params)}`);
  return request(`${api}/${params.id}`);
}

export async function remove(api, params) {
  return request(`${api}/${params.id}`, {
    method: 'POST'
  });
}

export async function update(api, params) {
  // return request(`${api}/${params.id}`, {
  //   method: 'POST',
  //   body: JSON.stringify(params)
  // });
  return request(`${api}`, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
