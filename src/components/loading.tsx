const Loading = () => {
    const foods = ["🍅", "🥕", "🥦", "🌽", "🧄", "🧅", "🍕", "🍔"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] overflow-hidden relative">

            {foods.map((item, index) => (
                <div
                    key={index}
                    className="absolute text-4xl animate-bounce"
                    style={{
                        top: `${10 + index * 10}%`,
                        left: `${5 + index * 12}%`,
                        animationDelay: `${index * 0.2}s`,
                    }}
                >
                    {item}
                </div>
            ))}

            <div className="flex flex-col items-center z-10">

                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div>

                    <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>

                <h1 className="text-2xl font-bold mt-6 text-gray-800">
                    Cooking Your Recipe...
                </h1>

                <p className="text-gray-500 mt-2">
                    Fresh ingredients are on the way 🍽️
                </p>

            </div>
        </div>
    );
};

export default Loading;