/** @format */
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import React, { useState } from "react";

const CourseInfoTab = ({ course }) => {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([
    {
      avatar: review1,
      name: "Arlene McCoy",
      time: "about an hour ago",
      comment:
        "Access to IBM Cloud modelling was what I was looking for and Aaron got me the solution.",
    },
    {
      avatar: review2,
      name: "Kristin Watson",
      time: "about 2 hours ago",
      comment:
        "Upon completion of this ipsum dolor sit amet, consectetur adipiscing elit. Odio dictum morbi odio facilisi. At posuere purus, eget pretium sem nec feugiat.",
    },
  ]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setReviews((prevReviews) => [
      ...prevReviews,
      {
        avatar: review1,
        name: "User", 
        time: "Just now",
        comment,
      },
    ]);
    setComment("");
  };

  return (
    <div className="my-8">
      <p
        className="text-[14px] my-6 pb-4 text-[#102844]  "
        style={{ whiteSpace: "pre-line" }}
      >
        {course.description}
      </p>
      <hr />
      <h2 className="text-[#102844] text-md mt-6">Reviews</h2>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="pb-6 border-b gap-4 flex items-start space-x-2 my-8">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="text-[#102844] mb-2">{review.name}</h4>
              <p className="text-xs text-[#767278] mb-4">{review.time}</p>
              <p className="text-sm text-[#767278]">{review.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      <p className=" text-md text-[#102844] mt-8">Leave a Comment</p>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          className="w-full mt-2 p-6 bg-[#F8F8FB] text-xs"
          placeholder="Write your comments here..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          type="submit"
          className="text-xs mt-2 py-3 px-4 bg-[#4C6FFF] text-white rounded shadow-sm focus:outline-none  "
        >
          Publish Review
        </button>
      </form>
    </div>
  );
};

export default CourseInfoTab;
