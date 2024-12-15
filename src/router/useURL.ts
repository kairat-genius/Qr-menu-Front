interface URLs {
  ModMenu: { name: string; path: string };
  Menu: { name: string; path: string };
  Home: { name: string; path: string };
  Table: { name: string; path: string };
  Client: { name: string; path: string };
  ClientMenu: { name: string; path: string };
  ClientCategory: { name: string; path: string };
  ClientDish: { name: string; path: string };
}

export const useURL = (): URLs => {
  return {
    ModMenu: { name: 'Moderator-Menu', path: '/modmenu' },
    Menu: { name: 'menu', path: '/menu' },
    Home: { name: 'Home', path: '/' },
    Table: { name: 'Table', path: '/tables' },
    Client: { name: 'Client', path: '/menu/:restaurant/:id/:table' },
    ClientMenu: {
      name: 'ClientMenu',
      path: '/menu/:restaurant/:id/:table/view',
    },
    ClientCategory: {
      name: 'ClientCategory',
      path: '/menu/:restaurant/:id/:table/view/:categoryName',
    },
    ClientDish: {
      name: 'ClientDish',
      path: '/menu/:restaurant/:id/:table/view/:categoryName/:dishName',
    },
  };
};
