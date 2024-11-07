export type MenuItem = {
    label: string;
    path: string;
  };
  
  export const groceriesFoodItemsMenuItems: MenuItem[] = [
    {
      label: 'Rice Grains and Cereals',
      path: '/categories/essentials/groceriesfooditems/rice-grainsandcereals',
    },
    {
      label: 'Fresh Fruits and Vegetables',
      path: '/categories/essentials/groceriesfooditems/fresh-fruitsandvegetables',
    },
    {
      label: 'Cooking Oils',
      path: '/categories/essentials/groceriesfooditems/cooking-oils',
    }
  ];
  export const personalHygieneProductsMenuItems: MenuItem[] = [
    {
      label: 'Soap and Handwash',
      path: '/categories/essentials/personal-hygiene-product/soapandhandwash',
    },
    {
      label: 'Toothpaste and Brushes',
      path: '/categories/essentials/personal-hygiene-product/toothpasteandbrushes',
    }
  ];
  export const cleaningSuppliesMenuItems: MenuItem[] = [
    {
      label: 'Laundry Detergents',
      path: '/categories/essentials/cleaning-supplies/laundry-detergents',
    },
    {
      label: 'Floor Cleaners',
      path: '/categories/essentials/cleaning-supplies/floor-cleaners',
    }
  ];
