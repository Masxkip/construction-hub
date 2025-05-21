import React from "react";

const newsData = [
  {
    id: 1,
    title: "The 2023 Reloaded Plans",
    content: "Farmers of better equipment can make plans as needed.",
    image: "/images/b1.jpg",
  },
  {
    id: 2,
    title: "Global Growth Strategies",
    content: "We expand globally, building new warehouses across Africa.",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Tech Innovation Lead",
    content: "Our AI-powered machinery is revolutionizing farming.",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "New Partnership Announced",
    content: "Partnering with EcoHarvest for sustainable futures.",
    image: "/images/news4.jpg",
  },
];

const CompanyNews = () => {
  return (
    <section className="company-news">
      <h2 className="section-header">Company News</h2>
      <div className="news-container">
        {newsData.map((news) => (
          <div className="news-block" key={news.id}>
        <img src={news.image} alt={news.title} className="news-image" />
        <div className="news-text">
            <h3 className="news-title">{news.title}</h3>
            <p className="news-content">{news.content}</p>
        </div>
        </div>

        ))}
      </div>
    </section>
  );
};

export default CompanyNews;
