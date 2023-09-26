
class MyHeader extends HTMLElement 
{
    connectedCallback() 
    {
      this.innerHTML = ` 
      <!-- Header Section -->
      <header>
          <div class="header-content">
              <div class="logo" >
              <a href="/"><img src="/images/logo-removebg-preview.png" alt="Company Logo"></a>
              </div>
              <nav>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/pages/about-us.html">About Us</a></li>
                      <li><a href="/pages/projects.html">Projects</a></li>
                      <li><a href="/pages/products.html">Products</a></li>
                      <li><a href="/pages/services.html">Services</a></li>
                      <li><a href="/pages/team.html">Team</a></li>
                      <li><a href="/pages/contact.html"><b>Contact US</b></a></li>
                  </ul>
              </nav>
          </div>
      </header> `
    }
}
      
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback(){
      this.innerHTML = ` <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Aurum Smart Tech specializes in industrial automation and cutting-edge technology solutions, from UHF-RFID to embedded firmware development, ensuring top-notch product engineering and testing for a defect-free final product.We are driven by a passion for innovation and a commitment to delivering excellence in every project we undertake.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Projects</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Project-1</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Project-2</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Project-3</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Project-4</a></li>
              <li><a href="http://scanfcode.com/category/android/">Project-5</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Project-6</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/pages/about-us.html">About Us</a></li>
              <li><a href="/pages/contact.html">Contact Us</a></li>
              <li><a href="/pages/services.html">Services</a></li>
              <li><a href="/pages/products.html">Products</a></li>
              <li><a href="/pages/team.html">Team</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright © 2023 <a href="#">Aurum Smart Tech</a>. All Rights Reserved.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      `;
    }
  }
      
customElements.define('my-footer', MyFooter);
