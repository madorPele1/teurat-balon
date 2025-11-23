let level = 0;
let imgBalon;
let textPart;
let clickStage = 0;
let btn;
let btnNextPart;
let titleParts;
let clickStage1 = 0; // משתנה גלובלי לניהול הסדר
let motHarama;
let arrow;
let wire;

// function addWire() {
//   if (!document.querySelector(".wire")) {
//     // לבדוק אם כבר קיים
//     const wire = document.createElement("img");
//     wire.src = "media/wire.png";
//     wire.classList.add("wire");
//     document.body.appendChild(wire);
//   }
// }

window.addEventListener("load", () => {
  document.getElementById("startButton").addEventListener("click", function () {
    // החלפת רקע
    document.body.style.backgroundImage = "url('media/backgroundRegular.svg')";

    // מחיקת כפתור
    this.style.display = "none";

    // הפעלת הנורות
    navbar(level);
  });
});
function navbar(level) {
  // addWire();
  // -------------------------------
  // הוספת החוט מיד מעל הנורות
  // -------------------------------
  const bulbs = document.getElementsByClassName("bulb");

  // הצגת כל הנורות + איפוס קלאס "on"
  for (let bulb of bulbs) {
    bulb.style.visibility = "visible";
    bulb.classList.remove("on");
  }

  // עדכון מצב נורות דולקות/כבויות
  for (let i = 1; i <= 4; i++) {
    const img = document.getElementById(`img${i}`);
    img.src = i <= level ? "media/bulbOn.svg" : "media/bulbOff.svg";
    if (i <= level) img.classList.add("on");
  }

  // -------------------------------
  // הוספת ארבעת הטקסטים
  const container = document.getElementById("text-container");
  const texts = [
    "יעוד<br>והכרת הכלי",
    "הכנות  <br>והפעלה",
    "דגשים  <br>והוראות בטיחות",
    "תרגול <br>   מסכם",
  ];

  container.innerHTML = "";
  texts.forEach((txt, i) => {
    const p = document.createElement("p");
    p.classList.add("bulb-text");
    p.id = `text${i + 1}`;
    p.innerHTML = txt;
    container.appendChild(p);
  });

  // -------------------------------
  // מאזיני לחיצה עם סדר לפי clickStage
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const wire1 = document.getElementById("wire");
  wire1.src = "media/wire.png";

  wire1.style.visibility = "visible";

  // מחיקה של מאזינים קיימים כדי למנוע כפילויות
  img1.onclick = null;
  img2.onclick = null;

  img1.onclick = () => {
    if (clickStage === 0) {
      step1();
      document.body.style.backgroundImage = "url('media/backgroung2.png')";
      container.style.display = "none";
      hideBulbs();
      clickStage++;
    }
    wire1.style.visibility = "hidden";
  };

  img2.onclick = () => {
    if (clickStage === 1) {
      step2New();
      wire1.style.visibility = "hidden";

      document.body.style.backgroundImage =
        "url('media/backgroundRegular.svg')";
      container.style.display = "none";
      hideBulbs();
      clickStage++;
    }
  };
}

function hideBulbs() {
  const elements = document.getElementsByClassName("bulb");
  for (let el of elements) el.style.display = "none";
}

function step1() {
  const title = document.createElement("h2");
  title.textContent = "ייעוד תאורת הבלון";
  title.classList.add("textTitle");
  document.body.appendChild(title);

  const newText = document.createElement("p");
  newText.textContent = `ערכת התאורה הינה ערכה פלוגתית המשמשת להארת אתר ההרס על מנת לאפשר לכוחות החילוץ לעבוד בתנאי חשכה וראות מוגבלת למטרת חילוץ הלכודים.
וכן, לסמן ללכודים גם בשעות הלילה כי מתבצעים מאמצים לחלצם`;
  newText.classList.add("textDes");
  document.body.appendChild(newText);

  const title1 = document.createElement("h4");
  title1.textContent = "נתונים טכניים";
  title1.classList.add("textTitle");
  title1.style.top = "40%";
  title1.style.right = "30%";

  document.body.appendChild(title1);

  const texts = [
    ['• משקל הערכה – 16 ק"ג', "• הספק נורה – 100 ואט"],
    ["• גובה מקסימלי – 5.3 מטר", "• הספק הערכה – 610 ואט"],
  ];

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  texts.forEach((rowTexts) => {
    const row = document.createElement("tr");

    rowTexts.forEach((text) => {
      const cell = document.createElement("td");
      cell.style.border = "none";
      cell.style.padding = "6px";
      cell.textContent = text; // <-- כאן מכניסים את הטקסט לכל תא
      cell.classList.add("border-style");

      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  document.body.appendChild(table);

  btn = document.createElement("button");
  btn.textContent = "עכשיו הכל מובן!";
  btn.classList.add("btn-style");
  document.body.appendChild(btn);

  imgBalon = new Image();

  imgBalon.src = "media/balon1.png"; // הנתיב לתמונה
  imgBalon.classList.add("balon");
  document.body.appendChild(imgBalon);

  btn.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('media/backgroundRegular.svg')";

    this.style.visibility = "hidden";

    title.style.display = "none";
    title1.style.display = "none";
    newText.style.display = "none";
    table.style.display = "none";
    imgBalon.style.visibility = "hidden";

    // document.getElementById("text-container").style.display = "block";
    // const elements = document.getElementsByClassName("bulb");
    // for (let el of elements) {
    //   el.style.display = "block";
    // }
    step2();
    document.body.style.backgroundImage = "url('media/backgroundRegular.svg')";

    // level = level + 1;
    // navbar(level);
  });
}

//   const title = document.createElement("h2");
//   title.textContent = "ייעוד תאורת הבלון";
//   title.classList.add("textTitle");
//   document.body.appendChild(title);

function step2() {
  // נוודא שהמשתנה מוגדר תמיד
  titleParts = document.querySelector(".title-part-style");

  if (!titleParts) {
    titleParts = document.createElement("h2");
    titleParts.textContent = "חלקי הערכה";
    titleParts.classList.add("title-part-style");
    document.body.appendChild(titleParts);
  }
  //   btnClickOnme = document.createElement("p");
  //   btnClickOnme.textContent = "לחצו עליי";
  //   btnClickOnme.classList.add("click-on-me");
  //   btnClickOnme.style.right = "10vw";
  // //   btnClickOnme.style.top = "10vh";

  //   btnClickOnme.style.paddingRight = "20px";
  //   btnClickOnme.style.paddingLeft = "20px";
  //   document.body.appendChild(btnClickOnme);

  const lightBalon = document.createElement("img");
  lightBalon.src = "media/lightBalon.png";
  lightBalon.classList.add("light-Balon");
  document.body.appendChild(lightBalon);

  //   imgBalon.style.cssText = `
  //     visibility: visible;
  //     width: 70vw;
  //     height: 60vh;
  //     position: absolute;
  //     right: 12%;
  //     bottom: 16%;
  //   `;

  lightBalon.addEventListener("click", function () {
    titleParts.textContent = "מוט ההרמה"; // עכשיו titleParts גלובלי
    parts();
    lightBalon.style.visibility = "hidden";
    motHarama = document.createElement("img");
    motHarama.src = "media/motHarama.svg";
    motHarama.classList.add("motHarama");
    document.body.appendChild(motHarama);
    arrow = document.createElement("img");
    arrow.src = "media/arrow.svg";
    arrow.classList.add("arrowPart1");
    document.body.appendChild(arrow);
  });
}

function parts() {
  titleParts.textContent = "מוט ההרמה";

  let textPart = document.querySelector(".text-part");
  if (!textPart) {
    textPart = document.createElement("p");
    textPart.textContent =
      "מוט ההרמה מורכב משלושה שלבים לשם הרמת גוף התאורה לגובה הרצוי";
    textPart.classList.add("text-part");
    document.body.appendChild(textPart);
  }

  imgBalon.style.cssText = `
    visibility: visible;
    width: 70vw;
    height: 60vh;
    position: relative;
    right: -37.2vw;
    top: 32vh;
  `;

  btnNextPart = document.createElement("button");
  btnNextPart.textContent = "הבנתי!";
  btnNextPart.classList.add("btn-part-style");
  btnNextPart.style.paddingRight = "20px";
  btnNextPart.style.paddingLeft = "20px";
  document.body.appendChild(btnNextPart);

  // הסרת מאזינים קודמים
  btnNextPart.onclick = null;

  btnNextPart.onclick = function () {
    motHarama.style.display = "none";

    if (clickStage1 === 0) {
      titleParts.textContent = "חצובה";
      titleParts.style.right = "38%";
      textPart.textContent =
        "החצובה מורכבת משלושה רגליי ייצוב עם פרפריות לצורך חיזוק ואיזון החצובה";
      arrow.classList.remove("arrowPart1");
      arrow.classList.add("arrowPart2");
      clickStage1++;
    } else if (clickStage1 === 1) {
      titleParts.textContent = "גוף התאורה";
      titleParts.style.right = "30%";
      textPart.textContent =
        "גוף התאורה הוא נורת לד המוקפת במעטפת עגולה בצורת בלון";
      arrow.classList.remove("arrowPart2");
      arrow.classList.add("arrowPart3");
      clickStage1++;
    } else if (clickStage1 === 2) {
      titleParts.textContent = "משקולת";
      titleParts.style.right = "35%";
      textPart.textContent = "המשקולות מאזנות את החצובה, ישנן 3 משקולות";
      arrow.classList.remove("arrowPart3");
      arrow.classList.add("arrowPart4");
      clickStage1++;

      btnNextPart.textContent = "בחזרה למסלול";
      btnNextPart.style.right = "27%";

      // מסיר את ה-onclick הראשי כדי שלא ירוץ פעמיים
      btnNextPart.onclick = null;

      btnNextPart.addEventListener("click", function () {
        document.body.style.backgroundImage =
          "url('media/backgroundRegular.svg')";

        this.style.visibility = "hidden";

        titleParts.style.display = "none";
        arrow.style.display = "none";
        btnNextPart.style.visibility = "hidden";
        imgBalon.style.display = "none";
        textPart.style.display = "none";

        document.getElementById("text-container").style.display = "block";
        const elements = document.getElementsByClassName("bulb");
        for (let el of elements) {
          el.style.display = "block";
        }

        // document.body.style.backgroundImage =
        //   "url('media/backgroundRegular.svg')";

        level = 1;

        navbar(level);
      });
    }
  };
}

function step2New() {
  const title = document.createElement("h2");
  title.classList.add("Title");
  title.textContent = "הכנות ובדיקות לפני הפעלה";
  document.body.appendChild(title);

  const textPrep = document.createElement("p");
  textPrep.classList.add("text-prep");
  textPrep.textContent = "נוודא כי המעטפת יבשה לחלוטין לפני התקנת הכיסוי המגן";
  document.body.appendChild(textPrep);
  btnNextPart.style.visibility = "visible";
  btnNextPart.style.right = "40vw";
  btnNextPart.textContent = "המשך";
}
