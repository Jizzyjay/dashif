import React from "react";
import CustomerReviewCard from "../CustomerReviewCard/page";
import ReviewImages from "../ReviewImages/page";

function CustomerReviewsPage() {
  const customerReviews = [
    {
      name: "John Doe",
      position: "Marketing Manager",
      image: "/customer.jpg",
      stars: 4,
      feedback:
        "As a PM who can't code, I used to spend my Mondays copying data between spreadsheets. Now I just tell the AI what I want to track and it builds exactly that!",
    },
    {
      name: "Jane Smith",
      position: "Product Owner",
      image: "/customer2.jpg",
      stars: 5,
      feedback:
        "This platform has completely changed the way we track our key metrics. Super easy to use and very effective!",
    },
    {
      name: "Samuel Green",
      position: "Business Analyst",
      image: "/customer3.jpg",
      stars: 4,
      feedback:
        "Tracking our progress used to be a hassle, but this tool has made it effortless and insightful.",
    },
    {
      name: "John Doe",
      position: "Marketing Manager",
      image: "/customer.jpg",
      stars: 4,
      feedback:
        "As a PM who can't code, I used to spend my Mondays copying data between spreadsheets. Now I just tell the AI what I want to track and it builds exactly that!",
    },
    {
      name: "Jane Smith",
      position: "Product Owner",
      image: "/customer2.jpg",
      stars: 5,
      feedback:
        "This platform has completely changed the way we track our key metrics. Super easy to use and very effective!",
    },
    {
      name: "Samuel Green",
      position: "Business Analyst",
      image: "/customer3.jpg",
      stars: 4,
      feedback:
        "Tracking our progress used to be a hassle, but this tool has made it effortless and insightful.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <div className="flex flex-row justify-center items-center gap-4">
          <ReviewImages
            images={[
              "/public/profile.avif",
              "/public/profile.avif",
              "/public/profile.avif",
              "/public/profile.avif",
              "/public/profile.avif",
            ]}
          />

          <p>
            15K+ <span className="text-[#888888]">power users</span>
          </p>
        </div>
        <h1 className="text-white font-medium text-3xl md:text-[48px]">
          Hear from our customers
        </h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {customerReviews.map((review, index) => (
          <CustomerReviewCard key={index} review={review} />
        ))}
      </section>
    </div>
  );
}

export default CustomerReviewsPage;
