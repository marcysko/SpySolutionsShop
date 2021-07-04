const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Hidden Spy Cameras' },
    { name: 'GPS Trackers' },
    { name: 'Surveillance' },
    { name: 'Video' },
    { name: 'Miscellaneous' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'HIDDEN SPY CAMERA',
      description:
        'The miniature (4.3" x 1.5" x 1.8") MAC-MCRRIR Hidden Spy Camera Mini Clock features a HD 1080P color camera with WiFi live view, motion activation, night vision, time date stamp, 120° field-of-view, and much more which makes it ideal for all nanny cam and video spy applications.',
      image: 'hidden-camera-mini-clock-wifi-live-view-night-vision-mac-mcrrir-1-800x800.png',
      category: categories[0]._id,
      price: 199.99,
      quantity: 25
    },
    {
      name: 'HIDDEN CAMERA ELECTRICAL BOX',
      description:
        'The MAC-EBRIR HD 1080P high resolution weatherproof B/W and Color Electrical Box Hidden Camera with built-in high resolution color camera, built-in high resolution B/W camera, built-in motion-activated video recorder.',
      image: 'hidden-camera-night-vision-dvr-macebrir-800x800.jpg',
      category: categories[0]._id,
      price: 599.99,
      quantity: 10
    },
    {
      name: 'HIDDEN CAMERA BIRD HOUSE',
      category: categories[0]._id,
      description:
        'The MAC-BHRIR HD 1080P high resolution weatherproof Color and B/W Bird House Hidden Camera with built-in high resolution color camera, built-in high resolution B/W camera, built-in motion-activated video recorder, built-in 20 hour rechargeable battery.',
      image: 'hidden-spy-camera-bird-house-macbhrir-800x800.jpg',
      price: 599.99,
      quantity: 20
    },
    {
      name: 'VANDALISM CAMERA',
      category: categories[0]._id,
      description:
        'The VSV-MBOX1 Weatherproof Motion-Activated High Resolution Day Night Vandalism Camera with built-in Real-Time Video Recorder stores up to 10 hours of real-time video (19 minutes per 1GB -- 10 hours with optional 32GB SD card) and four AA batteries',
      image: 'vandalism-camera-forest-camo-vsvmbox1-3-600x600.jpg',
      price: 89.99,
      quantity: 10
    },
    {
      name: 'HIDDEN CAMERA PLANT',
      category: categories[0]._id,
      description:
        'The MAC-PRB3 HD 1080P battery-powered high-resolution color Plant Hidden Camera with built-in motion-activated Video Recorder.',
      image: 'hidden-camera-plant-dvr-macprb3-800x800.jpg',
      price: 549.99,
      quantity: 15
    },
    {
      name: 'HIDDEN CAMERA TEDDY BEAR',
      category: categories[0]._id,
      description:
      'The MAC-TBR2 HD 1080P battery-powered high-resolution low-light B/W Teddy Bear Hidden Camera with built-in motion-activated Video Recorder.',
      image: 'hidden-camera-teddy-bear-dvr-mactbr3-800x800.jpg',
      price: 399.99,
      quantity: 5
    },
    {
      name: 'CELL PHONE CHARGER',
      category: categories[0]._id,
      description:
        'The MAC-AC3 Hidden Spy Camera Cell Phone Charger features 1080P HD recording (motion or continuous), WiFi global view (via iPhone, Android, PC, or MAC), night vision, time date stamp, 90° field-of-view, and much more which makes it ideal for all nanny cam video spy applications.',
      image: 'hidden-spy-camera-cell-phone-charger-mac-ac3-1-800x800.png',
      price: 129.99,
      quantity: 30
    },
    {
      name: 'GPS TRACKER',
      category: categories[1]._id,
      description:
        'The GPS-SC3 Real-Time GPS Tracker is a completely self-contained, motion-activated, battery-powered, waterproof real-time GPS Tracker which allows you to view historical and real-time location data from any internet-enabled device (PC, MAC, iPhone, Android, etc.).',
      image: 'gps-tracker-real-time-gps-sc3-1-800x800.jpg',
      price: 89.99,
      quantity: 50
    },
    {
      name: 'GPS TRACKER DETECTOR',
      category: categories[1]._id,
      description: 'Our miniature professional grade GPS-RFD1 GPS Tracker Detector allows you to detect and locate audio bugs, telephone bugs, cellular bugs, and any active real-time GPS vehicle tracker.',
      image: 'bug-detector-gpsrfd1-800x800.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'COUNTER SURVEILLANCE BROADBAND RECEIVER',
      category: categories[2]._id,
      description:
        'Developed for Israeli military counter surveillance, the CSR-PRO Counter Surveillance Broadband Receiver is a military/government grade broadband receiver designed to detect and locate all major types of electronic surveillance devices.',
      image: 'counter-surveillance-broadband-receiver-csrpro-3-800x800.jpg',
      price: 1899.99,
      quantity: 5
    },
    {
      name: 'DASH CAM',
      category: categories[3]._id,
      description:
        'The HD-CC4 Dual Lens (front & rear facing) HD Color Dash Cam Car Camera with built-in DVR, GPS, & Night Vision',
      image: 'dash-cam-car-camera-dual-lens-hd-1080p-hdcc4-2-800x800.png',
      price: 149.99,
      quantity: 40
    },
    {
      name: 'FOLDING KNIFE',
      category: categories[4]._id,
      description:
        'Heavy Duty Snake Head Flipper Knife Folding Knife -- 440C Blade Steel -- Copper Ball Bearing -- Smooth & Fast Opening -- G10 Handle.',
      image: 'stabby-joe-folding-knife-sj30-1-800x800.png',
      price: 28.99,
      quantity: 20
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
