if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors, images } = require('./seedhelpers');

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl)
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.log("Connection error:");
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    console.log("Old campgrounds removed.");

    for (let i = 0; i < 150; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;

        const camp = new Campground({
            author: 'KyleNO', 
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            description: 'A beautiful campground with nature and adventure.',
            price,
            images: [
                sample(images),
                sample(images),
                sample(images)
            ]
        });

        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Database seeded and connection closed.");
});