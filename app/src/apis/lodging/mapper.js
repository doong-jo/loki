export function lodgingHomeMapper(apiResponse) {
  try {
    const products = apiResponse.data.preFetchedPopularProducts.map(
      ({ id, title }) => ({
        id,
        name: title,
      }),
    );

    return {
      products,
    };
  } catch (error) {
    return apiResponse;
  }
}

export function lodgingMapper(apiResponse) {
  try {
    const { data } = apiResponse;
    const product = {
      id: data.id,
      name: data.title,
    };

    return { product };
  } catch (error) {
    return apiResponse;
  }
}
