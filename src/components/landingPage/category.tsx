import Link from "next/link";
import { categories } from "../../utils";



const Category = () => {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Browse By Category
        </h1>

        <p className="text-gray-500 mt-3">
          Discover recipes by meal type
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
             <Link
              href={`/recipes?category=${category.title}`}
              key={index}
            >
              <div
                className="bg-gray-50 hover:bg-gray-100 transition rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-lg cursor-pointer"
              >

                <div
                  className={`${category.bg} p-5 rounded-2xl`}
                >
                  <Icon className="text-white" size={32} />
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h2>

              </div>
            </Link>
          );
        })}

      </div>
    </section>
  );
};

export default Category;