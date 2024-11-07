export type MenuItem = {
    label: string;
    path: string;
  };
  
  export const carsMenuItems: MenuItem[] = [
    {
      label: 'New Cars',
      path: '/categories/vehicles/cars/new-cars',
    },
    {
      label: 'Used Cars',
      path: '/categories/vehicles/cars/used-cars',
    },
    {
      label: 'Electric Cars',
      path: '/categories/vehicles/cars/electric-cars',
    },
    {
      label: 'Hybrid Cars',
      path: '/categories/vehicles/cars/hybrid-cars',
    },
  ];
  export const motorbikesMenuItems: MenuItem[] = [
    {
      label: 'Scooters',
      path: '/categories/vehicles/motorbikes/scooters',
    },
    {
      label: 'Sports Bikes',
      path: '/categories/vehicles/motorbikes/sports-bikes',
    },
    {
      label: 'Off-Road Bikes',
      path: '/categories/vehicles/motorbikes/off-road-bikes',
    }
  ];
  export const bicyclesMenuItems: MenuItem[] = [
    {
      label: 'Mountain Bikes',
      path: '/categories/vehicles/bicycles/mountain-bikes',
    },
    {
      label: 'Road Bikes',
      path: '/categories/vehicles/bicycles/road-bikes',
    },
    {
      label: 'Electric Bikes',
      path: '/categories/vehicles/bicycles/electric-bikes',
    },
    {
      label: 'Bicycle Accessories',
      path: '/categories/vehicles/bicycles/bicycle-accessories',
    }
  ];
  export const busesMenuItems: MenuItem[] = [
    {
      label: 'Pickup Trucks',
      path: '/categories/vehicles/truck-buses/pickup-trucks',
    },
    {
      label: 'Cargo Trucks',
      path: '/categories/vehicles/truck-buses/cargo-trucks',
    },
    {
      label: 'Commercial Buses',
      path: '/categories/vehicles/truck-buses/commercial-buses',
    }
  ];
  export const partsMenuItems: MenuItem[] = [
    {
      label: 'Tires and Wheels',
      path: '/categories/vehicles/auto-parts-accessories/tires-wheels',
    },
    {
      label: 'Car Batteries',
      path: '/categories/vehicles/auto-parts-accessories/car-batteries',
    },
    {
      label: 'Car Audio Systems',
      path: '/categories/vehicles/auto-parts-accessories/car-audio-systems',
    },
    {
      label: 'GPS and Navigation Systems',
      path: '/categories/vehicles/auto-parts-accessories/gps-navigation-systems',
    },
    {
      label: 'Car Cleaning Products',
      path: '/categories/vehicles/auto-parts-accessories/car-cleaning-products',
    }
  ];
  export const boatsMenuItems: MenuItem[] = [
    {
      label: 'Speedboats',
      path: '/categories/vehicles/boats-watercraft/speedboats',
    },
    {
      label: 'Jet Skis',
      path: '/categories/vehicles/boats-watercraft/jet-skis',
    },
    {
      label: 'Fishing Boats',
      path: '/categories/vehicles/boats-watercraft/fishing-boats',
    }
  ];