const campingImages = [
    "https://source.unsplash.com/random/800x600/?camping",
    "https://source.unsplash.com/random/800x600/?tent",
    "https://source.unsplash.com/random/800x600/?forest-camp",
    "https://source.unsplash.com/random/800x600/?mountains",
    "https://source.unsplash.com/random/800x600/?campfire",
    "https://source.unsplash.com/random/800x600/?outdoors",
    "https://source.unsplash.com/random/800x600/?nature",
    "https://source.unsplash.com/random/800x600/?wilderness",
    "https://source.unsplash.com/random/800x600/?travelling",
    "https://source.unsplash.com/random/800x600/?hiking"
];

// Utility to choose a random item
const random = arr => arr[Math.floor(Math.random() * arr.length)];

// Returns 3 random images in your app format
module.exports.getRandomImages = () => {
    const images = [];

    for (let i = 0; i < 3; i++) {
        const url = random(campingImages);

        images.push({
            url,
            filename: `seed-${Math.random().toString(36).substring(2, 10)}`
        });
    }

    return images;
};