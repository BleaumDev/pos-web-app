import { Permission } from '@lib/components/employee/permissions';

export const permissionsData: Permission[] = [
  {
    id: '1',
    name: 'All Access',
    type: 'All Function',
    description: 'Provide Read & Write',
    subPermissions: [
      {
        name: 'Dashboard Access',
        types: ['Read', 'Write'],
      },
      {
        name: 'POS Access',
        types: ['Read', 'Write'],
      },
      // Add more sub-permissions as needed
    ],
  },
  {
    id: '2',
    name: 'POS Access',
    type: 'POS Function',
    description: 'Provide Read & Write',
    subPermissions: [
      {
        name: ' Dashboard Access',
        types: ['Read', 'Write'],
      },
      {
        name: ' POS Access',
        types: ['Read', 'Write'],
      },
      // Add more sub-permissions as needed
    ],
  },
  {
    id: '3',
    name: 'Dashboard Access',
    type: 'Dashboard Function',
    description: 'Provide Read & Write',
    subPermissions: [
      {
        name: ' Dashboard Access',
        types: ['Read', 'Write'],
      },
      {
        name: ' POS Access',
        types: ['Read', 'Write'],
      },
      // Add more sub-permissions as needed
    ],
  },
  {
    id: '4',
    name: 'Inventory Access',
    type: 'Inventory Function',
    description: 'Provide Read & Write',
    subPermissions: [
      {
        name: ' Dashboard Access',
        types: ['Read', 'Write'],
      },
      {
        name: ' POS Access',
        types: ['Read', 'Write'],
      },
      // Add more sub-permissions as needed
    ],
  },
  // Add more permissions as needed
];
