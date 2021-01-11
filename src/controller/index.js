const fetch = require('node-fetch');

exports.changeBase = async (req, res) => {
  const { base, currency } = req.query;

  if (!base) {
    try {
      const get = await fetch('https://api.exchangeratesapi.io/latest');
      const response = await get.json();
      return res.status(200).send({
        results: response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (base && currency) {
    try {
      const get = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`
      );
      const response = await get.json();
      return res.status(200).send({
        results: response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (base) {
    try {
      const query = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${base}`
      );
      const response = await query.json();
      return res.status(200).send({
        results: response,
      });
    } catch (error) {
      console.log(error);
    }
  }
};