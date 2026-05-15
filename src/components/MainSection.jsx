import LeftSection from './LeftSection';
import RightSection from './RightSection';

const MainSection = () => {

    return (
        <>
         {/* Hero Section */}
      <section className="main flex flex-col-reverse lg:flex-row items-center pt-10 lg:pt-20">
        <LeftSection></LeftSection>
        <RightSection></RightSection>

        

      </section>
        </>
    )
}

export default MainSection