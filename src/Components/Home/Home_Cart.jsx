

export default function Home_Cart() {

      const homeCartData = [
            {
                  name: "Deals of the weeks",
                  desc: "views offers",
            },
            {
                  name: "Biggest Discount",
                  desc: "views offers",
            },
            {
                  name: "COmbos you can't miss",
                  desc: "views offers",
            },
            {
                  name: "The $19.00 concer",
                  desc: "views offers",
            },
            {
                  name: "Limited time offer",
                  desc: "views offers",
            },
      ]
      return (
            <section className=" w-full overflow-hidden">
                  <main className=" mt-12 container md:max-w-7xl mx-auto">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                              {
                                    homeCartData.map((item) => {
                                          const{name, desc} = item
                                          return(
                                                <div className=" w-full overflow-hidden py-3 px-3 rounded-lg shadow-sm backdrop-blur-sm bg-white hover:shadow-gray-500 hover:shadow-md hover:backdrop-blur-md duration-300 transition-all">
                                                      <h3 className=" text-md font-bold text-black">{name}</h3>
                                                      <h5 className=" text-sm text-yellow-500 capitalize">{desc}</h5>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </main>
            </section>
      )
}