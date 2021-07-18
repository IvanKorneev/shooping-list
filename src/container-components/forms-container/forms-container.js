import React from "react";
import {connect} from "react-redux";
import {reduxForm, reset} from "redux-form";
import ProductsForm from "../../components/products-forms";
import {addItem, removedFromCartItem} from "../../store/actions";
import ShopList from "../../components/shop-list";

const ProductReduxForm = reduxForm({form: "Product"})(ProductsForm)

const FormsContainer = ({items, addItem, resetForm, getRemovedFromItem}) => {

    const onSubmit = (data, id) => {
        addItem(data, id)
        resetForm()
        console.log(items)
    };

    const deleteItem = (removedId) => {
        getRemovedFromItem(removedId)
        console.log(removedId)
    }


    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit} items={items}/>
            <ShopList items={items} deleteItem={deleteItem} />
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
    getRemovedFromItem: (removedId) => dispatch(removedFromCartItem(removedId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
