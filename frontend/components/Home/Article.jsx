import React from "react";

const articles = [
  {
    id: 1,
    title: "Card title",
    description:
      "Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.",
    image: "https://source.unsplash.com/400x300/?fitness",
  },
  {
    id: 2,
    title: "Card title",
    description:
      "Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.",
    image: "https://source.unsplash.com/400x300/?fruit",
  },
  {
    id: 3,
    title: "Card title",
    description:
      "Card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi.",
    image: "https://source.unsplash.com/400x300/?health",
  },
];

const ArticleComponent = () => {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800">Our Latest Articles</h2>
      <p className="text-gray-500 mt-2">Written by our experts</p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`bg-white shadow-lg rounded-lg p-5 transform transition duration-300 ${
              index === 0 ? "md:col-span-2 md:flex md:items-center" : ""
            }`}
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-blue-600 rounded-t-lg"></div>
            </div>

            <div className={`${index === 0 ? "md:ml-6" : ""}`}>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{article.description}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold mt-3 inline-block hover:underline"
              >
                See more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;