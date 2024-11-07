import Banner from "./Banner";
import { Helmet } from 'react-helmet-async';
import Categories from "./Categories";

import Add from "./Add";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Bideex Marketplace - Buy Sell and Rent Locally & Internationally</title>
      </Helmet>
      <Banner></Banner>
      <Add></Add>
      <Categories></Categories>
      {/* <Featured></Featured> */}
    </div>
  )
};

export default Home;
