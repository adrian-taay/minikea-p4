"use client";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import UserReviewCard from "../cards/user-review-card";
import { DummyProductType } from "@/types/dummy-products-type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdCheckCircle,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Navigation } from "swiper/modules";

export default function ProductInfoPolicies({
  data,
}: {
  data: DummyProductType;
}) {
  const detailsObj = {
    brand: data.brand ? data.brand : "No brand specified.",
    SKU: data.sku,
    weight: data.weight.toFixed(2),
    width: data.dimensions.width.toFixed(2),
    depth: data.dimensions.depth.toFixed(2),
    height: data.dimensions.height.toFixed(2),
  };

  const shippingObj = {
    warranty: data.warrantyInformation,
    shipping: data.shippingInformation,
    return: data.returnPolicy,
  };

  const termsArray = [
    "Received the wrong item.",
    "Item arrived not as expected (ie. damaged packaging).",
    "Item had defects.",
    "Over delivery time.",
    "The shipper does not allow the goods to be inspected before payment.",
  ];

  const Details = (
    <div className="space-y-4">
      {Object.entries(detailsObj).map(([key, value]) => (
        <div key={key} className="flex">
          <span className="capitalize font-semibold w-20 text-left">
            {key}:
          </span>
          <span className="capitalize">{value}</span>
        </div>
      ))}
    </div>
  );

  const CustomerReviews = (
    <div className="w-full flex flex-col gap-6">
      <span className="place-self-start md:place-self-auto font-semibold">
        Ratings: {data.rating} / 5
      </span>
      {data.reviews.map((review, index) => (
        <UserReviewCard key={index} review={review} />
      ))}
    </div>
  );

  const Terms = (
    <div className="text-justify">
      <p className="indent-10">
        Returns will be accepted for up to 10 days of Customer’s receipt or
        tracking number on unworn items. You, as a Customer, are obliged to
        inform us via email before you return the item, only in the case of:
      </p>
      <List spacing={4} className="my-6 ml-4">
        {termsArray.map((item, index) => (
          <ListItem key={index} className="flex items-start">
            <ListIcon as={MdCheckCircle} color="green.500" />
            <span className="leading-none">{item}</span>
          </ListItem>
        ))}
      </List>
      <p className="indent-10">
        The returned product(s) must be in the original packaging, safety
        wrapped, undamaged and unworn. This means that the item(s) must be
        safely packed in a carton box for protection during transport, possibly
        the same carton used to ship to you as a customer.
      </p>
    </div>
  );

  const Shipping = (
    <div className="space-y-4">
      {Object.entries(shippingObj).map(([key, value]) => (
        <div key={key} className="flex">
          <span className="capitalize font-semibold w-20 text-left">
            {key}:
          </span>
          <span className="capitalize">{value}</span>
        </div>
      ))}
    </div>
  );

  const ContentObject = [
    {
      header: "Details",
      content: Details,
    },
    {
      header: "Customer Reviews",
      content: CustomerReviews,
    },
    {
      header: "Terms and Conditions",
      content: Terms,
    },
    {
      header: "Shipping and Warranty",
      content: Shipping,
    },
  ];

  const SliderContents = (
    <>
      <Swiper
        className="my-8"
        slidesPerView={1}
        autoHeight
        spaceBetween={30}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
      >
        {ContentObject.map((item) => (
          <SwiperSlide key={item.header}>
            <div className="w-full flex flex-col">
              <div className="w-full flex-between">
                <span className="custom-prev animate-bounce-backward">
                  <MdKeyboardArrowLeft />
                </span>
                <h1 className="mx-auto font-semibold text-lg border-b px-5">
                  {item.header}
                </h1>
                <span className="custom-next animate-bounce-forward">
                  <MdKeyboardArrowRight />
                </span>
              </div>
              <div className="mt-4">{item.content}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

  const TabbedContents = (
    <Tabs align="center" position="relative" variant="unstyled">
      <TabList>
        {ContentObject.map((item) => (
          <Tab key={item.header} className="font-semibold">
            {item.header}
          </Tab>
        ))}
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="#404040" borderRadius="1px" />
      <TabPanels>
        {ContentObject.map((item) => (
          <TabPanel key={item.header} className="lg:w-3/4 lg:mt-4">
            {item.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );

  return (
    <div className="w-full border-b my-8 lg:my-16 xl:my-24">
      <div className="sm:hidden">{SliderContents}</div>
      <div className="hidden sm:block">{TabbedContents}</div>
    </div>
  );
}
