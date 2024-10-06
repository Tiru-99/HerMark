
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
      <Masonry></Masonry>
     
        
        <AboutUs></AboutUs>

        <Footer></Footer>
      
      
    </div>
  );
}
