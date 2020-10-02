import {create} from 'axios';

/**
 * Interacts with the Real Estate API
 * @param {Object} requestConfig Request configuration
 * @param {'post'|'get'|'delete'|'put'} requestConfig.method HTTP verb
 * @param {String} requestConfig.url HTTP verb
 * @param {Object} requestConfig.headers HTTP http header
 * @param {Object} requestConfig.data data to send to backend
 * @return {Promise<{ data, headers, status, statusText, config }>}
 */

const realEstateServiceClient = async requestConfig =>
  create({
    baseURL: 'http://localhost:2609/api/v1/',
    timeout: 150000,
    headers: {
      'Content-Type': 'application/json',
    },
  })(requestConfig);

export default realEstateServiceClient;
