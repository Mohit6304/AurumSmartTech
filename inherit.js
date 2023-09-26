
class MyHeader extends HTMLElement 
{
    connectedCallback() 
    {
      this.innerHTML = ` 
      <!-- Header Section -->
      <header>
          <div class="header-content">
              <div class="logo" >
              <a href="/"><img src="/images/lo.png" alt="Company Logo"></a>
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
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/pages/about-us.html">About Us</a></li>
              <li><a href="/pages/contact.html">Contact Us</a></li>
              <li><a href="/pages/services.html">Services</a></li>
              <li><a href="/pages/products.html">Products</a></li>
              <li><a href="/pages/team.html">Team</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
    <h6>Contact Us</h6>
    <address>
        <p>
            <strong>Address:</strong><br>
            # 6-3-563/29, Somajiguda,<br>
            Hyderabad - 500 082
        </p>
        <p>
            <strong>Contact No:</strong><br>
            <a href="tel:+919866558130">+91 9866558130</a> / <a href="tel:+919866558131">31</a>
        </p>
        <p>
            <strong>Landline:</strong><br>
            <a href="tel:+914048576520">+91 040 48576520</a>
        </p>
        <p>
            <strong>Email:</strong><br>
            <a href="mailto:info@aurumsmart.com">info@aurumsmart.com</a><br>
        </p>
    </address>
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
