import configs from '../../config';
import { lodgingHomeMapper, lodgingMapper } from './mapper';

export async function getLodgingHome() {
  try {
    const jsonData = await (
      await fetch(`${configs.getApiPath('get', '/product/lodging-home')}`)
    ).json();

    return lodgingHomeMapper(jsonData);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getLodging(id) {
  try {
    const jsonData = await (
      await fetch(
        `${configs.getApiPath(
          'get',
          '/product/products/:id',
          `/product/products/${id}`,
        )}`,
      )
    ).json();

    return lodgingMapper(jsonData);
  } catch (error) {
    throw new Error(error);
  }
}
