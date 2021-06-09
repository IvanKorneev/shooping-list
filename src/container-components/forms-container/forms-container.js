import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import Forms from "../../components/form-sadding-purchases";


const ProductReduxForm = reduxForm({form: "Product"})(Forms)

const FormsContainer = ({item}) => {

    const onSubmit = (data) => {
        console.log(data)
        console.log({item})


    }
    return (
        <div>
            <ProductReduxForm onSubmit={onSubmit}/>
            {/*<ShopList/>*/}
        </div>

    );
};
const mapStateToProps = ({item}) => {
    return {item}
};
const mapDispatchToProps = {

}
export default connect(mapStateToProps)(FormsContainer);
