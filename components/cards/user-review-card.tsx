import { DummyProductRatingsType } from "@/types/dummy-products-type";
import { Avatar } from "@chakra-ui/react";
import { IoMdStar } from "react-icons/io";

export default function UserReviewCard({
  review,
}: {
  review: DummyProductRatingsType;
}) {
  const User = (
    <div className="flex flex-col items-start">
      <p className="font-semibold">{review.reviewerName}</p>
      <p className="text-sm">{review.reviewerEmail}</p>
      <p className="text-sm text-neutral-400">{review.date}</p>
    </div>
  );

  const StarRating = (
    <div className="flex mb-4">
      {[...Array(5)].map((_, index) => (
        <IoMdStar
          key={index}
          fill={index <= review.rating ? "black" : "gray"}
        />
      ))}
    </div>
  );

  return (
    <div className="w-5/12 mx-auto flex gap-2">
      <div className="flex border flex-1 p-6 gap-4">
        <Avatar />
        <div className="flex flex-col items-start">
          {User}
          {StarRating}
          {review.comment}
        </div>
      </div>
    </div>
  );
}
