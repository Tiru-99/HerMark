
import Frontcomp from '@/components/Frontcomp';
import Form from '@/components/Form';
import Masonry from '@/components/Masonry';

import AboutUs from '@/components/Aboutus';
import Footer from '@/components/Footer';



export default function Home() {
  

  return (
    <div>
      <Frontcomp></Frontcomp>
      
      <div className='mt-24'>
        <Form></Form>
      </div>

      <div className="-mt-96 sm:mt-0">
        <Masonry></Masonry>
      </div>
     
      <div className='-mt-96 sm:mt-0'>
        <AboutUs></AboutUs>
      </div>

        <Footer></Footer>
      
      
    </div>
  );
}
