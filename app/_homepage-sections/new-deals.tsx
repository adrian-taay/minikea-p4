import React from "react";

type NewDealType = {
  category: string;
  headline: string;
  href: string;
  img: string;
};

const newDeals: NewDealType[] = [
  {
    category: "Home",
    headline: "50% off on select items",
    href: "home",
    img: "",
  },
  {
    category: "Apparel",
    headline: "50% off on select items",
    href: "",
    img: "",
  },
  {
    category: "Apparel",
    headline: "50% off on select items",
    href: "",
    img: "",
  },
  {
    category: "Apparel",
    headline: "50% off on select items",
    href: "",
    img: "",
  },
  {
    category: "Apparel",
    headline: "50% off on select items",
    href: "",
    img: "",
  },
  {
    category: "Apparel",
    headline: "50% off on select items",
    href: "",
    img: "",
  },
];

export default function NewDealsSection() {
  const NewDealsWrapper = (
    <>
      {newDeals.map((item, index) => (
        <div
          key={index}
          className="bg-stone-300 aspect-square flex flex-col justify-center items-center gap-4"
        >
          <span>{item.category}</span>
          <span className="text-lg font-semibold">{item.headline}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
      {NewDealsWrapper}
    </div>
  );
}
