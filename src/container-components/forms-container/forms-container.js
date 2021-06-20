import React from "react";
import {connect} from "react-redux";
import {reduxForm,reset} from "redux-form";
import ProductsForm from "../../components/products-forms";
import {itemsLoaded} from "../../store/actions";
import ShopList from "../../components/shop-list";

const ProductReduxForm = reduxForm({form: "Product"})(ProductsForm)

const FormsContainer = ({items, addItem,resetForm}) => {

    const onSubmit = (data) => {
        addItem(data)
        resetForm()
    }


    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit} items={items}/>
            <ShopList items={items}/>
        </div>

    );
};
const mapStateToProps = (state) => {
    return {
        items: state.formPage.items
    }
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (value) => dispatch(itemsLoaded(value)),
    resetForm:(value)=> dispatch(reset("Product"))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
