import React from "react";
import HeroHeader from "../components/HeroHeader";
import bgImage from "/images/c1.jpg"; 

const newsData = [
  {
    id: 1,
    title: "Celebrating 20 Years In Business",
    content: "AAA Construction Equipment Market. celebrated a milestone of 20 years in business. Jay Shafer founded the family-owned company in 2003. “20 years is a great accomplishment and worth celebrating,” said Jay. Jay and his staff held a celebration party to thank everyone who has contributed to the success of the company. The celebration party for the 20yr milestone was a free event for customers to attend. Enjoying drinks and food at the Sparks Nevada location, where they had various pieces of equipment on display for all to see. The event brought well over 200 people by the dealership to celebrate with Jay Shafer and his staff members. Shafer Equipment looks forward to the future, we will continue to work hard to accomplish future goals.",
    image: "/images/20ya.jpg",
  },
  {
    id: 2,
    title: "Trusted Dealership for Rokbak Sales & Rentals",
    content: "AAA Construction Equipment Market. has been a long-term Dealer for Rokbak Articulated Trucks, In August of 2023 Shafer Equipment was recognized as a trusted dealership for continuing to provide customers with Rokbak trucks for rental & sale. Rokbak trucks have proven to be reliable quality machines. One of Shafer Equipment’s well known customers, Reno Tahoe Construction also referred to as RTC, had reached out to Shafer Equipment Company when it was granted a very large excavation project. The project is so massive it is 107,000 acres, it’s the largest industrial park in the world. ROKBAK has recognized RTC for the hard work they have been doing within the Tahoe-Reno Industrial Center. This massive project requires the use of a Rokbak RA40 articulated hauler. This is exactly the type of project the RA40 was designed for & RTC is putting the ROKBAK hauler to work. They have hauled and placed over three million cubic yards of fill material, with another 2.8 million cubic yards yet to go, over 230 acres. The RA40’S performance has proven to be the best and is an extremely vital piece of equipment. “It’s great to see that our hauler is having a positive impact on such a large-scale project with RTC in Nevada,” says Rokbak Regional Sales Manager Greg Gerbus. “Rokbak haulers are robust and reliable, and this is exactly the kind of project that the RA40 was designed for.” Less than two years after rebranding, Rokbak articulated haulers can now be found across the United States. AAA Construction Equipment Market, is proud to be a dealer for such a well-respected manufacturer, such as ROKBAK.",
    image: "/images/shafer-rokbak.jpg",
  },
  {
    id: 3,
    title: "Top 6 total parts increase 2021, Sandvik Rock Processing North America",
    content: "AAA Construction Equipment Market. was #1 in Sandvik Rock Processing’s North Americas Top 6 Award for total parts increase in 2021. At AAA Construction we take pride in providing excellence in customer support with every aspect. Our business grew dramatically from 2020-2021. We had a 360% increase in 2021 over our prior year. There were several factors that helped us with the increase, A big part of it being Hammer sales. We also were able to supply our customers with any Hammer tools needed & with the use of Sandvik’s Hammer rebuild program. Sandvik rebuilt Hammers carry a 1-year warranty. Shafer Equipment is grateful to our customers who are responsible for our successes and appreciate the acknowledgement by Sandvik Rock Processing North America.",
    image: "/images/shafer1.jpg",
  },
  {
    id: 4,
    title: "Dealer Of the Year Awarded for 2021 highest market Share",
    content: "AAA Construction Equipment Market. appreciates ROKBAK for the acknowledgement for our hard work and dedication to the industry. ROKBAK is the old Terex Trucks company that changed their name from Terex to ROKBAK after the purchase by Volvo. We have always had a good rental market, but a few big projects is what helped us with recent success in the articulated truck market. Our business grew dramatically from 2020-2021. We had about 40% growth attributed to a large project we helped supply and good old fashioned hard work by our sales group increased our Sales, Rentals, Parts & Service departments. Our customers use the 40-ton haulers to move large quantities of dirt & rock. As our area continues to grow toward the foothills, scrapers are not effective because of the rock, so the performance & reliability of ROKBAK Equipment is a strong feature & vital to our customer’s needs. For over 80 years in the making, today’s robust reliable Rokbak haulers can be traced all the way back to 1934 & the world’s first off-road dump truck. This pioneering machine was a heavy-hauling powerhouse forging a path for the ground-breaking haulers that followed. Rokbak, built A whole business on reliability, from brutal heat to biting cold, their articulated haulers are trusted to perform in the toughest conditions around the world. AAA Construction believes they build the best haulers & giving you rock solid support, wherever you are, whatever you need.",
    image: "/images/shafer2.webp",
  },
];

const CompanyNews = () => {
  return (
             <>
      <HeroHeader
        title="Company News"
        subtitle="Learn More About Our Team and Mission"
        backgroundImage={bgImage}
      />
    <section className="company-news">
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
    </>
  );
};

export default CompanyNews;
