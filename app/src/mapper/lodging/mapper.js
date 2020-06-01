function lodgingMapper(apiResponse) {
  const products = apiResponse.data.preFetchedPopularProducts.map(
    ({ id, title, salePrice }) => ({
      id,
      name: title,
      price: `${salePrice.amount}${salePrice.suffix}`,
    }),
  );

  return {
    products,
  };
}

export default lodgingMapper;
