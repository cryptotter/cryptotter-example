import axios from 'axios';

export async function create({amount, name}) {
  return (
    await axios.post('/api/orders', {
      name,
      amount,
    })
  ).data;
}

export default {
  create,
};
