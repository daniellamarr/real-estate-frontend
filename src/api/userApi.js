import realEstateServiceClient from '.';

export const createUser = async body => {
  const response = await realEstateServiceClient({
    url: 'user',
    method: 'post',
    data: body
  });

  return response;
}

export const updateUser = async (body, customerId) => {
  const response = await realEstateServiceClient({
    url: `user/${customerId}`,
    method: 'put',
    data: body
  });

  return response;
}

export const fetchUsers = async () => {
  const response = await realEstateServiceClient({
    url: 'user',
    method: 'get',
  });

  return response;
}

export const fetchUser = async customerId => {
  const response = await realEstateServiceClient({
    url: `user/${customerId}`,
    method: 'get',
  });

  return response;
}

export const deleteUser = async customerId => {
  const response = await realEstateServiceClient({
    url: `user/${customerId}`,
    method: 'delete',
  });

  return response;
}
