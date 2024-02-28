import sendRequest from "./send-request";
const BASE_URL = '/api/budgets';

export function getAll() {
  return sendRequest(BASE_URL);
}

