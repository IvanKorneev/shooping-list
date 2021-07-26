import React, {useEffect} from "react";
import {connect} from "react-redux";
import {reduxForm, reset} from "redux-form";
import ProductsForm from "../../components/products-forms";
import {addItem, getInfoLocalStorage, removedFromCartItem} from "../../store/actions";
import ShopList from "../../components/shop-list";
import {v4 as uuidv4} from 'uuid';
import {getDate} from "../../components/helpers";
import TotalPrice from "../../components/total-price";
import ShopCalendar from "../../components/shop-calendar";

const ProductReduxForm = reduxForm({form: "Product"})(ProductsForm)


const FormsContainer = ({items, addItem, resetForm, removedFromItem, totalPrice, addStorage}) => {


    useEffect(() => {
        getStorage()
    }, [addStorage])

    const onSubmit = (data) => {
        data.date = getDate()
        data.id = uuidv4();
        addItem(data);
        resetForm();
        localStorage.setItem('productData', JSON.stringify(items));
    }
    const removedItemLocalStorage = (removedId) => {
        let localStorageData = JSON.parse(localStorage.getItem('productData'));
        const updatedLocalStorageData = localStorageData.filter(el => el.id !== removedId);
        localStorage.setItem('productData',JSON.stringify(updatedLocalStorageData));
    }



    const deleteItem = (removedId, price) => {
        removedFromItem(removedId, price);
        removedItemLocalStorage(removedId)
    }

    const getStorage = () => {
        if (!localStorage.getItem('productData')) {
            return [];
        }
        addStorage(JSON.parse(localStorage.getItem('productData')));
    }


    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit} items={items}/>
            <ShopList items={items} deleteItem={deleteItem}/>
            <TotalPrice totalPrice={totalPrice}/>

        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        items: state.formPage.items,
        totalPrice: state.formPage.totalPrice
    };
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (value, price) => dispatch(addItem(value, price)),
    resetForm: (value) => dispatch(reset("Product")),
    removedFromItem: (removedId, price) => dispatch(removedFromCartItem(removedId, price)),
    addStorage: (newStorage) => dispatch(getInfoLocalStorage(newStorage))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
