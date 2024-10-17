import {
  category_car,
  category_decors,
  category_dress,
  category_fragrance,
  category_furniture,
  category_grocery,
  category_jewelry,
  category_kitchen,
  category_laptop,
  category_makeup,
  category_mens_shirt,
  category_mens_shoes,
  category_mens_watch,
  category_mobile,
  category_motorcycle,
  category_phone,
  category_skin,
  category_sports,
  category_sunglasses,
  category_tablet,
  category_women_tops,
  category_womens_bags,
  category_womens_shoes,
  category_womens_watch,
} from "../constants/images";

export const userAccountLinks = [
  {
    title: "My Profile",
    href: "/user",
  },
  {
    title: "My Transactions",
    href: "/user/transactions",
  },
  {
    title: "My Wishlist",
    href: "/user/wishlist",
  },
];

export const productCategoryLinks = [
  {
    groupTitle: "Beauty and Wellness",
    links: [
      {
        title: "Beauty",
        href: "beauty",
        img: category_makeup,
      },
      {
        title: "Fragrances",
        href: "fragrances",
        img: category_fragrance,
      },
      {
        title: "Skin Care",
        href: "skin-care",
        img: category_skin,
      },
    ],
  },
  {
    groupTitle: "Groceries",
    links: [
      {
        title: "Groceries",
        href: "groceries",
        img: category_grocery,
      },
    ],
  },
  {
    groupTitle: "Home",
    links: [
      {
        title: "Furniture",
        href: "furniture",
        img: category_furniture,
      },
      {
        title: "Home Decors",
        href: "home-decoration",
        img: category_decors,
      },
      {
        title: "Kitchen Accessories",
        href: "kitchen-accessories",
        img: category_kitchen,
      },
    ],
  },
  {
    groupTitle: "Tech and Gadgets",
    links: [
      {
        title: "Laptops",
        href: "laptops",
        img: category_laptop,
      },
      {
        title: "Tablets",
        href: "tablets",
        img: category_tablet,
      },
      {
        title: "Smartphones",
        href: "smartphones",
        img: category_phone,
      },
      {
        title: "Mobile Accessories",
        href: "mobile-accessories",
        img: category_mobile,
      },
    ],
  },
  {
    groupTitle: "Apparel",
    links: [
      {
        title: "Mens Shirts",
        href: "mens-shirts",
        img: category_mens_shirt,
      },
      {
        title: "Womens Tops",
        href: "tops",
        img: category_women_tops,
      },
      {
        title: "Womens Dresses",
        href: "womens-dresses",
        img: category_dress,
      },
      {
        title: "Mens Shoes",
        href: "mens-shoes",
        img: category_mens_shoes,
      },
      {
        title: "Womens Shoes",
        href: "womens-shoes",
        img: category_womens_shoes,
      },
    ],
  },
  {
    groupTitle: "Accessories",
    links: [
      {
        title: "Mens Watches",
        href: "mens-watches",
        img: category_mens_watch,
      },
      {
        title: "Womens Watches",
        href: "womens-watches",
        img: category_womens_watch,
      },
      {
        title: "Womens Bags",
        href: "womens-bags",
        img: category_womens_bags,
      },
      {
        title: "Womens Jewelry",
        href: "womens-jewellery",
        img: category_jewelry,
      },
      {
        title: "Sunglasses",
        href: "sunglasses",
        img: category_sunglasses,
      },
    ],
  },
  {
    groupTitle: "Automotives",
    links: [
      {
        title: "Cars",
        href: "vehicle",
        img: category_car,
      },
      {
        title: "Motorcycle",
        href: "motorcycle",
        img: category_motorcycle,
      },
      {
        title: "Sports Accessories",
        href: "sports-accessories",
        img: category_sports,
      },
    ],
  },
];
