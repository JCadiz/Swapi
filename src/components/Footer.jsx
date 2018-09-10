import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
            <div>
                <div class="wrapper row4">
                    <footer id="footer" class="hoc clear"> 
      
                    <div class="one_third first">
                        <h6 class="heading">Star Wars</h6>
                        <p>maecenas tempus vestibulum felis in efficitur sed facilisis urna metus interdum pretium mi dignissim et fusce.</p>
                        <p class="btmspace-15">sagittis tempor nullam iaculis dolor id condimentum cursus duis scelerisque ac metus amet laoreet vestibulum dictum.</p>
                        <ul class="faico clear">
                        <li><a class="faicon-facebook" href="https://www.facebook.com/StarWars"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="faicon-twitter" href="https://twitter.com/starwars"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="fa fa-youtube" href="https://www.youtube.com/user/starwars"><i class="fa fa-youtbe"></i></a></li>
                        <li><a class="faicon-google-plus" href="https://plus.google.com/+StarWars"><i class="fa fa-google-plus"></i></a></li>
                        <li><a class="fa fa-tumblr" href="https://starwars.tumblr.com/"><i ></i></a></li>
                        <li><a class="fa fa-instagram" href="https://www.instagram.com/starwars/"><i ></i></a></li>
                        </ul>
                    </div>
      <div class="one_third">
        <h6 class="heading">luctus vestibulum magna</h6>
        <ul class="nospace linklist contact">
          <li><i class="fa fa-map-marker"></i>
            <address>
            Street Name &amp; Number, Town, Postcode/Zip
            </address>
          </li>
          <li><i class="fa fa-phone"></i> +00 (123) 456 7890</li>
          <li><i class="fa fa-fax"></i> +00 (123) 456 7890</li>
          <li><i class="fa fa-envelope-o"></i> info@domain.com</li>
        </ul>
      </div>
      <div class="one_third">
        <h6 class="heading">velit porttitor ac euismod</h6>
        <ul class="nospace linklist">
          <li>
            <article>
              <h2 class="nospace font-x1"><a href="#">ut porttitor sit amet</a></h2>
              <time class="font-xs block btmspace-10" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
              <p class="nospace">nunc sed eget augue varius dapibus mi eget lobortis risus nunc a leo&hellip;</p>
            </article>
          </li>
          <li>
            <article>
              <h2 class="nospace font-x1"><a href="#">finibus commodo ex eu</a></h2>
              <time class="font-xs block btmspace-10" datetime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
              <p class="nospace">pharetra nam sit amet lacus tempor ipsum finibus luctus sed fringilla&hellip;</p>
            </article>
          </li>
        </ul>
      </div>
      
            </footer>
  </div>

  <div class="wrapper quicklinks">
    <nav class="hoc clear"> 
      
      <ul class="nospace">
        <li><a href=""><i class="fa fa-lg fa-home"></i></a></li> 
        <li><a href="https://www.starwars.com/">Blog</a></li>
        <li><a href="https://www.shopdisney.com/movies-shows/star-wars">Shop</a></li>
      </ul>
     
    </nav>
  </div>
  
  <div class="wrapper row5">
    <div id="copyright" class="hoc clear"> 
     
      <p class="fl_left">Copyright &copy; 2016 - All Rights Reserved - <a href="#">Domain Name</a></p>
      <p class="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
    </div>
  </div>
            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Footer;