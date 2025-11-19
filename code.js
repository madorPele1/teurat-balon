let level = 0;
let imgBalon;
let textPart;
let clickStage = 0;
let btn;
let btnNextPart;
let titleParts;
let clickStage1 = 0; // משתנה גלובלי לניהול הסדר

window.addEventListener("load", () => {
  document.getElementById("startButton").addEventListener("click", function () {
    // החלפת רקע
    document.body.style.backgroundImage = "url('media/navpage.svg')";

    // מחיקת כפתור
    this.style.display = "none";

    // הפעלת הנורות
    navbar(level);
  });
});
function navbar(level) {
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

  // מחיקה של מאזינים קיימים כדי למנוע כפילויות
  img1.onclick = null;
  img2.onclick = null;

  img1.onclick = () => {
    if (clickStage === 0) {
      step1();
      document.body.style.backgroundImage = "url('media/backgroung2.png')";
      container.style.display = "none";
      hideBulbs();
      clickStage++; // מעבר לשלב הבא
    }
  };

  img2.onclick = () => {
    if (clickStage === 1) {
      // מופעל רק אחרי img1
      step2();
      document.body.style.backgroundImage =
        "url('media/backgroundRegular.svg')";
      container.style.display = "none";
      hideBulbs();
      clickStage++; // אם יש שלבים נוספים
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
  title1.style.right = "35%";

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
    document.body.style.backgroundImage = "url('media/navpage.svg')";

    this.style.visibility = "hidden";

    title.style.display = "none";
    title1.style.display = "none";
    newText.style.display = "none";
    table.style.display = "none";
    imgBalon.style.visibility = "hidden";

    document.getElementById("text-container").style.display = "block";
    const elements = document.getElementsByClassName("bulb");
    for (let el of elements) {
      el.style.display = "block";
    }
    level = level + 1;
    navbar(level);
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

  imgBalon.style.cssText = `
    visibility: visible;
    width: 70vw;
    height: 60vh;
    position: absolute;
    right: 12%;
    bottom: 16%;
  `;

  imgBalon.addEventListener("click", function () {
    titleParts.textContent = "מוט ההרמה"; // עכשיו titleParts גלובלי
    parts();
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

  // הסרת מאזינים קודמים אם קיימים
  btnNextPart.onclick = null;

  btnNextPart.onclick = function () {
    if (clickStage1 === 0) {
      titleParts.textContent = "חצובה";
      titleParts.style.right = "38%";
      textPart.textContent =
        "החצובה מורכבת משלושה רגליי ייצוב עם פרפריות לצורך חיזוק ואיזון החצובה";
      clickStage1++;
    } else if (clickStage1 === 1) {
      titleParts.textContent = "גוף התאורה";
      titleParts.style.right = "30%";
      textPart.textContent =
        "גוף התאורה הוא נורת לד המוקפת במעטפת עגולה בצורת בלון";
      clickStage1++;
    } else if (clickStage1 === 2) {
      titleParts.textContent = "משקולת";
      titleParts.style.right = "35%";
      textPart.textContent =
        "המשקולות מאזנות את החצובה, ישנן 3 משקולות";
      clickStage1++;
    }
  };
}