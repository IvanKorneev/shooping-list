import React from "react";
import {connect} from "react-redux";
import {reduxForm, reset} from "redux-form";
import ProductsForm from "../../components/products-forms";
import {addItem, removedFromCartItem} from "../../store/actions";
import ShopList from "../../components/shop-list";
import {v4 as uuidv4} from 'uuid';

const ProductReduxForm = reduxForm({form: "Product"})(ProductsForm)

const FormsContainer = ({items, addItem, resetForm, removedFromItem}) => {

    const onSubmit = (data, id) => {
        id = uuidv4()
        addItem(data, id)
        resetForm()
        console.log(items)
    };

    const deleteItem = (removedId) => {
        removedFromItem(removedId)
        console.log(removedId)
    };


    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit} items={items}/>
            <ShopList items={items} deleteItem={deleteItem}/>
        </div>

    );
};
const mapStateToProps = (state) => {
    return {
        items: state.formPage.items
    };
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (value, id) => dispatch(addItem(value, id)),
    resetForm: (value) => dispatch(reset("Product")),
    removedFromItem: (removedId) => dispatch(removedFromCartItem(removedId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
