import Background  from './components/Background'
import Hero        from './components/Hero'
import HowItWorks from './components/HowItWorks'
import PrizeShop   from './components/PrizeShop'
import FAQ         from './components/FAQ'
import Footer      from './components/Footer'

export default function App() {
    return (
        <>
            <Background />

            <main>
                <Hero />
                <HowItWorks />
                <PrizeShop />
                <FAQ />
            </main>

            <Footer />
        </>
    )
}