import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-secondary"></i>Brandlog
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/works" class="text-reset">
                    How it works
                  </a>
                </p>
                <p>
                  <a href="/about" class="text-reset">
                    About us
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3 text-secondary"></i> Westlands,
                  Nairobi.
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  info@brandlogs.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-secondary"></i> + 254 234 567
                  88
                </p>
                <p>
                  <i class="fas fa-print me-3 text-secondary"></i> + 254 234 567
                  89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4" style={{ backgroundColor: "#ebebeb" }}>
          © 2023 Copyright:
          <a class="text-reset fw-bold" href="/">
            Brandlog.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
