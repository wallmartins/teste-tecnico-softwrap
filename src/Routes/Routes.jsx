import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListUsers from '../Components/Pages/ListUsers';
import RegisterUser from '../Components/Pages/RegisterUser';
import EditUser from '../Components/Pages/EditUser';
import Breadcrumb from '../Components/Breadcrumb';
import Header from '../Components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <Breadcrumb title="Visualizar Cadastrados" />
        <ListUsers />
      </Route>
      <Route path="/register">
        <Breadcrumb title="Novo Cadastro" />
        <RegisterUser />
      </Route>
      <Route path="/edit/:id">
        <Breadcrumb title="Editar Cadastro" />
        <EditUser />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
