import './scss/style.scss'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header'
import Footer from './component/footer'
import ProfileSec from './component/proflieSec'
import FormOrder from './component/orderSec'

export default function App(){


    return(
        <main className='container-lg px-lg-5 mx-lg-5'>
            <Header/>
            <ProfileSec/>
            <FormOrder/>
            <Footer/>
        </main>
    )
}