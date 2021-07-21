import React from "react";
import {connect} from "react-redux";
import {reduxForm, reset} from "redux-form";
import ProductsForm from "../../components/products-forms";
import {addItem, removedFromCartItem} from "../../store/actions";
import ShopList from "../../components/shop-list";
import {v4 as uuidv4} from 'uuid';
import {getData} from "../../components/helpers";
import TotalPrice from "../../components/total-price";

const ProductReduxForm = reduxForm({form: "Product"})(ProductsForm)

const FormsContainer = ({items, addItem, resetForm, removedFromItem, totalPrice}) => {

    const onSubmit = (data) => {
        data.data = getData()
        data.id = uuidv4();
        addItem(data);
        resetForm();
        console.log(items)
    }

    const deleteItem = (removedId, price) => {
        removedFromItem(removedId, price)
    };


    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit} items={items}/>
            <ShopList items={items} deleteItem={deleteItem}/>
            <TotalPrice totalPrice={totalPrice}/>
        </div>

    );
};
const mapStateToProps = (state) => {
    return {
        items: state.formPage.items,
        totalPrice: state.formPage.totalPrice
    };
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (value, price) => dispatch(addItem(value, price)),
    resetForm: (value) => dispatch(reset("Product")),
    removedFromItem: (removedId, price) => dispatch(removedFromCartItem(removedId, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
