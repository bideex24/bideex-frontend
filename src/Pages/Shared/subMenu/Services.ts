export type MenuItem = {
    label: string;
    path: string;
  };
  
  export const freelanceServicesMenuItems: MenuItem[] = [
    {
      label: 'Graphic Design',
      path: '/categories/services/freelance-services/graphic-design',
    },
    {
      label: 'Digital Marketing',
      path: '/categories/services/freelance-services/digital-marketing',
    }
  ];
  export const homeServicesMenuItems: MenuItem[] = [
    {
      label: 'Plumbing & Electrical',
      path: '/categories/services/home-services/plumbing-electrical',
    },
    {
      label: 'House Cleaning',
      path: '/categories/services/home-services/house-cleaning',
    }
  ];
