import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';

import { addCategoryStart, fetchCategoriesStart, deleteCategoryStart, updateCategoryStart } from './../../redux/Categories/categories.actions';

import Modal from './../../components/Modal';
import ModalUpdate from './../../components/ModalUpdate';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
// import LoadMore from './../../components/LoadMore';
import CKEditor from 'ckeditor4-react';
import './styles.scss';

const mapState = ({ categoriesData }) => ({
  categories: categoriesData.categories
});

const Categories = props => {
  const { categories } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [hideModalUpdate, setHideModalUpdate] = useState(true);
  const [newCategory, setNewCategory] = useState('mens');
  const [categoryName, setCategoryName] = useState('');
  // const [productName, setProductName] = useState('');

  const [updateCategory, setUpdateCategory] = useState('');




  // const [productThumbnail, setProductThumbnail] = useState('');
  // const [productPrice, setProductPrice] = useState(0);
  // const [productDesc, setProductDesc] = useState('');

  const { data, queryDoc, isLastPage } = categories;

  useEffect(() => {
    dispatch(
      fetchCategoriesStart()
      //   updateCategoriesStart()
    );
  }, []);

  const toggleModal = () => setHideModal(!hideModal);
  const toggleModalUpdate = () => setHideModalUpdate(!hideModalUpdate);

  const configModal = {
    hideModal,
    toggleModal
  };
  const configModalUpdate = {
    hideModalUpdate,
    toggleModalUpdate
  };

  const resetForm = () => {
    setHideModal(true);
    setHideModalUpdate(true);
    // setProductCategory('mens');
    setCategoryName('');
    setNewCategory('');
    // setProductThumbnail('');
    // setProductPrice(0);
    // setProductDesc('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addCategoryStart({
        // addCategoryStart({
        // productCategory,
        categoryName,
        newCategory,
        // productThumbnail,
        // productPrice,
        // productDesc,
      }),
    );
    resetForm();

  };

  const resetFormUpdate = () => {
    setHideModalUpdate(true);
    // setProductCategory('mens');
    setCategoryName('');
    setNewCategory('');
    setUpdateCategory('');
    // setProductThumbnail('');
    // setProductPrice(0);
    // setProductDesc('');
  };

  const handleSubmitUpdate = e => {
    e.preventDefault();

    dispatch(
      addCategoryStart({
        // addCategoryStart({
        // productCategory,
        categoryName,
        newCategory,
        // productThumbnail,
        // productPrice,
        // productDesc,
      }),
      updateCategoryStart([
        updateCategory,
      ]),
    );
    resetFormUpdate();

  };

  const handleLoadMore = () => {
    dispatch(
      fetchCategoriesStart({
        // fetchCategoriesStart({
        startAfterDoc: queryDoc,
        persistCategories: data
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="categories">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new category
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewCategoryForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Category
            </h2>

            {/* <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            /> */}

            <FormInput
              label="Name"
              type="text"
              value={categoryName}
              handleChange={e => setCategoryName(e.target.value)}
            />

            {/* <FormInput
              label="NewCategory"
              type="text"
              value={newCategory}
              handleChange={e => setNewCategory(e.target.value)}
            /> */}

            {/* <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            /> */}

            {/* <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            /> */}

            <br />

            <Button type="submit">
              Add category
            </Button>

          </form>
        </div>
      </Modal>


      <div className="callToActionsUpdate">
        <ul>
          <li>
            <Button onClick={() => toggleModalUpdate()}>
              Update
            </Button>
          </li>
        </ul>
      </div>

      <ModalUpdate {...configModalUpdate}>
        <div className="addUpdateForm">
          <form onSubmit={handleSubmitUpdate}>

            <h2>
              Update Category Method
            </h2>

            {/* <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            /> */}

            <FormInput
              label="Update"
              type="text"
              value={categoryName}
              handleChange={e => setUpdateCategory(e.target.value)}
            />

            {/* <FormInput
              label="NewCategory"
              type="text"
              value={newCategory}
              handleChange={e => setNewCategory(e.target.value)}
            /> */}

            {/* <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            /> */}

            {/* <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            /> */}

            <br />

            <Button type="submit">
              Update Category
            </Button>

          </form>
        </div>
      </ModalUpdate>

      <div className="manageProducts">

        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Add/ Delete/ Upate Categories
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(data) && data.length > 0) && data.map((category, index) => {
                      const {
                        categoryName,
                        // productThumbnail,
                        // productPrice,
                        documentID
                      } = category;

                      return (
                        <tr key={index}>
                          {/* <td>
                            <img className="thumb" src={productThumbnail} />
                          </td> */}
                          <td>
                            {categoryName}
                          </td>
                          {/* <td>
                            £{productPrice}
                          </td> */}

                          <td>
                            <Button onClick={() => dispatch(deleteCategoryStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                          {/* <td>
                            <Button onClick={() => dispatch(deleteCategoryStart(documentID))}>
                              Update
                            </Button>
                          </td> */}
                          <td>
                            <Button onClick={() => toggleModalUpdate()}>
                              Update
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                {/* <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                          <LoadMore {...configLoadMore} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table> */}
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Categories;