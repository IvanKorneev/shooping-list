import React from "react";
import {connect} from "react-redux";
import Forms from "../../components/forms";

const FormsContainer = ({items}) => {
    return (
        <Forms items={items}/>
    )
}
const mapStateToProps = ({items}) => {
    return {items}
}
export default connect(mapStateToProps)(FormsContainer);
