import React from "react";
import {Field} from "redux-form";

const Forms = (props) => {
    const {handleSubmit} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field type="text" component={"input"} placeholder='product' name={'product'}/>
                <Field type='text' component={"input"} placeholder='category' name={'category'}/>
                <Field type='text' component={"input"} placeholder='price' name={'price'}/>
                <button>Add</button>
            </form>
        </div>
    );
};
export default Forms;

