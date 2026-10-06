class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-grid">
            <!-- Column 1: Brand -->
            <div class="footer-col brand-col">
              <h3 class="footer-logo">🩸Uthiram</h3>
              <p class="footer-desc">
                Connecting generous blood donors with those in need. Every drop counts in saving lives across the nation.
              </p>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="donate.html">Donate Blood</a></li>
              </ul>
            </div>

            <!-- Column 3: Contact Info -->
            <div class="footer-col">
              <h4>Get in Touch</h4>
              <p><i class="fas fa-envelope"></i> support@uthiram.org</p>
              <p><i class="fas fa-phone"></i> +91 84285 73231</p>
              <p><i class="fas fa-map-marker-alt"></i> Salem, Tamil Nadu</p>
            </div>

            <!-- Column 4: Social Media -->
            <div class="footer-col">
              <h4>Follow Us</h4>
              <div class="footer-social">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <hr class="footer-divider">

          <div class="footer-bottom">
            <p>Copyright © 🩸Uthiram Foundation 2026. All rights reserved.</p>
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-footer', CustomFooter);