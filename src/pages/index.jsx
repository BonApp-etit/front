import First from '../../components/landing/FirstSection'
import Second from '../../components/landing/SecondSection';
import Third from '../../components/landing/ThirdSection'
import Fourth from '../../components/landing/FourthSection'
import Fifth from '../../components/landing/FifthSection'
import Footer from '../../components/landing/FooterSection';

export default function landing() {
    return (
      <main className='mx-120'>
        <First/>
        <Second/>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Footer/>
      </main>
    );
  }

  
