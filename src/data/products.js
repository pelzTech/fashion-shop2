// Import images for the categories and sub-categories
import fashionImg from '../Assets/fashion.jpg';
import mensWaresImg from '../Assets/mens_wares.jpg';
import femalesWaresImg from '../Assets/females_wares.jpg';
import kidsImg from '../Assets/kids_jeans.jpg';
import mensShirtImg from '../Assets/mens_shirts.jpg';
import mensShoesImg from '../Assets/mens_shoes.jpg';
import mensJewelriesImg from '../Assets/mens_jewelries.jpg';
import femalesTopImg from '../Assets/females_top.jpg';
import femalesShirtImg from '../Assets/females_shirt.jpg';
import femalesUndiesImg from '../Assets/females_undies.jpg';
import femalesShoesImg from '../Assets/females_shoes.jpg';
import kidsShirtImg from '../Assets/kids_shirt.jpg';
import kidsShoesImg from '../Assets/kids_shoes.jpg';
import kidsJeansImg from '../Assets/kids_jeans.jpg';

import electronicsImg from '../Assets/electronics.jpg';
import mobilePhonesImg from '../Assets/mobile_phones.jpg';
import applePhoneImg from '../Assets/apple_phone.jpg';
import tecnoPhoneImg from '../Assets/tecno_phone.jpg';
import infinixPhoneImg from '../Assets/infinix_phone.jpg';
import samsungPhoneImg from '../Assets/samsung_phone.jpg';
import laptopsImg from '../Assets/laptops.jpg';
import appleLaptopImg from '../Assets/apple_laptop.jpg';
import hpLaptopImg from '../Assets/hp_laptop.jpg';
import dellLaptopImg from '../Assets/dell_laptop.jpg';
import samsungLaptopImg from '../Assets/samsung_laptop.jpg';
import homeApplianceImg from '../Assets/home_appliance.jpg';
import acImg from '../Assets/ac.jpg';
import projectorImg from '../Assets/projector.jpg';
import cookingGasImg from '../Assets/cooking_gas.jpg';
import cylinderImg from '../Assets/cylinder.jpg';

import vehiclesImg from '../Assets/vehicles.jpg';
import carsImg from '../Assets/cars.jpg';
import toyotaCarImg from '../Assets/toyota_car.jpg';
import benzCarImg from '../Assets/benz_car.jpg';
import hondaCarImg from '../Assets/honda_car.jpg';
import lexusCarImg from '../Assets/lexus_car.jpg';
import bicyclesImg from '../Assets/bicycles.jpg';
import arrowBicycleImg from '../Assets/arrow.png'; // Adjust the path if needed
import vanImg from '../Assets/van.jpg';
import vanVehicleImg from '../Assets/van_vehicle.jpg';

// The full products data
const products = [
  {
    category: "Fashion",
    image: fashionImg,
    description: "Explore the latest trends in fashion for men, women, and kids.",
    subCategories: [
      {
        name: "Mens Wares",
        image: mensWaresImg,
        description: "Stylish and comfortable clothing for men.",
        subCategories: [
          { name: "Shirt", image: mensShirtImg, description: "Casual and formal shirts for men.", price: 25, discountPrice: 20 },
          { name: "Shoes", image: mensShoesImg, description: "Footwear that combines style and comfort.", price: 50, discountPrice: 40 },
          { name: "Jewelries", image: mensJewelriesImg, description: "Elegant jewelry for men.", price: 80, discountPrice: 65 }
        ]
      },
      {
        name: "Females Wares",
        image: femalesWaresImg,
        description: "Trendy and elegant clothing for women.",
        subCategories: [
          { name: "Top", image: femalesTopImg, description: "Fashionable tops for women.", price: 30, discountPrice: 25 },
          { name: "Shirt", image: femalesShirtImg, description: "Stylish shirts for women.", price: 35, discountPrice: 28 },
          { name: "Undies", image: femalesUndiesImg, description: "Comfortable and stylish underwear.", price: 15, discountPrice: 12 },
          { name: "Shoes", image: femalesShoesImg, description: "Elegant footwear for women.", price: 60, discountPrice: 50 }
        ]
      },
      {
        name: "Kids",
        image: kidsImg,
        description: "Comfortable and colorful clothing for kids.",
        subCategories: [
          { name: "Shirt", image: kidsShirtImg, description: "Casual and formal shirts for kids.", price: 20, discountPrice: 15 },
          { name: "Shoes", image: kidsShoesImg, description: "Durable and stylish shoes for kids.", price: 30, discountPrice: 25 },
          { name: "Jeans", image: kidsJeansImg, description: "Comfortable jeans for kids.", price: 25, discountPrice: 20 }
        ]
      }
    ]
  },
  {
    category: "Electronics",
    image: electronicsImg,
    description: "Find the latest and greatest in electronics.",
    subCategories: [
      {
        name: "Mobile Phones",
        image: mobilePhonesImg,
        description: "Smartphones from top brands.",
        subCategories: [
          { name: "Apple", image: applePhoneImg, description: "Apple iphone 16 pro max.", price: 1000, discountPrice: 950 },
          { name: "Tecno", image: tecnoPhoneImg, description: "Affordable and reliable Tecno phones.", price: 200, discountPrice: 180 },
          { name: "Infinix", image: infinixPhoneImg, description: "Stylish and functional Infinix phones.", price: 250, discountPrice: 220 },
          { name: "Samsung", image: samsungPhoneImg, description: "High-quality Samsung smartphones.", price: 900, discountPrice: 850 }
        ]
      },
      {
        name: "Laptops",
        image: laptopsImg,
        description: "Powerful laptops for work and play.",
        subCategories: [
          { name: "Apple", image: appleLaptopImg, description: "MacBooks with cutting-edge features.", price: 1500, discountPrice: 1400 },
          { name: "HP", image: hpLaptopImg, description: "Reliable and efficient HP laptops.", price: 700, discountPrice: 650 },
          { name: "Dell", image: dellLaptopImg, description: "Durable and versatile Dell laptops.", price: 800, discountPrice: 750 },
          { name: "Samsung", image: samsungLaptopImg, description: "High-performance Samsung laptops.", price: 850, discountPrice: 800 }
        ]
      },
      {
        name: "Home Appliance",
        image: homeApplianceImg,
        description: "Essential appliances for your home.",
        subCategories: [
          { name: "AC", image: acImg, description: "Efficient air conditioning units.", price: 500, discountPrice: 450 },
          { name: "Projector", image: projectorImg, description: "High-quality projectors for home and office.", price: 300, discountPrice: 280 },
          { name: "Cooking Gas", image: cookingGasImg, description: "Safe and reliable cooking gas cylinders.", price: 60, discountPrice: 50 },
          { name: "Cylinder", image: cylinderImg, description: "Durable gas cylinders for home use.", price: 40, discountPrice: 35 }
        ]
      }
    ]
  },
  {
    category: "Vehicles",
    image: vehiclesImg,
    description: "Discover a wide range of vehicles for every need.",
    subCategories: [
      {
        name: "Cars",
        image: carsImg,
        description: "Luxury and economy cars from top brands.",
        subCategories: [
          { name: "Toyota", image: toyotaCarImg, description: "Reliable and efficient Toyota cars.", price: 20000, discountPrice: 19000 },
          { name: "Benz", image: benzCarImg, description: "Luxury Benz vehicles.", price: 50000, discountPrice: 48000 },
          { name: "Honda", image: hondaCarImg, description: "Versatile and dependable Honda cars.", price: 18000, discountPrice: 17000 },
          { name: "Lexus", image: lexusCarImg, description: "Premium Lexus automobiles.", price: 45000, discountPrice: 43000 }
        ]
      },
      {
        name: "Bicycles",
        image: bicyclesImg,
        description: "Eco-friendly and stylish bicycles.",
        subCategories: [
          { name: "Bicycles", image: arrowBicycleImg, description: "Durable and stylish bicycles for all ages.", price: 150, discountPrice: 120 }
        ]
      },
      {
        name: "Van",
        image: vanImg,
        description: "Spacious and reliable vans.",
        subCategories: [
          { name: "Van", image: vanVehicleImg, description: "High-capacity vans for transport and cargo.", price: 30000, discountPrice: 28000 }
        ]
      }
    ]
  }
];

export default products;
