// import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar'
// import Footer from '../../Components/Footer/Footer'

// export default function Home() {
//   return (
//     <>
//      <div>This is Home</div>
//     </>
//   )
// }


import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Footer />
    </>
  );
}
