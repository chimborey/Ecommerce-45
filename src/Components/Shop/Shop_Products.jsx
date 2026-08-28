

import { useContext, useEffect, useState } from "react"
import organic_categories_banner from "../../assets/image/organic-categories-banner.webp"
import Shop_sale_banner from "../../assets/image/Shop-sale-banner.webp"
import { ShopContext } from "../../Context/ShopContext"
import SleketonCart from "../../Sleketon/SleketonCart"
import { FaEye, FaHeart, FaShoppingBag, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function Shop_Products() {
      const { filterProducts, likeCart, toggleLike, addToCart, inCreaseQuantity, getProductQuantity, deCreaseQuantity, searchCategory, setSearchCategory, ratingCategory, setRatingCategory, } = useContext(ShopContext)

      const [loading, setLoading] = useState(true)
      useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 2000)
            return () => clearTimeout(timer)
      }, [])

      const seketon = 6
      return (
            <section className=" w-full overflow-hidden py-14">
                  <main className=" md:max-w-7xl container mx-auto">
                        <div className=" flex flex-col md:flex-row gap-3">

                              {/* ================================ flex-1 for category ================================ */}
                              <div className=" flex-1 flex-col">

                                    {/* -------------------------------- Search Bar -------------------------------- */}
                                    <div className="mb-6">
                                          <div className="relative w-full">
                                                <input
                                                      type="text"
                                                      placeholder="Search organic products..."
                                                      value={searchCategory || ""}
                                                      onChange={(e) => setSearchCategory(e.target.value)}
                                                      className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
                                                />
                                                {/* Clear / Search Icon */}
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                      </svg>
                                                </div>
                                          </div>
                                    </div>

                                    {/* -------------------------------- Rating Filter -------------------------------- */}
                                    <div className="w-full bg-white p-5 rounded-2xl border border-gray-100 shadow-md space-y-4 mb-6">
                                          <h3 className="text-base font-bold text-gray-800 border-b pb-2">Filter by Rating</h3>

                                          <div className="flex flex-col gap-2.5">
                                                {[5, 4, 3, 2, 1].map((star) => (
                                                      <button
                                                            key={star}
                                                            onClick={() => setRatingCategory(star)}
                                                            className={`flex items-center justify-between p-2 rounded-xl transition-all duration-200 cursor-pointer ${ratingCategory === star
                                                                  ? 'bg-emerald-50 text-emerald-600 font-semibold border border-emerald-200'
                                                                  : 'hover:bg-gray-50 text-gray-600'
                                                                  }`}
                                                      >
                                                            <div className="flex items-center gap-2 text-amber-500 text-sm">
                                                                  {[...Array(5)].map((_, i) => (
                                                                        <FaStar
                                                                              key={i}
                                                                              className={i < star ? 'text-amber-500' : 'text-gray-200'}
                                                                        />
                                                                  ))}
                                                                  <span className="text-xs text-gray-600 ml-1 font-medium">
                                                                        {star === 5 ? '5.0 Stars' : `${star} Stars & Up`}
                                                                  </span>
                                                            </div>

                                                            {/* Checkbox or indicator dot */}
                                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${ratingCategory === star ? 'border-emerald-600 bg-emerald-600' : 'border-gray-300'
                                                                  }`}>
                                                                  {ratingCategory === star && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                                            </div>
                                                      </button>
                                                ))}

                                                {/* ជម្រើសសម្រាប់លុបការត្រង (Reset Filter) */}
                                                {ratingCategory && (
                                                      <button
                                                            onClick={() => setRatingCategory(null)}
                                                            className="text-xs text-rose-500 hover:underline text-center pt-2 cursor-pointer"
                                                      >
                                                            Clear Rating Filter
                                                      </button>
                                                )}
                                          </div>
                                    </div>

                                    {/* -------------------------------- Top Rated / Best Sellers -------------------------------- */}
                                    <div className="w-full bg-white p-5 rounded-2xl border border-gray-100 shadow-md space-y-4 mb-6">
                                          <h3 className="text-base font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                                                <FaStar className="text-amber-500 text-sm" />
                                                <span>Best Sellers</span>
                                          </h3>

                                          <div className="flex flex-col gap-3">
                                                {filterProducts
                                                      ?.slice(0, 3) // យកតែ ៣ ផលិតផលមកបង្ហាញ
                                                      ?.map((item) => {
                                                            const { id, name, price, imgUrl1, rating } = item;
                                                            return (
                                                                  <Link
                                                                        to={`/shop/${id}`}
                                                                        key={id}
                                                                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-gray-100"
                                                                  >
                                                                        {/* Image */}
                                                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                                                                              <img
                                                                                    src={imgUrl1}
                                                                                    alt={name}
                                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                              />
                                                                        </div>

                                                                        {/* Details */}
                                                                        <div className="flex flex-col flex-1 min-w-0">
                                                                              <h4 className="text-sm font-bold text-gray-800 truncate capitalize group-hover:text-emerald-600 transition-colors">
                                                                                    {name}
                                                                              </h4>

                                                                              <div className="flex items-center gap-1 text-amber-500 text-xs my-0.5">
                                                                                    <FaStar />
                                                                                    <span className="font-semibold text-gray-600">{rating || '4.8'}</span>
                                                                              </div>

                                                                              <span className="text-sm font-bold text-emerald-600">
                                                                                    {price}
                                                                              </span>
                                                                        </div>
                                                                  </Link>
                                                            );
                                                      })
                                                }
                                          </div>
                                    </div>

                                    <div className="">
                                          {/* banner */}
                                          <img src={Shop_sale_banner} alt="Shop_sale_banner" className=" w-full h-96 object-center rounded-lg" />
                                    </div>
                              </div>

                              {/* ================================ flex-2 for products ================================ */}
                              <div className="flex-[2] flex-col">
                                    {/* -------------------------------- banner -------------------------------- */}
                                    <div className="w-full overflow-hidden rounded-lg">
                                          {/* img */}
                                          <img src={organic_categories_banner} alt="organic_categories_banner" className="w-full h-96 object-center rounded-lg" />
                                    </div>

                                    {/* -------------------------------- products -------------------------------- */}
                                    <div className="mt-6 h-[800px] overflow-y-auto no-scrollbar">
                                          {
                                                loading ? (
                                                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                                                            {[...Array(seketon)].map((_, index) => (
                                                                  <SleketonCart key={index} />
                                                            ))}
                                                      </div>
                                                ) : (
                                                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                                                            {
                                                                  filterProducts.length > 0 ? (
                                                                        filterProducts.map((item) => {
                                                                              const { name, id, discount, imgUrl1, imgUrl2, kg, rating, price } = item;
                                                                              const isList = likeCart.some((favItem) => favItem.id === id);
                                                                              const currentAmount = getProductQuantity(id);

                                                                              const handleIncrease = () => {
                                                                                    if (currentAmount === 0) {
                                                                                          addToCart(item);
                                                                                    } else {
                                                                                          inCreaseQuantity(id);
                                                                                    }
                                                                              };

                                                                              return (
                                                                                    <div key={id} className='w-full bg-white overflow-hidden relative space-y-3 p-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl group transition-all duration-300'>

                                                                                          {/* img */}
                                                                                          <div className='w-full h-48 rounded-xl overflow-hidden relative bg-gray-50'>
                                                                                                <img src={imgUrl1} alt="" className='w-full h-full object-center object-cover cursor-pointer group-hover:opacity-0 opacity-100 duration-500 transition-opacity' />
                                                                                                <img src={imgUrl2} alt="" className='w-full h-full object-center object-cover cursor-pointer group-hover:opacity-100 opacity-0 duration-500 transition-opacity absolute inset-0' />

                                                                                                {/* discount */}
                                                                                                {discount && (
                                                                                                      <div className='absolute top-3 left-3 z-10'>
                                                                                                            <span className='text-xs font-bold text-white capitalize bg-rose-600 py-1 px-2.5 rounded-full shadow-sm'>
                                                                                                                  -{discount}
                                                                                                            </span>
                                                                                                      </div>
                                                                                                )}

                                                                                                {/* wishlist and eye buttons */}
                                                                                                <div className='absolute top-3 right-3 z-10 flex flex-col gap-2 overflow-hidden p-1'>
                                                                                                      <button
                                                                                                            onClick={() => toggleLike(item)}
                                                                                                            className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform ${isList
                                                                                                                  ? 'bg-rose-500 text-white scale-105'
                                                                                                                  : 'bg-white/90 text-gray-400 hover:bg-white hover:text-rose-500 hover:scale-110'
                                                                                                                  } opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100`}
                                                                                                      >
                                                                                                            <FaHeart className={`text-sm ${isList ? 'text-white' : 'text-gray-400'}`} />
                                                                                                      </button>

                                                                                                      <Link to={`/shop/${item.id}`}>
                                                                                                            <button className='w-9 h-9 rounded-full bg-white/90 text-gray-400 hover:bg-white hover:text-emerald-600 hover:scale-110 flex items-center justify-center shadow-md transition-all duration-300 transform opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 delay-75'>
                                                                                                                  <FaEye className='text-sm' />
                                                                                                            </button>
                                                                                                      </Link>
                                                                                                </div>
                                                                                          </div>

                                                                                          {/* name */}
                                                                                          <div>
                                                                                                <h3 className='text-base font-bold text-gray-800 truncate capitalize font-sans'>{name}</h3>
                                                                                          </div>

                                                                                          {/* kg + quantity controls */}
                                                                                          <div className='flex items-center justify-between'>
                                                                                                <span className='text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md'>{kg}</span>
                                                                                                <div className='flex items-center gap-2 bg-gray-50 border border-gray-200 py-1 px-2 rounded-lg'>
                                                                                                      <button
                                                                                                            className='text-sm font-bold text-gray-600 hover:text-emerald-600 px-1 cursor-pointer'
                                                                                                            onClick={() => deCreaseQuantity(id)}
                                                                                                      >-</button>

                                                                                                      <span className='text-sm font-semibold text-gray-800 min-w-[16px] text-center'>{currentAmount}</span>

                                                                                                      <button
                                                                                                            className='text-sm font-bold text-gray-600 hover:text-emerald-600 px-1 cursor-pointer'
                                                                                                            onClick={handleIncrease}
                                                                                                      >+</button>
                                                                                                </div>
                                                                                          </div>

                                                                                          {/* price + rating */}
                                                                                          <div className='flex items-center justify-between pt-1'>
                                                                                                <h5 className='text-lg font-bold text-emerald-600'>{price}</h5>
                                                                                                <div className='flex items-center gap-1 text-amber-500 text-xs font-semibold'>
                                                                                                      <FaStar />
                                                                                                      <span>{rating}</span>
                                                                                                </div>
                                                                                          </div>

                                                                                          {/* addToCart */}
                                                                                          <button
                                                                                                onClick={() => addToCart(item)}
                                                                                                className='w-full mt-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white py-2 rounded-xl text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer'
                                                                                          >
                                                                                                <FaShoppingBag className='text-xs' />
                                                                                                <span>Add to cart</span>
                                                                                          </button>
                                                                                    </div>
                                                                              );
                                                                        })
                                                                  ) : (
                                                                        <div className="col-span-full text-center py-10 text-gray-500">
                                                                              មិនមានទំនិញដែលត្រូវស្វែងរកទេ (No products found)
                                                                        </div>
                                                                  )
                                                            }
                                                      </div>
                                                )
                                          }
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}