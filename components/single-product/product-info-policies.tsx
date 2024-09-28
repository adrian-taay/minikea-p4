import { DummyProductType } from "@/types";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import UserReviewCard from "../cards/user-review-card";

export default function ProductInfoPolicies({
  data,
}: {
  data: DummyProductType;
}) {
  const Details = (
    <div>
      <p>Brand: {data.brand ? data.brand : "No brand specified."}</p>
      <p>SKU: {data.sku}</p>
      <p>Weight (kg): {data.weight.toFixed(2)}</p>
      <p>Width: {data.dimensions.width.toFixed(2)}</p>
      <p>Depth: {data.dimensions.depth.toFixed(2)}</p>
      <p>Height: {data.dimensions.height.toFixed(2)}</p>
    </div>
  );

  const CustomerReviews = (
    <div className="flex flex-col gap-6">
      {data.reviews.map((review, index) => (
        <UserReviewCard key={index} review={review} />
      ))}
    </div>
  );

  const Terms = (
    <p>
      Returns will be accepted for up to 10 days of Customer’s receipt or
      tracking number on unworn items. You, as a Customer, are obliged to inform
      us via email before you return the item, only in the case of: – Received
      the wrong item. – Item arrived not as expected (ie. damaged packaging). –
      Item had defects. – Over delivery time. – The shipper does not allow the
      goods to be inspected before payment. The returned product(s) must be in
      the original packaging, safety wrapped, undamaged and unworn. This means
      that the item(s) must be safely packed in a carton box for protection
      during transport, possibly the same carton used to ship to you as a
      customer.
    </p>
  );

  const Shipping = (
    <div>
      <p>Warranty: {data.warrantyInformation}</p>
      <p>Shipping: {data.shippingInformation}</p>
      <p>Return: {data.returnPolicy}</p>
    </div>
  );

  return (
    <Tabs align="center" position="relative" variant="unstyled">
      <TabList>
        <Tab>Details</Tab>
        <Tab>Customer Reviews</Tab>
        <Tab>Terms and Conditions</Tab>
        <Tab>Shipping and Warranty</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>{Details}</TabPanel>
        <TabPanel>{CustomerReviews}</TabPanel>
        <TabPanel>{Terms}</TabPanel>
        <TabPanel>{Shipping}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
