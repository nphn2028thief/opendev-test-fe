const attractions = [
  {
    id: 1,
    src: "./assets/images/image1.jfif",
    text: "kartarena",
    description:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
  },
  {
    id: 2,
    src: "./assets/images/image2.png",
    text: "jumparena",
    description:
      "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
  },
  {
    id: 3,
    src: "./assets/images/image3.jfif",
    text: "Virtual reality",
    description:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
  },
  {
    id: 4,
    src: "./assets/images/image4.jfif",
    text: "multibal;",
    description:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
  },
  {
    id: 5,
    src: "./assets/images/image5.png",
    text: "laser shooting range",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
  },
  {
    id: 6,
    src: "./assets/images/image6.png",
    text: "company events",
    description:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
  },
];

class Attraction {
  constructor() {
    this.active = 1;
    this.hoverId = null;
    this.src = attractions[0].src;
    this.alt = `image-${attractions[0].id}`;
    this.attractionContainer = document.getElementById("attraction-list");
    this.init();
  }

  init() {
    this.renderAttractionList();
    this.renderImage();
  }

  updateStyles() {
    const items = this.attractionContainer.querySelectorAll(".attraction-item");
    items.forEach((item, index) => {
      const attractionId = attractions[index].id;
      const isActive = attractionId === this.active;
      const isHovered = attractionId === this.hoverId;

      // If hovered, use hover styles; otherwise, use active/inactive styles
      const gradientColor =
        isHovered || isActive ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
      item.style.background = `linear-gradient(to left, ${gradientColor}, transparent), url("${attractions[index].src}") center / cover no-repeat`;

      // Apply text color based on hover or active state
      item.classList.toggle("text-[#D9D9D9]", isHovered || isActive);
      item.classList.toggle("text-[#292929]", !(isHovered || isActive));

      if (isHovered || isActive) {
        item.style.marginRight = "0";
      } else {
        item.style.marginRight = "2rem";
      }
    });
  }

  renderAttractionList() {
    attractions.forEach((item) => {
      const attractionItem = document.createElement("div");
      attractionItem.classList.add(
        "attraction-item",
        "skew-wrapper",
        "flex",
        "justify-end",
        "items-end",
        "px-6",
        "py-4",
        "transition-all",
        "cursor-pointer"
      );

      attractionItem.classList.add(
        `text-[${this.active === item.id ? "#D9D9D9" : "#292929"}]`
      );

      attractionItem.style.marginRight =
        this.active === item.id || this.hoverId === item.id ? "0" : "2rem";

      attractionItem.style.background = `linear-gradient(to left, ${
        this.active === item.id ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)"
      }, transparent), url("../.${item.src}") center / cover no-repeat`;

      attractionItem.innerHTML = `
        <span class="skew-text uppercase text-[32px] font-[BigShouldersText] leading-[100%]">${item.text}</span>
        `;

      attractionItem.addEventListener("mouseover", () => {
        this.hoverId = item.id;
        this.updateStyles();
      });

      attractionItem.onmouseleave = () => {
        this.hoverId = null;
        this.updateStyles();
      };

      attractionItem.onclick = () => {
        this.src = item.src;
        this.alt = `image-${item.id}`;
        this.active = item.id;
        this.renderImage();
        this.updateStyles();
      };

      this.attractionContainer.appendChild(attractionItem);
    });
  }

  renderImage() {
    const attractionImage = document.getElementById("attraction-img");
    attractionImage.src = this.src;
    attractionImage.alt = this.alt;
  }
}

export default Attraction;
