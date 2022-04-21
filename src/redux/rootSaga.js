import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import productsSagas from './Products/products.sagas';
import categoriesSagas from './Categories/categories.sagas';
import ordersSagas from './Orders/orders.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
    call(categoriesSagas),
    call(ordersSagas),
  ])
}