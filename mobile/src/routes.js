
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Index from './pages/Index';
import Cadastro from './pages/Cadastro';
import Feed from './pages/Feed';

const Routes = createAppContainer(
  createSwitchNavigator({
    Index,
    Cadastro,
    Feed,
  })
);

export default Routes;


