import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import Forms from "../../components/forms";

const ProductReduxForm = reduxForm({form: 'Product'})(Forms)

const FormsContainer = () => {
    const onSubmit = (Data) => {
        console.log(Data)
    }
    return (
        <ProductReduxForm onSubmit={onSubmit}/>
    );
};
const mapStateToProps = ({items}) => {
    return {items}
};
export default connect(mapStateToProps)(FormsContainer);
