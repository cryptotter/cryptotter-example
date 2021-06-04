import axios from 'axios';

export default async (req, res) => {
  console.log('-----', 'process.env.API', process.env.API);
  const response = await axios.post(`${process.env.API}/v1/transaction`, {
    shop_id: '66ac27bf-fce5-49ec-bb48-95688f6a131f',
    traditional_currency: {
      id: 'USD',
      amount: req.body.amount,
    },
    order: {
      name: req.body.name,
      icon: 'https://some-icon-url.png',
    },
  });
  res.status(200).json(response.data);
};
