import React from "react";
import ShopListItem from "../shop-list-item";

const ShopList = ({items}) => {
    return(
        <div>
            <ul>
                {
                  items.map((item)=>{
                      return(
                          <li>
                              <ShopListItem item={item}/>
                          </li>
                      )
                  })
                }
            </ul>
        </div>
    );
};
export default ShopList;