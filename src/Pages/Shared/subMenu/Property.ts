export type MenuItem = {
    label: string;
    path: string;
  };
  
  export const apartmentsforSaleMenuItems: MenuItem[] = [
    {
      label: 'New Apartments',
      path: '/categories/property/apartmentsforsale/new-apartments',
    },
    {
      label: 'Used Apartments',
      path: '/categories/property/apartmentsforsale/used-apartments',
    },
    {
      label: 'Luxury Apartments',
      path: '/categories/property/apartmentsforsale/luxury-apartments',
    },
    {
      label: 'Studio Apartments',
      path: '/categories/property/apartmentsforsale/studio-apartments',
    }
  ];
  export const apartmentsforRentMenuItems: MenuItem[] = [
    {
      label: 'Short-term Rentals',
      path: '/categories/property/apartmentsforrent/short-term-rentals',
    },
    {
      label: 'Long-term Rentals',
      path: '/categories/property/apartmentsforrent/long-term-rentals',
    }
  ];
  export const landforSaleMenuItems: MenuItem[] = [
    {
      label: 'Residential Land',
      path: '/categories/property/landforsale/residential-land',
    },
    {
      label: 'Commercial Land',
      path: '/categories/property/landforsale/commercial-land',
    },
    {
      label: 'Agricultural Land',
      path: '/categories/property/landforsale/agricultural-land',
    }
  ];
  export const commercialPropertyforRentMenuItems: MenuItem[] = [
    {
      label: 'Office Spaces',
      path: '/categories/property/commercial-propertyforrent/office-spaces',
    },
    {
      label: 'Retail Spaces',
      path: '/categories/property/commercial-propertyforrent/retail-spaces',
    },
    {
      label: 'Warehouses',
      path: '/categories/property/commercial-propertyforrent/warehouses',
    },
    {
      label: 'Coworking Spaces',
      path: '/categories/property/commercial-propertyforrent/coworking-spaces',
    }
  ];
  export const roomRentalSharedHousingMenuItems: MenuItem[] = [
    {
      label: 'Shared Apartments',
      path: '/categories/property/room-rentals-shared/shard-apartments',
    },
    {
      label: 'Hostels',
      path: '/categories/property/room-rentals-shared/hostels',
    },
    {
      label: 'Paying Guest (PG) Accommodations',
      path: '/categories/property/room-rentals-shared/paying-guest',
    }
  ];
