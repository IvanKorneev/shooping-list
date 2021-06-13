import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import ProductsForm from "../../components/products-forms";
import {itemsLoaded} from "../../store/actions";
import ShopList from "../../components/shop-list";

const ProductReduxForm = reduxForm({form: "Product"})(ProductsForm)

const FormsContainer = ({items, addItem}) => {

    const onSubmit = (data) => {
        addItem(data)
    }


    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit}/>
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
    addItem: (value) => dispatch(itemsLoaded(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
