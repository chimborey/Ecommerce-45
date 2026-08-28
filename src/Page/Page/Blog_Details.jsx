import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Blog_Details_hero from "../../Components/Blog/Blog_Details_Hero";
import { blogHeroData } from "../../Data/Main/BlogData";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { FaRegCommentDots, FaArrowLeft } from "react-icons/fa";
import artical_des1 from "../../assets/image/artical-des1.jpg"
import artical_des2 from "../../assets/image/artical-des2.webp"
import blog_det_gallery1 from "../../assets/image/blog-det-gallery1.avif"
import blog_det_gallery2 from "../../assets/image/blog-det-gallery2.webp"
import blog_det_gallery3 from "../../assets/image/blog-det-gallery3.avif"
import blog_det_gallery4 from "../../assets/image/blog-det-gallery4.avif"
import blog_det_gallery5 from "../../assets/image/blog-det-gallery5.avif"
import blog_det_gallery6 from "../../assets/image/blog-det-gallery6.avif"

export default function Blog_Details() {
      const { id } = useParams();

      // រកមើលទិន្នន័យ Blog តាម ID
      const blogCart = blogHeroData.find((item, index) => parseInt(item.id || index + 1) === parseInt(id));

      // State សម្រាប់ដូររូបភាព Active (ចាប់ផ្តើមដោយរូបភាពដើមរបស់ blogCart)
      const [activeImg, setActiveImg] = useState("");

      // កំណត់តម្លៃ activeImg ពេល blogCart ផ្លាស់ប្តូរ ឬទвантаចូលដំបូង
      useEffect(() => {
            if (blogCart?.imgUrl) {
                  setActiveImg(blogCart.imgUrl);
            }
      }, [blogCart]);

      if (!blogCart) {
            return (
                  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-gray-500 text-lg font-medium">
                        <p>Blog post not found!</p>
                        <Link
                              to="/blog"
                              className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-all"
                        >
                              Back to Blog
                        </Link>
                  </div>
            );
      }

      const blogDetailsImageUrlData = [
            {
                  imgUrl: blog_det_gallery1,
            },
            {
                  imgUrl: blog_det_gallery2,
            },
            {
                  imgUrl: blog_det_gallery3,
            },
            {
                  imgUrl: blog_det_gallery4,
            },
            {
                  imgUrl: blog_det_gallery5,
            },
            {
                  imgUrl: blog_det_gallery6,
            },

      ]
      return (
            <>
                  {/* =========================== Blog_Details_hero ================== */}
                  <Blog_Details_hero />

                  <section className="w-full overflow-hidden py-14 bg-gray-50/50">
                        <main className="md:max-w-7xl mx-auto container px-4 space-y-6">

                              {/* 🟢 Back to Blog Button */}
                              <div>
                                    <Link
                                          to="/blog"
                                          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm"
                                    >
                                          <FaArrowLeft className="text-xs" />
                                          <span>Back to Blog</span>
                                    </Link>
                              </div>

                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                    {/* ================================= 📌 Blog Main Content ================================= */}
                                    <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                                          {/* Main Featured Image (Active Image) */}
                                          <div className="w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                                                <img
                                                      src={activeImg || blogCart?.imgUrl}
                                                      alt={blogCart?.name}
                                                      className="w-full h-full object-cover object-center transition-all duration-500"
                                                />
                                          </div>

                                          {/* Meta Info (Date & Comments) */}
                                          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium pb-4 border-b border-gray-100">
                                                <div className="flex items-center gap-2">
                                                      <span className="text-emerald-600 text-lg"><HiMiniCalendarDateRange /></span>
                                                      <span>{blogCart?.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                      <span className="text-emerald-600 text-lg"><FaRegCommentDots /></span>
                                                      <span>{blogCart?.comment}</span>
                                                </div>
                                          </div>

                                          {/* Title */}
                                          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                                                {blogCart?.name}
                                          </h1>

                                          {/* Description Content */}
                                          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                                <p>
                                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer stincidunt cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                </p>
                                                <p>
                                                      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                                                </p>
                                          </div>

                                          {/* image + name + desc + tags */}
                                          <div className="flex flex-col space-y-6">

                                                {/* 🟢 រូបភាពទាំងពីរតម្រៀបគ្នាចំហៀងគ្នា (ស្អាតទាំងលើទូរស័ព្ទ និងកុំព្យូទ័រ) */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                      <img src={artical_des1} alt="Article image 1" className="w-full h-72 rounded-xl object-center object-cover shadow-sm" />
                                                      <img src={artical_des2} alt="Article image 2" className="w-full h-72 rounded-xl object-center object-cover shadow-sm" />
                                                </div>

                                                {/* 🟢 ចំណងជើង (ដក <br /> ចេញ ដើម្បីឱ្យវាធ្លាក់អក្សរដោយខ្លួនឯងតាមទំហំអេក្រង់) */}
                                                <h5 className="text-lg md:text-2xl font-bold text-gray-800 leading-snug">
                                                      I think you for the recognition of the brilliance. It's something reflected from our soul to the outside world - an emotion.
                                                </h5>

                                                {/* 🟢 អត្ថបទពិស្តារ (បន្ថែមទំហំអក្សរ និងដំឡើង Line-height ឱ្យងាយអាន) */}
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est a aspernatur assumenda dicta sit odio ut consequatur maxime laborum dolorem labore officiis quos, nobis ipsam nihil. Quae asperiores quos magni beatae rem fugit illum nam maxime et eaque accusamus, aliquam, nisi incidunt laudantium commodi dignissimos, vel doloribus nemo? Autem totam sint illo ad, ex laudantium! Corporis sunt nihil vero vitae voluptates voluptate cumque repellendus ut, enim soluta, fuga deleniti quia suscipit quam porro, velit autem nam optio. Fugit delectus animi mollitia facere repellendus aperiam est reprehenderit, facilis et, vel, voluptas molestiae blanditiis. Optio, consequatur itaque dignissimos reiciendis molestiae consequuntur.
                                                </p>

                                                {/* 🟢 Tags */}
                                                <div className="flex flex-col space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                      <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-2 border-b border-gray-100">
                                                            Tags
                                                      </h5>
                                                      <div className="flex flex-wrap gap-2 pt-1">
                                                            {["Fruit", "Grocery", "Vegetable", "Dried Fruit"].map((tag, idx) => (
                                                                  <button
                                                                        key={idx}
                                                                        className="py-1.5 px-3.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 hover:bg-black hover:text-white hover:border-black duration-300 transition-all text-xs font-medium"
                                                                  >
                                                                        {tag}
                                                                  </button>
                                                            ))}
                                                      </div>
                                                </div>

                                          </div>
                                    </div>

                                    {/* ================================= 📌 Sidebar (Recent Posts) ================================= */}
                                    <div className="space-y-6">

                                          {/* Recent Posts */}
                                          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                                <h3 className="font-bold text-gray-800 text-lg border-b border-gray-100 pb-3">
                                                      Recent Posts
                                                </h3>
                                                <div className="space-y-4">
                                                      {
                                                            blogHeroData
                                                                  .filter((item, index) => parseInt(item.id || index + 1) !== parseInt(id))
                                                                  .slice(0, 4)
                                                                  .map((post, idx) => (
                                                                        <div
                                                                              key={idx}
                                                                              onClick={() => setActiveImg(post.imgUrl)}
                                                                              className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all ${activeImg === post.imgUrl ? 'bg-emerald-50 border border-emerald-200' : 'hover:bg-gray-50'
                                                                                    }`}
                                                                        >
                                                                              <img src={post.imgUrl} alt={post.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                                                                              <div className="space-y-1">
                                                                                    <span className="text-xs text-emerald-600 font-medium">{post.date}</span>
                                                                                    <h4 className="text-xs font-bold text-gray-800 line-clamp-2">
                                                                                          {post.name}
                                                                                    </h4>
                                                                              </div>
                                                                        </div>
                                                                  ))
                                                      }
                                                </div>
                                          </div>

                                          {/* -------------------------- description -------------------------- */}
                                          <div className=" flex flex-col space-y-5">

                                                {/* categories */}
                                                <div className="flex flex-col space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                      <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-2 border-b border-gray-100">
                                                            Categories
                                                      </h5>
                                                      <div className="flex flex-wrap gap-2 pt-1">
                                                            {["Bobystore", "Bog", "Cosmoic", "Decorote", "Electranic", "Fashion", "Funiture"].map((category, idx) => (
                                                                  <span
                                                                        key={idx}
                                                                        className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all cursor-pointer"
                                                                  >
                                                                        {category}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>

                                                {/* tags */}
                                                <div className="flex flex-col space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                      <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-2 border-b border-gray-100">
                                                            Tags
                                                      </h5>
                                                      <div className="flex flex-wrap gap-2 pt-1">
                                                            {["Fruit", "Grocery", "Vegetable", "Dried Fruit"].map((tag, idx) => (
                                                                  <button
                                                                        key={idx}
                                                                        className="py-1.5 px-3.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 hover:bg-black hover:text-white hover:border-black duration-300 transition-all text-xs font-medium"
                                                                  >
                                                                        {tag}
                                                                  </button>
                                                            ))}
                                                      </div>
                                                </div>

                                                {/* Instagram */}
                                                <div className="flex flex-col space-y-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                                                      <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-2 border-b border-gray-100">
                                                            Instagram
                                                      </h5>

                                                      <div className="grid grid-cols-3 gap-2.5 pt-1">
                                                            {blogDetailsImageUrlData.map((item, idx) => {
                                                                  const { imgUrl } = item;
                                                                  return (
                                                                        <div
                                                                              key={idx}
                                                                              className="w-full h-20 rounded-xl overflow-hidden cursor-pointer relative group border border-gray-100 shadow-sm"
                                                                        >
                                                                              <img
                                                                                    src={imgUrl}
                                                                                    alt="Instagram post"
                                                                                    className="w-full h-full object-center object-cover group-hover:scale-110 transition-transform duration-500"
                                                                              />
                                                                              {/* Overlay Effect ពេលយក Mouse ដាក់លើ */}
                                                                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                                        </div>
                                                                  );
                                                            })}
                                                      </div>
                                                </div>

                                                {/* 🟢 អត្ថបទពិស្តារ (បន្ថែមទំហំអក្សរ និងដំឡើង Line-height ឱ្យងាយអាន) */}
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est a aspernatur assumenda dicta sit odio ut consequatur maxime laborum dolorem labore officiis quos, nobis ipsam nihil. Quae asperiores quos magni beatae rem fugit illum nam maxime et eaque accusamus, aliquam, nisi incidunt laudantium commodi dignissimos, vel doloribus nemo? Autem totam sint illo ad, ex laudantium! Corporis sunt nihil vero vitae voluptates voluptate cumque repellendus ut, enim soluta, fuga deleniti quia suscipit quam porro, velit autem nam optio. Fugit delectus animi mollitia facere repellendus aperiam est reprehenderit, facilis et, vel, voluptas molestiae blanditiis. Optio, consequatur itaque dignissimos reiciendis molestiae consequuntur.
                                                </p>

                                                {/* Back to Content / Navigation Buttons */}
                                                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">

                                                      {/* Back to Shop */}
                                                      <Link
                                                            to="/shop"
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white hover:border-black duration-300 transition-all shadow-sm"
                                                      >
                                                            <span>&larr; Back to Shop</span>
                                                      </Link>

                                                      {/* Back to Blog */}
                                                      <Link
                                                            to="/blog"
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-600 hover:text-white hover:border-emerald-600 duration-300 transition-all shadow-sm"
                                                      >
                                                            <span>Back to Blog &rarr;</span>
                                                      </Link>

                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </main>
                  </section>
            </>
      );
}