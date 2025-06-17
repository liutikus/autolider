const cars = [
  {
    name: "Kia Sorento 2020",
    price: "22.500$",
    carType: "SUV",
    img: "kia-sorento-2020",
  },
  {
    name: "Kia Sorento 2017",
    price: "17.800$",
    carType: "SUV",
    img: "kia-sorento-2017",
  },
  {
    name: "Hyundai Santa Fe",
    price: "22.500$",
    carType: "SUV",
    img: "hyundai-santa-fe",
  },
  {
    name: "Hyundai Santa Fe 2017",
    price: "18.000$",
    carType: "SUV",
    img: "hyundai-santa-fe-2017",
  },
  {
    name: "Mercedes E class W213 2016",
    price: "21.000$",
    carType: "Sedan",
    img: "mercedes-e-class-w213-2016",
  },
  {
    name: "Renault Koleos 2016",
    price: "14.000$",
    carType: "SUV",
    img: "renaul-koleos-2016",
  },
  {
    name: "Renault Arkana 2020",
    price: "13.000$",
    carType: "SUV",
    img: "renault-arkana-2020",
  },
  {
    name: "BMW G30 2017",
    price: "22.500$",
    carType: "Sedan",
    img: "bmw-g30-2017",
  },
  {
    name: "BMW G20 2019",
    price: "26.000$",
    carType: "Sedan",
    img: "bmw-g20-2019",
  },
  {
    name: "Mini Cooper 2016",
    price: "11.600$",
    carType: "Hatchback",
    img: "mini-cooper-2016",
  },
  {
    name: "Audi A6 2020",
    price: "27.700$",
    carType: "Sedan",
    img: "audi-a6-2020",
  },
  {
    name: "Audi A6 2017",
    price: "17.300$",
    carType: "Sedan",
    img: "audi-a6-2017",
  },
  {
    name: "Volkswagen Arteon 2019",
    price: "21.750$",
    carType: "Sedan",
    img: "volkswagen-arteon-2019",
  },
  {
    name: "Volkswagen Tiguan 2018",
    price: "21.500$",
    carType: "SUV",
    img: "volkswagen-tiguan-2018",
  },
  {
    name: "BMW X3 G01 2017",
    price: "27.700$",
    carType: "SUV",
    img: "bmw-x3-g01-2017",
  },
  {
    name: "Mercedes GLC 2016",
    price: "23.450$",
    carType: "SUV",
    img: "mercedes-glc-2016",
  },
  {
    name: "Peugeot 5008 2018",
    price: "16.800$",
    carType: "SUV",
    img: "peugeot-5008-2018",
  },
  {
    name: "Peugeot 3008 2018",
    price: "16.000$",
    carType: "SUV",
    img: "peugeot-3008-2018",
  },
  {
    name: "Hyundai Tucson 2020",
    price: "21.000$",
    carType: "SUV",
    img: "hyundai-tucson-2020",
  },
  {
    name: "Hyundai Palisade 2019",
    price: "25.000$",
    carType: "SUV",
    img: "hyundai-palisade-2019",
  },
  {
    name: "Kia Carnival 2020",
    price: "22.000$",
    carType: "Minivan",
    img: "kia-carnival-2020",
  },
];

const catalogCardContainer = document.querySelector(".card-catalog");
const faqContainer = document.querySelector(".faq-container");

const faqsRo = [
  {
    question: "Cât durează livrarea unui automobil din Coreea de Sud?",
    response: "Livrarea durează în medie între 60 și 80 de zile, în funcție de metoda de transport și formalitățile vamale.",
    id: 1,
  },
  {
    question: "Pot verifica istoricul mașinii înainte de a o cumpăra?",
    response: "Da, oferim verificare completă a istoricului prin platforme specializate înainte de achiziție.",
    id: 2,
  },
  {
    question: "Ce documente sunt necesare pentru înmatriculare în Moldova?",
    response: "Veți avea nevoie de actul de cumpărare, certificatul de origine, dovada plății taxelor vamale și raportul de inspecție tehnică.",
    id: 3,
  },
  {
    question: "Se pot achita mașinile în rate?",
    response: "Plata se face prin bancă, în mai multe tranșe, conform contractului de vânzare-cumpărare.",
    id: 4,
  },
];

const faqsRu = [
  {
    question: "Сколько времени занимает доставка автомобиля из Южной Кореи?",
    response: "Доставка занимает в среднем от 60 до 80 дней, в зависимости от способа транспортировки и таможенных процедур.",
    id: 1,
  },
  {
    question: "Могу ли я проверить историю автомобиля до покупки?",
    response: "Да, мы предоставляем полную проверку истории через специализированные платформы перед покупкой.",
    id: 2,
  },
  {
    question: "Какие документы необходимы для регистрации в Молдове?",
    response: "Вам понадобятся договор купли-продажи, сертификат происхождения, подтверждение уплаты таможенных сборов и технический осмотр.",
    id: 3,
  },
  {
    question: "Можно ли оплатить автомобиль в рассрочку?",
    response: "Оплата производится через банк, несколькими траншами, в соответствии с договором купли-продажи.",
    id: 4,
  },
];






const RenderCatalog = ()=>{
  let cardHTML = "";
  if (document.querySelector(".langInfo").innerHTML === "Румынский"){
  cars.forEach(({name, price, carType, img})=>{

  cardHTML +=`    <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="car-box-items">
                <div class="car-titile">
                  <h4><a href="#">${name}</a></h4>
                  <p><span>${carType}</span></p>
                </div>
                <div class="car-image">
                  <img style="border-radius: 20px;" src="../assets/img/car/${img}.jpg" alt="Hyundai Santa Fe">
                </div>
                <div class="car-list-items">
                  <ul>

                  </ul>
                  <div class="price-items">
                    <h3><span data-i18n="beforePrice">от</span> ${price}</h3>
                    <a href="tel:+37369414227" class="theme-btn"><span
                        data-i18n="buy_this_car">Связаться с нами </span></a>
                  </div>
                </div>
              </div>
            </div>`

})
  }else if(document.querySelector(".langInfo").innerHTML === "Română"){
   cars.forEach(({name, price, carType, img})=>{

  cardHTML +=`    <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="car-box-items">
                <div class="car-titile">
                  <h4><a href="#">${name}</a></h4>
                  <p><span>${carType}</span></p>
                </div>
                <div class="car-image">
                  <img style="border-radius: 20px;" src="../assets/img/car/${img}.jpg" alt="Hyundai Santa Fe">
                </div>
                <div class="car-list-items">
                  <ul>

                  </ul>
                  <div class="price-items">
                    <h3><span data-i18n="beforePrice">de la</span> ${price}</h3>
                    <a href="tel:+37369414227" class="theme-btn"><span
                        data-i18n="buy_this_car">Contactează-ne</span></a>
                  </div>
                </div>
              </div>
            </div>`

})
  }
catalogCardContainer.innerHTML = cardHTML;

}

const RenderFaqs = ()=>{
  let cardHTML = "";
  console.log('asdf')
  if (document.querySelector(".langInfo").innerHTML === "Румынский"){
faqsRu.forEach(({question, response, id})=>{
cardHTML += `  <div class="accordion-item wow fadeInUp" data-wow-delay=".${id*2}s"
                  style="visibility: visible; animation-delay: 0.${id*2}s; animation-name: fadeInUp;">
                  <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${id}"
                      aria-expanded="true" aria-controls="faq${id}">
<span data-i18n="faqQuestion_${id}">${question}</span>
                    </button>
                  </h5>
                  <div id="faq${id}" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
<span data-i18n="faqResponse_${id}">${response}</span>
                    </div>
                  </div>
                </div>`
})
  }else if(document.querySelector(".langInfo").innerHTML === "Română"){
faqsRo.forEach(({question, response, id})=>{
cardHTML += `  <div class="accordion-item wow fadeInUp" data-wow-delay=".${id*2}s"
                  style="visibility: visible; animation-delay: 0.${id*2}s; animation-name: fadeInUp;">
                  <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${id}"
                      aria-expanded="true" aria-controls="faq${id}">
<span data-i18n="faqQuestion_${id}">${question}</span>
                    </button>
                  </h5>
                  <div id="faq${id}" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
<span data-i18n="faqResponse_${id}">${response}</span>
                    </div>
                  </div>
                </div>`
})
  }
faqContainer.innerHTML = cardHTML;

}

RenderCatalog();
RenderFaqs();