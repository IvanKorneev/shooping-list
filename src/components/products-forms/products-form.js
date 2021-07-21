import React from "react";
import {Field} from "redux-form";
import "./products-form.sass"

const ProductsForm = (props) => {
    const {handleSubmit, items} = props;
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <Field type="text" component={"input"} placeholder="product" name={"product"}/>
                <Field type="text" component={"input"} placeholder="category" name={"category"}/>
                <Field type="number" component={"input"} placeholder="price" name={"price"}/>
                <Field name="favoriteColor" component="select">
                    {
                        items.map((item, index) => {
                            return (
                                <option key={index}>
                                    {item.category}
                                </option>
                            );
                        })
                    };
                </Field>
                <button className='button'>Add</button>
            </form>
        </div>
    );
};
export default ProductsForm;

