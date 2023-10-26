import React from "react";
import Navbar2 from "./Navbar2";
import logo from "../images/personel.jpg"
import logo2 from "../images/personel2.jpg"
import logo3 from "../images/personel3.jpg"
import logo4 from "../images/personel4.jpg"

function Home() {
  return (
    <div>
      <Navbar2 />
      <div class="row">
  <div class="col-sm-6">
    <div class="card mt-3">
      <div class="card-body">
        <img src={logo} alt="" />
        <h5 class="card-title">Yönetim</h5>
        <p class="card-text">İş takipleri, iş atamaları,iş yönetimi artık daha kolay ve daha basit</p>
        <a href="/#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mt-3">
      <div class="card-body">
        <img src={logo2} alt="" />
        <h5 class="card-title">İş Odaklılığı</h5>
        <p class="card-text">İş atamalarınız sayesinde yapacağınız işlere odaklanmak daha da kolay</p>
        <a href="/#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mt-3">
      <div class="card-body">
        <img src={logo3} alt="" />
        <h5 class="card-title">İş Atamaları</h5>
        <p class="card-text">Görev tanımlamaları ile işleri yönetmenin tam zamanı</p>
        <a href="/#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card mt-3">
      <div class="card-body">
        <img src={logo4} alt="" />
        <h5 class="card-title">Zaman Yönetimi</h5>
        <p class="card-text">Zamanınızı iyi ve doğru yöntemlerle harcayın, kendinize zaman ayırın</p>
        <a href="/#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;
