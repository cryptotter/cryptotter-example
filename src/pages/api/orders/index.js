import axios from 'axios';

export default async (req, res) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API}/v1/transaction`,
    {
      shop_id: 'ac77a7e7-311e-40ec-b383-7c39f685a0eb',
      traditional_currency: {
        id: 'USD',
        amount: req.body.amount,
      },
      order: {
        name: req.body.name,
        icon: 'https://some-icon-url.png',
      },
    }
  );
  res.status(200).json(response.data);
};
