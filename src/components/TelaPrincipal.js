import '../css/styles.css';
import Modal from './Modal';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
function TelaPrincipal() {


  return (
    <div className='principal'>
      <div>
        <Header/>
      </div>
      
      <div>
        <Main/>
      </div>
     
      <div>
        <Footer/>
      </div>

    </div>

   
  );
}

export default TelaPrincipal;
