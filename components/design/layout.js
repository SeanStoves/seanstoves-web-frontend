import Header from './header'
import Footer from './footer'
import { Container } from 'react-bootstrap'

export default function Layout ({children}) {
    return (
        <>
            <Container fluid="xl">
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </Container>
        </>
    )
}