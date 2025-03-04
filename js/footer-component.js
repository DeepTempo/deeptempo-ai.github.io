document.addEventListener('DOMContentLoaded', function() {
  // Create footer HTML
  const footerHTML = `
    <footer class="footer">
      <div class="row">
        <div class="col-1-of-2">
          <ul class="footer-nav">
            <li>&copy; DeepTempo.ai - 2024. All rights reserved.</li>
            <li><a href="docs/DeepTempo - Privacy Policy for Snowflake NativeApp.pdf">Privacy</a></li>
            <li><a href="docs/Getting Started with TEMPO.pdf">Documentation</a></li>
          </ul>
          <div class="footer__social-media">
            <a href="https://www.youtube.com/@DeepTempo-ai" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/groups/13114314/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.reddit.com/r/DeepTempo/" target="_blank"><i class="fab fa-reddit"></i></a>
            <a href="https://medium.com/deeptempo" target="_blank"><i class="fab fa-medium"></i></a>
          </div>
          <div class="footer__certifications">
            <img src="img/native-app-accelerator-badge.png" alt="Native App Accelerator Badge" class="footer-cert-logo">
            <img src="img/nvidia-inception-program-badge.png" alt="Nvidia Inception Program Badge" class="footer-cert-logo">
            <img src="img/BNY_Ascent.png" alt="BNY_Ascent Badge" class="footer-cert-logo">
          </div>
        </div>
        <div class="col-1-of-2">
          <picture class="footer__logo">
            <img alt="Full logo" src="img/logo-full-color.png">
          </picture>
          <p class="footer__copyright">
            DeepTempo was built by a team of deep learning engineers and enterprise system builders, many of whom have spent years in security operations teams. We believe in harnessing collective defense for cyber security via deep learning, to make the lives of security operations teams better while restoring the initiative to the defenders.
          </p>
        </div>
      </div>
    </footer>
  `;

  // Insert footer before the closing body tag
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}); 