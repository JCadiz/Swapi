import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
          <div>
          <div class="wrapper row4">
          <footer id="footer" class="hoc clear"> 
            
            <div class="one_third first">
              <h6 class="heading">Star Wars</h6>
              <p><i>Star Wars</i> is an American epic space opera franchise centered around a film series begun by George Lucas with the eponymous 1977 film. The saga quickly became a worldwide pop culture phenomenon.</p>
              <p class="btmspace-15"></p>
            </div>
            <div class="one_third">
              <h6 class="heading">luctus vestibulum magna</h6>
              <ul class="nospace linklist contact">
                <li><i class="fa fa-map-marker"></i>
                  <address>
                  1110 Gorgas Ave, San Francisco, CA 94129, EE. UU.
                  </address>
                </li>
                <li><i class="fa fa-phone"></i>+1 415-623-1000</li>
              </ul>
            </div>


            <div class="one_third">
              <h6 class="heading">Links</h6>
        
              <ul class="faico clear">
              <li><a href=""><i class="fa fa-lg fa-home"></i></a></li> 
              <li><a href="https://www.starwars.com/news" class="faicon-blog"><i class="fa fa-align-justify"></i></a></li>
              <li><a class="fa fa-shopping-bag faicon-shop" href="https://www.shopdisney.com/movies-shows/star-wars"></a></li>
              <li><a class="faicon-facebook" href="https://www.facebook.com/StarWars"><i class="fa fa-facebook"></i></a></li>
              <li><a class="faicon-twitter" href="https://twitter.com/starwars"><i class="fa fa-twitter"></i></a></li>
              <li><a class="fa fa-youtube faicon-youtube" href="https://www.youtube.com/user/starwars"><i class="fa fa-youtbe"></i></a></li>
              <li><a class="faicon-google-plus" href="https://plus.google.com/+StarWars"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="fa fa-tumblr faicon-tumblr" href="https://starwars.tumblr.com/"><i></i></a></li>
              <li><a class="fa fa-instagram faicon-instagram" href="https://www.instagram.com/starwars/"><i></i></a></li>
              </ul>
             
            </div>
           
          </footer>
        </div>
        
        <div class="wrapper row5" id="copy">
          <div id="copyright" class="hoc clear"> 
            
            <p class="fl_left">Copyright &copy; 2016 - All Rights Reserved - <a href="#">Domain Name</a></p>
            <p class="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
            
          </div>
        </div>
        
        <a id="backtotop" href="#top"><i class="fa fa-arrow-up"></i></a>
        </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Footer;