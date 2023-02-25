import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();
export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItemes, setCartItemes] = useState()
    const [totalPrice, setTotalPrice] = useState();
      const [totalQuantities, setTotalQuantities] = useState()
      const [qty, setQty] = useState(1)
}