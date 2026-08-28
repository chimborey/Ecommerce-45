import { useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
import { FaStar, FaShoppingBag, FaHeart, FaArrowLeft } from "react-icons/fa"
import { home_topSellingData } from "../../Data/Main/Home_TopSellingData"

export default function ShopDetails() {
      const { id } = useParams()
      const { addToCart, toggleLike, likeCart } = useContext(ShopContext)
      const [activeTap, setActiveTap] = useState("description")
      // ស្វែងរកផលិតផលតាម ID (ប្រើ String() ដើម្បីការពាររឿង Type Mismatch រវាង Number និង String)
      const product = home_topSellingData?.find((item) => parseInt(item.id) === parseInt(id))

      // State សម្រាប់ប្តូររូបភាពពេលចុចលើ SubImage
      const [activeImg, setActiveImg] = useState(product?.imgUrl1)

      // បើទិន្នន័យមិនទាន់មកដល់
      if (!home_topSellingData) {
            return (
                  <div className="w-full min-h-[60vh] flex items-center justify-center">
                        <p className="text-gray-500 font-medium">Loading product details...</p>
                  </div>
            )
      }

      // បើរកមិនឃើញផលិតផល
      if (!product) {
            return (
                  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                        <p className="text-rose-500 font-bold text-lg">Product not found!</p>
                        <Link to="/shop" className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
                              <FaArrowLeft className="text-xs" /> Back to Shop
                        </Link>
                  </div>
            )
      }

      const { name, price, discount, kg, rating, subImage } = product;

      // ពិនិត្យមើលថា product នេះមាននៅក្នុង likeCart ដែរឬទេ (ប្រើ String() ដើម្បីការពារ Type Mismatch ដូចគ្នា)
      const isLike = likeCart?.some((item) => parseInt(item.id) === parseInt(id));

      return (
            <section className="w-full min-h-screen bg-gray-50/50 py-12">

                  <div className="container mx-auto md:max-w-7xl mt-12">

                        {/* Back Button */}
                        <Link to={-1} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-emerald-600 mb-8 transition-colors">
                              <FaArrowLeft className="text-xs" /> Back
                        </Link>

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

                              {/* Left: Images Section */}
                              <div className="space-y-4">
                                    {/* Main Display Image */}
                                    <div className="relative w-full h-80 md:h-[420px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                                          <img
                                                src={activeImg || product.imgUrl1}
                                                alt={name}
                                                className="w-full h-full object-cover object-center"
                                          />
                                          {discount && (
                                                <span className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                                      -{discount}
                                                </span>
                                          )}
                                    </div>

                                    {/* Sub Images Thumbnails */}
                                    {subImage && subImage.length > 0 && (
                                          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                                                {subImage.map((sub, index) => (
                                                      <button
                                                            key={index}
                                                            onClick={() => setActiveImg(sub.imgUrl)}
                                                            className={`w-20 h-20 mt-3 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${(activeImg || product.imgUrl1) === sub.imgUrl
                                                                  ? "border-emerald-600 shadow-md scale-105"
                                                                  : "border-gray-200 opacity-70 hover:opacity-100"
                                                                  }`}
                                                      >
                                                            <img src={sub.imgUrl} alt="" className="w-full h-full object-cover" />
                                                      </button>
                                                ))}
                                          </div>
                                    )}
                              </div>

                              {/* Right: Product Details Information */}
                              <div className="flex flex-col justify-between space-y-6">
                                    <div className="space-y-4">
                                          <div className="flex items-center justify-between">
                                                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                                                      {kg}
                                                </span>
                                                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                                                      <FaStar />
                                                      <span>{rating}</span>
                                                </div>
                                          </div>

                                          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 capitalize">
                                                {name}
                                          </h1>

                                          <div className="text-2xl font-bold text-emerald-600">
                                                {price}
                                          </div>

                                          <p className="text-gray-500 text-sm leading-relaxed">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio pariatur eaque adipisci? Iusto dolore aliquam, aut eaque culpa ipsa dolores pariatur dolorem laudantium. Necessitatibus expedita pariatur eum magnam repellendus eveniet beatae, accusamus modi explicabo. Corrupti odit unde quis magni? At, quo. Quod ab libero porro unde, suscipit fuga! Vel blanditiis tempora, libero tempore quod sequi! Eum quos dolor minus voluptatum magnam officia veritatis, animi omnis nemo. Enim reprehenderit quis natus modi! Distinctio eveniet odit molestias voluptatem recusandae minus commodi harum, placeat, optio nemo vel quidem veniam obcaecati. Maxime delectus error consectetur, corrupti eius culpa, expedita cum aliquid itaque explicabo porro nihil corporis illo omnis a deserunt nobis sunt.
                                          </p>

                                          {/* បន្ថែមចំណុចពិសេសៗរបស់ទំនិញ (Product Highlights) ដើម្បីបំពេញកន្លែងទំនេរ */}
                                          <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-100 text-xs text-gray-600">
                                                <div className="flex items-center gap-2">
                                                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                      <span>100% Organic & Fresh</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                      <span>Fast Delivery Available</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                      <span>Stock: <strong className="text-gray-700">In Stock</strong></span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                      <span>Secure Checkout</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Action Buttons & Extra Info */}
                                    <div className="space-y-4">
                                          <div className="flex items-center gap-4 pt-2">
                                                <button
                                                      onClick={() => addToCart(product)}
                                                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                                                >
                                                      <FaShoppingBag className="text-sm" />
                                                      <span>Add to Cart</span>
                                                </button>

                                                {/* Like / Wishlist Button */}
                                                <button
                                                      onClick={() => toggleLike && toggleLike(product)}
                                                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ${isLike
                                                            ? "bg-rose-500 text-white shadow-md shadow-rose-200"
                                                            : "bg-rose-50 hover:bg-rose-100 text-rose-500"
                                                            }`}
                                                      title={isLike ? "Remove from Wishlist" : "Add to Wishlist"}
                                                >
                                                      <FaHeart />
                                                </button>
                                          </div>

                                          {/* ផ្នែកបញ្ជាក់ពីការដឹកជញ្ជូន (Delivery Banner) */}
                                          <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-xs text-gray-500 flex items-center justify-between">
                                                <span>🚚 Free delivery on orders over $2</span>
                                                <span className="text-gray-600 font-semibold cursor-pointer opacity-45">$2</span>
                                          </div>
                                    </div>
                              </div>

                        </div>

                        {/* --- ផ្នែក Active Tabs (Description / Additional Info / Reviews) នៅខាងក្រោម --- */}
                        <div className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
                              {/* Tab Headers */}
                              <div className="flex items-center gap-8 border-b border-gray-100 pb-4">
                                    <button
                                          onClick={() => setActiveTap("description")}
                                          className={`font-semibold text-sm pb-2 transition-all cursor-pointer relative ${activeTap === "description"
                                                ? "text-emerald-600 border-b-2 border-emerald-600"
                                                : "text-gray-400 hover:text-gray-600"
                                                }`}
                                    >
                                          Description
                                    </button>
                                    <button
                                          onClick={() => setActiveTap("additional")}
                                          className={`font-semibold text-sm pb-2 transition-all cursor-pointer relative ${activeTap === "additional"
                                                ? "text-emerald-600 border-b-2 border-emerald-600"
                                                : "text-gray-400 hover:text-gray-600"
                                                }`}
                                    >
                                          Additional Information
                                    </button>
                                    <button
                                          onClick={() => setActiveTap("reviews")}
                                          className={`font-semibold text-sm pb-2 transition-all cursor-pointer relative ${activeTap === "reviews"
                                                ? "text-emerald-600 border-b-2 border-emerald-600"
                                                : "text-gray-400 hover:text-gray-600"
                                                }`}
                                    >
                                          Reviews (3)
                                    </button>
                              </div>

                              {/* Tab Content Display */}
                              <div className="pt-6 text-gray-600 text-sm leading-relaxed">
                                    {activeTap === "description" && (
                                          <div className="space-y-3">
                                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eum inventore laboriosam reiciendis officia. Repudiandae optio possimus nobis nemo laboriosam. Numquam voluptas officia sint suscipit laudantium mollitia, molestiae omnis illum architecto atque quos odio ipsam ratione animi qui! Aspernatur placeat fuga, repellendus natus error nemo, neque et tempora voluptate non ut quidem maxime est ducimus quibusdam mollitia eos? Consequatur atque quaerat nesciunt voluptatum. Voluptatem, quibusdam ducimus officiis minima hic veritatis possimus placeat ex nobis, aperiam excepturi distinctio nam labore recusandae assumenda! Fugit quos asperiores omnis repudiandae accusantium porro voluptates dolorum vero iste ea non corrupti consequatur quam, ut eligendi! Vel commodi sit labore id debitis, laboriosam perferendis incidunt molestiae minus blanditiis possimus perspiciatis, nihil suscipit eum autem ipsa ducimus, omnis modi? Ullam, unde nostrum! Error sequi ipsum saepe unde natus, voluptate nobis, voluptas et numquam ipsa exercitationem harum ut cumque adipisci? Maiores omnis laborum repellat vero dolorem voluptate, ducimus eveniet excepturi facere quisquam debitis quis odio architecto corporis distinctio, voluptatibus atque eaque nihil ipsam nesciunt, sunt aut saepe neque! Molestiae, iste nihil veritatis eaque quidem eum nostrum architecto? Quos minima vitae inventore blanditiis laborum, vero aperiam modi ut quaerat ipsa similique facere eos placeat. Quisquam, cumque? Dicta, inventore unde nesciunt aperiam ipsum doloribus, reprehenderit exercitationem praesentium maxime facilis totam quos distinctio aliquam sit! Tempore nemo, soluta dolores fuga fugiat culpa! Fugit illo voluptas cupiditate qui, animi ratione, voluptates tempore natus reiciendis nihil sunt, quasi architecto enim labore. Necessitatibus, ex reiciendis. Molestiae voluptas sed est dolore quo sapiente quam repellat? Commodi, optio reiciendis laboriosam eos qui ducimus saepe non numquam voluptatibus dolorum repudiandae, consequatur unde rerum quasi possimus delectus, cumque velit. Amet quaerat sed dignissimos eius quasi, facilis omnis quam tempore, expedita blanditiis placeat ea dolores perspiciatis eligendi at. Iure recusandae quod quos incidunt fugit est maxime officiis ut ipsa? Dolorem minima hic explicabo, atque ex voluptas natus repellendus rem?</p>
                                          </div>
                                    )}

                                    {activeTap === "additional" && (
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                      <span className="font-medium text-gray-500">Weight</span>
                                                      <span className="text-gray-800">{kg}</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                      <span className="font-medium text-gray-500">Category</span>
                                                      <span className="text-gray-800">Fresh Organic</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                      <span className="font-medium text-gray-500">Rating</span>
                                                      <span className="text-gray-800">{rating} Stars</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                      <span className="font-medium text-gray-500">Vendor</span>
                                                      <span className="text-gray-800">ZonKhmer Store</span>
                                                </div>
                                          </div>
                                    )}

                                    {activeTap === "reviews" && (
                                          <div className="space-y-4">
                                                <div className="border-b border-gray-100 pb-4">
                                                      <div className="flex items-center justify-between mb-1">
                                                            <strong className="text-gray-800">Chanthoeun Dara</strong>
                                                            <span className="text-xs text-amber-500 font-bold">★★★★★</span>
                                                      </div>
                                                      <p className="text-xs text-gray-500">Very fresh and fast delivery! Highly recommended.</p>
                                                </div>
                                                <div className="border-b border-gray-100 pb-4">
                                                      <div className="flex items-center justify-between mb-1">
                                                            <strong className="text-gray-800">Srey Leap</strong>
                                                            <span className="text-xs text-amber-500 font-bold">★★★★☆</span>
                                                      </div>
                                                      <p className="text-xs text-gray-500">Good quality product, packaging was nice.</p>
                                                </div>
                                          </div>
                                    )}
                              </div>
                        </div>
                  </div>
            </section>
      )
}