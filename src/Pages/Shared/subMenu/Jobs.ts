export type MenuItem = {
    label: string;
    path: string;
  };
  
  export const jobsMenuItems: MenuItem[] = [
    {
      label: 'Sales Jobs',
      path: '/categories/jobs/sales-jobs',
    },
    {
      label: 'Marketing Jobs',
      path: '/categories/jobs/marketing-jobs',
    },
    {
      label: 'IT and Software Jobs',
      path: '/categories/jobs/it-software-jobs',
    }
  ];