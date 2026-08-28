import { createContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { shopProductsData } from "../Data/Main/ShopProductsData";
import { topProductsData } from "../Data/Main/TopProductsData";
import { home_topSellingData } from "../Data/Main/Home_TopSellingData";


export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
      // ================= products =================
      const [products, setProducts] = useState([...shopProductsData, ...topProductsData, ...home_topSellingData]);

      // ================= cart =================
      const [cart, setCart] = useState(() => {
            const saveCart = localStorage.getItem("cart");
            return saveCart ? JSON.parse(saveCart) : [];
      });

      useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

      // ================= subTotal =================
      const subTotal = useMemo(() => {
            return cart.reduce((acc, item) => {
                  const cleanPrice = parseFloat(item.price.replace("$", "")) || 0;
                  return acc + cleanPrice * item.amount;
            }, 0);
      }, [cart]);

      // ================= delivery / taxi =================
      const taxi = cart.length > 0 ? 2.00 : 0.00;

      // ================= total =================
      const total = useMemo(() => {
            return taxi + subTotal;
      }, [subTotal, taxi]);

      // ================= quantity =================
      const quantity = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.amount, 0);
      }, [cart]);

      // ================= getProductQuantity (សម្រាប់ទាញយកចំនួនតាម ID នីមួយៗ) =================
      const getProductQuantity = (id) => {
            const cartItems = cart.find((item) => item.id === id)
            return cartItems ? cartItems.amount : 0
      }

      // ================= addToCart =================
      const addToCart = (products) => {
            toast.success("Added To Cart");
            setCart((prev) => {
                  const exist = prev.find((item) => item.id === products.id);
                  if (exist) {
                        return prev.map((item) =>
                              item.id === products.id ? { ...item, amount: item.amount + 1 } : item
                        );
                  }
                  return [...prev, { ...products, amount: 1 }];
            });
      };

      // ================= inCreaseQuantity =================
      const inCreaseQuantity = (id) => {
            setCart((prev) =>
                  prev.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item))
            );
      };

      // ================= deCreaseQuantity =================
      const deCreaseQuantity = (id) => {
            setCart((prev) =>
                  prev
                        .map((item) =>
                              item.id === id ? { ...item, amount: item.amount - 1 } : item
                        )
                        .filter((item) => item.amount > 0)
            );
      };

      // ================= removeFromCart =================
      const removeFromCart = (id) => {
            setCart((prev) => prev.filter((item) => item.id !== id));
            toast.info("Removed From Cart");
      };

      // ================= clearFromCart =================
      const clearFromCart = () => {
            setCart([]);
            toast.error("Cleared From Cart");
      };

      // ================= likeCart (Wishlist) =================
      const [likeCart, setLikeCart] = useState(() => {
            const saveLikeCart = localStorage.getItem("likeCart");
            return saveLikeCart ? JSON.parse(saveLikeCart) : [];
      });

      useEffect(() => {
            localStorage.setItem("likeCart", JSON.stringify(likeCart));
      }, [likeCart]);

      // ================= likeQuantity =================
      const likeQuantity = useMemo(() => {
            return likeCart.length;
      }, [likeCart]);

      // ================= toggleLike =================
      const toggleLike = (product) => {
            const existList = likeCart.find((item) => item.id === product.id);

            // កែសារ Toast ឱ្យត្រូវតាមស្ថានភាពជាក់ស្តែង
            if (existList) {
                  toast.info("Removed From Wishlist"); // បើមានហើយ ចុចគឺលុបចេញ
            } else {
                  toast.success("Added To Wishlist");    // បើអត់ទាន់មាន ចុចគឺបន្ថែមចូល
            }

            setLikeCart((prev) => {
                  const newList = prev.find((item) => item.id === product.id);
                  if (newList) {
                        return prev.filter((item) => item.id !== product.id);
                  }
                  return [...prev, product];
            });
      };

      // ================= removeFromLike =================
      const removeFromLike = (id) => {
            setLikeCart((prev) => prev.filter((item) => item.id !== id));
            toast.warning("Removed From Wishlist");
      };

      // ================= ClearFromLike =================
      const ClearFromLike = () => {
            setLikeCart([]);
            toast.error("Cleared From Wishlist");
      };

      // ================= SearchCategory & RatingCategory =================
      const [searchCategory, setSearchCategory] = useState(() => {
            const saveSearchCategory = localStorage.getItem("searchCategory");
            return saveSearchCategory ? JSON.parse(saveSearchCategory) : "";
      });

      const [ratingCategory, setRatingCategory] = useState(() => {
            const saveRatingCategory = localStorage.getItem("ratingCategory");
            return saveRatingCategory ? JSON.parse(saveRatingCategory) : 0;
      });

      useEffect(() => {
            localStorage.setItem("searchCategory", JSON.stringify(searchCategory));
            localStorage.setItem("ratingCategory", JSON.stringify(ratingCategory));
      }, [searchCategory, ratingCategory]);

      // ================= FilterProducts =================
      const filterProducts = products.filter((item) => {
            const matchSearch = item.name.toLowerCase().includes(searchCategory.toLowerCase());
            const matchRating = ratingCategory === 0 || parseFloat(item.rating) >= ratingCategory;
            return matchSearch && matchRating;
      });

      return (
            <ShopContext.Provider
                  value={{
                        products,
                        setProducts,
                        cart,
                        setCart,
                        subTotal,
                        total,
                        quantity,
                        getProductQuantity,
                        addToCart,
                        inCreaseQuantity,
                        deCreaseQuantity,
                        removeFromCart,
                        clearFromCart,
                        likeCart,
                        setLikeCart,
                        likeQuantity,
                        toggleLike,
                        removeFromLike,
                        ClearFromLike,
                        searchCategory, setSearchCategory,
                        ratingCategory, setRatingCategory,
                        filterProducts,
                  }}
            >
                  {children}
            </ShopContext.Provider>
      );
}