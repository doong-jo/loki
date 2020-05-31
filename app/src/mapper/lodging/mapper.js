function lodgingMapper(apiResponse) {
  const products = apiResponse.data.lodgingProducts.map(
    ({ id, lodgingName }) => ({
      id,
      name: lodgingName,
    }),
  );

  return {
    products,
  };
}

export default lodgingMapper;
