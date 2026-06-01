
const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center bg-[#fff7f0] px-6">

            <div className="max-w-4xl mx-auto text-center">

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    Discover Your Next
                    <br />
                    <span className="text-red-500">
                        Favorite Recipe
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-8 mt-6 max-w-2xl mx-auto">
                    Explore thousands of delicious recipes from around the world.
                    Find what to cook today!
                </p>

                {/* Search Bar */}
                <div className="mt-10 flex items-center bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl mx-auto">

                    <input
                        type="text"
                        placeholder="Search for recipes, ingredients, or cuisines..."
                        className="w-full px-6 py-5 outline-none text-gray-700"
                    />

                    <button className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-5 font-semibold">
                        Search
                    </button>

                </div>

            </div>

        </section>
    )
}

export default Hero