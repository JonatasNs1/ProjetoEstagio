import '../css/styles.css';
import '../styles/telaPrincipal.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/container.scss';
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
