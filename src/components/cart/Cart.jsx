import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/cart/cartSlice";
import {
  changeCountProductInCart,
  deleteProductFromCart,
  cleanCart
} from "../../helpers/functions";
import style from "./card_div.module.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      {cart && (
        <>
          {cart.products.length ? (
            <>
              <table className={style.table}>
                <tbody>
                  {cart.products.map((product) => (
                    <tr className={style.product_main_div}>
                      <td className={style.productImage}>
                        <img src={product.productItem.picture} alt="error:(" />
                      </td>
                      <tr className={style.product_main_div_info}>
                        <td>
                          product name <br />
                          <br />
                          <h5>{product.productItem.name}</h5>
                        </td>
                        <td>
                          price <br />
                          <br />
                          {product.productItem.price}
                        </td>
                        <td>
                          count <br />
                          <br />
                          <input
                            type="number"
                            value={product.count}
                            onChange={(e) => {
                              changeCountProductInCart(
                                product.productItem.id,
                                +e.target.value
                              );
                              dispatch(getCart());
                            }}
                          />
                        </td>
                        <td>
                          full price <br />
                          <br />
                          {product.totalCost}
                        </td>
                        <td>
                          delete <br />
                          <br />
                          <button
                            onClick={() => {
                              deleteProductFromCart(product.productItem.id);
                              dispatch(getCart());
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3>Total cost: ${cart.totalCost}</h3>
              <button
                onClick={() => {
                  cleanCart();
                  dispatch(getCart());
                }}
              >
                Clean cart
              </button>
            </>
          ) : (
            <h3>Cart is empty!</h3>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
