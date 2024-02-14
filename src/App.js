import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './script.js'
import './script2.js'

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
                <li class="nav__list-item active-nav"><a href="#" class="hover-target">Home</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">Portfolio</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">Studio</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">News</a></li>
                <li class="nav__list-item"><a href="#" class="hover-target">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <img class="mylogo" src="/assets/Progroup-lb-logo-1x.png" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav ml-auto">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item active">
              <a class="nav-link" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);"><i class="far fa-clone"></i>Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);"><i class="far fa-calendar-alt"></i>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="switch" class="hover-target switched" style={{
          "margin-left":"50%"
        }}>
				<div id="circle"
          ></div>
			</div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>


      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>
      <div>
        <p>TEST</p>
      </div>


      <div>
        <p>TEST</p>
      </div>
    </div>
  );
}

export default App;
