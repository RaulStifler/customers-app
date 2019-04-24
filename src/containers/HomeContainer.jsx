import React from 'react';
import { Link } from 'react-router-dom';
import Frame from '../components/Frame';
import CustomersActions from '../components/CustomerActions';

const HomeContainer = () => (
  <div>
    <Frame
      title="Home"
      body={(
        <div>
          Esta es la pantalla inicial
          <CustomersActions>
            <Link to="/customers">Listado de clientes</Link>
          </CustomersActions>
        </div>
      )}
    />
  </div>
);

export default HomeContainer;
