import HomeCarousel from '../components/home/header/HomeCarousel'
import InfoHome from '../components/home/info/InfoHome'
import Mijozlar from '../components/home/mijozlar/Mijozlar'
import TestimonialsCarousel from '../components/home/testimonials/Testimonials'

const HomePage = () => {
    return (
        <>
            <HomeCarousel />
            <InfoHome />
            <Mijozlar />
            <TestimonialsCarousel />
        </>
    )
}

export default HomePage
