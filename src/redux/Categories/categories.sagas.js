import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setCategories, setCategory, fetchCategoriesStart } from './categories.actions';
import { handleAddCategory, handleFetchCategories,
  handleFetchCategory, handleDeleteCategory, handleUpdateCategory } from './categories.helpers';
import categoriesTypes from './categories.types';

export function* addCategory({ payload }) {

  try {
    const timestamp = new Date();
    yield handleAddCategory({
      ...payload,
      categoryAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchCategoriesStart()
    );


  } catch (err) {
    // console.log(err);
  }

}

export function* onAddCategoryStart() {
  yield takeLatest(categoriesTypes.ADD_NEW_CATEGORY_START, addCategory);
}

export function* fetchCategories({ payload }) {
  try {
    const categories = yield handleFetchCategories(payload);
    yield put(
      setCategories(categories)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchCategoriesStart() {
  yield takeLatest(categoriesTypes.FETCH_CATEGORIES_START, fetchCategories);
}

export function* deleteCategory({ payload }) {
  try {
    yield handleDeleteCategory(payload);
    yield put (
      fetchCategoriesStart()
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onDeleteCategoryStart() {
  yield takeLatest(categoriesTypes.DELETE_CATEGORY_START, deleteCategory);
}

export function* updateCategory({ payload }) {
  try {
    yield handleUpdateCategory(payload);
    yield put (
      fetchCategoriesStart()
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onUpdateCategoryStart() {
  yield takeLatest(categoriesTypes.UPDATE_CATEGORY_START, updateCategory);
}

export function* fetchCategory({ payload }) {
  try {
    const category = yield handleFetchCategory(payload);
    yield put(
      setCategory(category)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchCategoryStart() {
  yield takeLatest(categoriesTypes.FETCH_CATEGORY_START, fetchCategory);
}

export default function* categoriesSagas() {
  yield all([
    call(onAddCategoryStart),
    call(onFetchCategoriesStart),
    call(onDeleteCategoryStart),
    call(onFetchCategoryStart),
    call(onUpdateCategoryStart),
  ])
}