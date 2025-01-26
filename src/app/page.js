import Footer from './Footer/page';
import Faq from './Faq/page';
import Review from './Review/page';

export default function Home() {
  return (
  <div className='mx-12'>
  <h1>Hello World</h1>

  <Review />

  <Faq />

    <Footer />

  </div>
  );
}
