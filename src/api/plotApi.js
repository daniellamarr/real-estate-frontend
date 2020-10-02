import realEstateServiceClient from '.';

export const allocatePlot = async body => {
  const response = await realEstateServiceClient({
    url: 'plot',
    method: 'post',
    data: body
  });

  return response;
}

export const reallocatePlot = async body => {
  const response = await realEstateServiceClient({
    url: 'plot/reallocate',
    method: 'put',
    data: body
  });

  return response;
}
