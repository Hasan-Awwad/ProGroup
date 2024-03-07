import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import './script.js'
import './script2.js'
import './script3.js'
import './script4'
import Footer from './components/Footer';
import Network from './components/Network';
import Solutions from './components/Solutions';

function App() {
  return (
    <div className="App">
      <div class='cursor' id="cursor"></div>
      <div class='cursor2' id="cursor2"></div>
      <div class='cursor3' id="cursor3"></div>
      <nav class="navbar navbar-expand-custom navbar-mainbg">
        <div class="nav-but-wrap">
          <div class="menu-icon hover-target">
            <span class="menu-icon__line menu-icon__line-left"></span>
            <span class="menu-icon__line"></span>
            <span class="menu-icon__line menu-icon__line-right"></span>
          </div>
          <div class="nav">
            <div class="nav__content">
              <ul class="nav__list">
                <li class="nav__list-item home_scroll active-nav"><a href="#" class="hover-target">Home</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">Portfolio</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">Studio</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">News</a></li>
                <li class="nav__list-item footer_scroll"><a href="#" class="hover-target">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <img class="mylogo" src="/assets/images/Progroup-lb-logo-1x.png" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav ml-auto">
            <div class="hori-selector-container">
              <div class="hori-selector">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>
            <li class="hover-target nav-item home_scroll active">
              <a class="nav-link" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Home</a>
            </li>
            <li class="hover-target nav-item">
              <a class="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>About</a>
            </li>
            <li class="hover-target nav-item">
              <a class="nav-link" href="javascript:void(0);"><i class="far fa-clone"></i>Blog</a>
            </li>
            <li class="hover-target nav-item">
              <a class="nav-link footer_scroll" href="javascript:void(0);"><i class="far fa-calendar-alt"></i>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="switch" class="hover-target switched" style={{
        "margin-left": "50%"
      }}>
        <div id="circle"
        ></div>
      </div>
      <div class="cont">
        <div class="slider"></div>
        <ul class="nav"></ul>
        <div data-target='right' class="side-nav side-nav--right"></div>
        <div data-target='left' class="side-nav side-nav--left"></div>
      </div>

      <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper">
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">

              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                alt="" />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
                repellendus magni illo ea animi? </div>
              <a href="#" class="blog-slider__button">READ MORE</a>
            </div>
          </div>
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                alt="" />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
              <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
                repellendus magni illo ea animi?</div>
              <a href="#" class="blog-slider__button">READ MORE</a>
            </div>
          </div>

          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
                alt="" />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
                repellendus magni illo ea animi?</div>
              <a href="#" class="blog-slider__button">READ MORE</a>
            </div>
          </div>

        </div>
        <div class="blog-slider__pagination"></div>
      </div>

      {/* Begin: Soultions Section */}
      <h1 class="title-solution">Solutions That We Provide It</h1>
      <Solutions />
      {/* End: Soultions Section */}

      {/* Begin: Network Section */}
      <Network />
      {/* End: Network Section */}
      <Footer />
    </div>
  );
}

export default App;
