export type MenuItem = {
    label: string;
    path: string;
  };
  
  export const farmingMenuItems: MenuItem[] = [
    {
      label: 'Tractors',
      path: '/categories/agriculture/farming-equipment/tractors',
    },
    {
      label: 'Irrigation Pumps',
      path: '/categories/agriculture/farming-equipment/irrigation-pumps',
    }
  ];
  export const plantsMenuItems: MenuItem[] = [
    {
      label: 'Fruit and Vegetable Seeds',
      path: '/categories/agriculture/seeds-plants/fruit-vegetable-seeds',
    },
    {
      label: 'Flowering Plants',
      path: '/categories/agriculture/seeds-plants/flowering-plants',
    }
  ];
  export const stockMenuItems: MenuItem[] = [
    {
      label: 'Cattle',
      path: '/categories/agriculture/live-stock/cattle',
    },
    {
      label: 'Poultry',
      path: '/categories/agriculture/live-stock/poultry',
    },
    {
      label: 'Sheep and Goats',
      path: '/categories/agriculture/live-stock/sheep-goats',
    }
  ];