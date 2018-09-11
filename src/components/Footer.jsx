import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
          <div>
          <div className="wrapper row4">
          <footer id="footer" className="hoc clear"> 
            
            <div className="one_third first">
              <h6 className="heading">Star Wars</h6>
              <p><i>Star Wars</i> is an American epic space opera franchise centered around a film series begun by George Lucas with the eponymous 1977 film. The saga quickly became a worldwide pop culture phenomenon.</p>
              <p className="btmspace-15"></p>
            </div>
            <div className="one_third">
              <h6 className="heading">luctus vestibulum magna</h6>
              <ul className="nospace linklist contact">
                <li><i className="fa fa-map-marker"></i>
                  <address>
                  1110 Gorgas Ave, San Francisco, CA 94129, EE. UU.
                  </address>
                </li>
                <li><i className="fa fa-phone"></i>+1 415-623-1000</li>
              </ul>
            </div>


            <div className="one_third">
              <h6 className="heading">Links</h6>
        
              <ul className="faico clear">
              <li><a href=""><i className="fa fa-lg fa-home"></i></a></li> 
              <li><a href="https://www.starwars.com/news" className="faicon-blog"><i className="fa fa-align-justify"></i></a></li>
              <li><a className="fa fa-shopping-bag faicon-shop" href="https://www.shopdisney.com/movies-shows/star-wars"></a></li>
              <li><a className="faicon-facebook" href="https://www.facebook.com/StarWars"><i className="fa fa-facebook"></i></a></li>
              <li><a className="faicon-twitter" href="https://twitter.com/starwars"><i className="fa fa-twitter"></i></a></li>
              <li><a className="fa fa-youtube faicon-youtube" href="https://www.youtube.com/user/starwars"><i className="fa fa-youtbe"></i></a></li>
              <li><a className="faicon-google-plus" href="https://plus.google.com/+StarWars"><i className="fa fa-google-plus"></i></a></li>
              <li><a className="fa fa-tumblr faicon-tumblr" href="https://starwars.tumblr.com/"><i></i></a></li>
              <li><a className="fa fa-instagram faicon-instagram" href="https://www.instagram.com/starwars/"><i></i></a></li>
              </ul>
             
            </div>
           
          </footer>
        </div>
        
        <div className="wrapper row5" id="copy">
          <div id="copyright" className="hoc clear"> 
            
            <p className="fl_left">Copyright &copy; 2016 - All Rights Reserved - <a href="#">Domain Name</a></p>
            <p className="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
            
          </div>
        </div>
        
        <a id="backtotop" href="#top"><i className="fa fa-arrow-up"></i></a>
        </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Footer;