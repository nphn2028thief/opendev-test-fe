const slides = [
  {
    id: 1,
    image: "./assets/images/image1.jfif",
    title: "go-karts",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
  },
  {
    id: 2,
    image: "./assets/images/image2.png",
    title: "jumparena",
    description:
      "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
  },
  {
    id: 3,
    image: "./assets/images/image3.jfif",
    title: "Virtuální realita",
    description:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
  },
  {
    id: 4,
    image: "./assets/images/image4.jfif",
    title: "MULTIBALL",
    description:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
  },
  {
    id: 5,
    image: "./assets/images/image5.png",
    title: "Laserová střelnice",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
  },
];

class SlideBanner {
  constructor() {
    this.currentSlide = 0;
    this.slidesContainer = document.getElementById("slides-container");
    this.dotsContainer = document.getElementById("dots-container");

    this.init();
  }

  init() {
    this.renderSlides();
    this.renderDots();
    this.setupEventListeners();
    this.startAutoSlide();
  }

  renderSlides() {
    this.slidesContainer.innerHTML = "";
    slides.forEach((slide) => {
      const slideElement = document.createElement("div");
      slideElement.className = "slide";
      slideElement.innerHTML = `
        <img src="${slide.image}" alt="${slide.title}">
        <div class="overlay">
            <div class="content max-w-[calc(100%-48px)] w-full text-center lg:w-[auto] lg:text-start left-1/2 -translate-x-1/2 lg:left-12 lg:-translate-x-0">
                <h2 class="text-[88px] lg:text-[120px]">${slide.title}</h2>
                <div class="flex flex-col items-center lg:flex-row gap-3 font-space-grotesk">
                    <p class="text-sm">${slide.description}</p>
                    <button type="button" class="w-full lg:w-[auto] find-out-more-btn lg:ml-4">
                        <span>Find out more</span>
                    </button>
                </div>
            </div>
        </div>
    `;
      this.slidesContainer.appendChild(slideElement);
    });
  }

  renderDots() {
    this.dotsContainer.innerHTML = "";
    slides.forEach((_, index) => {
      const dotsContainer = document.createElement("div");
      dotsContainer.className = "dots-container";

      const dot = document.createElement("div");
      dot.className = `dot ${this.currentSlide === index ? "active" : ""}`;
      dotsContainer.className = `dots-container ${
        this.currentSlide === index ? "active" : ""
      }`;
      dot.addEventListener("click", () => this.goToSlide(index));
      dotsContainer.appendChild(dot);
      this.dotsContainer.appendChild(dotsContainer);
    });
  }

  updateSlide() {
    this.slidesContainer.style.transform = `translateX(-${
      this.currentSlide * 100
    }%)`;
    this.renderDots();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlide();
  }

  goToPrev() {
    this.currentSlide =
      this.currentSlide === 0 ? slides.length - 1 : this.currentSlide - 1;
    this.updateSlide();
  }

  goToNext() {
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    this.updateSlide();
  }

  startAutoSlide() {
    // this.intervalId = setInterval(() => {
    //   this.goToNext();
    // }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setupEventListeners() {
    // Pause on hover
    this.slidesContainer.addEventListener("mouseenter", () =>
      this.stopAutoSlide()
    );
    this.slidesContainer.addEventListener("mouseleave", () =>
      this.startAutoSlide()
    );
  }
}

export default SlideBanner;
