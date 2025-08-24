"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  quantity: number;
  price: number;
  name: string;
  size: string;
  variant: string;
}

interface CartContextType {
  cartItems: { [key: string]: CartItem };
  cartCount: number;
  addToCart: (itemCode: string, price: number, name: string, size: string, variant: string) => void;
  removeFromCart: (itemCode: string) => void;
  clearCart: () => void;
  increaseQuantity: (itemCode: string) => void;
  decreaseQuantity: (itemCode: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: CartItem }>({});

  const cartCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (itemCode: string, price: number, name: string, size: string, variant: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemCode]: {
        quantity: (prev[itemCode]?.quantity || 0) + 1,
        price,
        name,
        size,
        variant
      }
    }));
  };

  const removeFromCart = (itemCode: string) => {
    setCartItems(prev => {
      const newCart = { ...prev };
      delete newCart[itemCode];
      return newCart;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const increaseQuantity = (itemCode: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemCode]: {
        ...prev[itemCode],
        quantity: prev[itemCode].quantity + 1
      }
    }));
  };

  const decreaseQuantity = (itemCode: string) => {
    setCartItems(prev => {
      if (prev[itemCode].quantity === 1) {
        const newCart = { ...prev };
        delete newCart[itemCode];
        return newCart;
      }
      return {
        ...prev,
        [itemCode]: {
          ...prev[itemCode],
          quantity: prev[itemCode].quantity - 1
        }
      };
    });
  };

  return (
    <CartContext.Provider value={{ 
      cartItems,
      cartCount,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};
