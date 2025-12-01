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
let nextBtnPart2b;
let backBtnPart2b;
let pageIndex;
let pages;

window.addEventListener("load", () => {
  document.getElementById("startButton").addEventListener("click", function () {
    // העלמת תמונת בלון התאורה
    document.getElementById("baloon").style.display = "none";
    document.getElementById("titleText").style.display = "none";

    // החלפת רקע
    document.body.style.backgroundImage = "url('media/backgroundRegular.svg')";

    // מחיקת כפתור
    this.style.display = "none";

    // הפעלת הנורות
    navbar(level);
  });
});

// --- פונקציה לאיפוס מאזינים ---
function resetButtonListeners(button) {
  const newButton = button.cloneNode(true);
  button.replaceWith(newButton);
  return newButton;
}

function navbar(level) {
  const bulbs = document.getElementsByClassName("bulb");

  wire = document.getElementById("wire");

  console.log(level);
  // הצגת כל הנורות + איפוס קלאס "on"
  for (let bulb of bulbs) {
    bulb.style.display = "block";
    bulb.style.visibility = "visible";
    bulb.classList.remove("on");
  }

  // עדכון מצב נורות דולקות/כבויות
  for (let i = 1; i <= 4; i++) {
    const img = document.getElementById(`img${i}`);
    img.src = i <= level ? "media/bulbOn.svg" : "media/bulbOff.svg";
    if (i <= level) img.classList.add("on");
  console.log(i + document.getElementById(`img${i}`))
  }

  // -------------------------------
  // הוספת ארבעת הטקסטים
  const container = document.getElementById("text-container");
  const texts = [
    "יעוד<br>והכרת הכלי",
    "הכנות  <br>והפעלה",
    "דגשים  <br>והוראות בטיחות",
    "תרגול מסכם",
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
  // הצגת חוט
  wire.style.visibility = "visible";

  // -------------------------------
  // מאזיני לחיצה עם סדר לפי clickStage
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const img4 = document.getElementById("img4");

  img1.onclick = null;
  img2.onclick = null;
  img3.onclick = null;
  img4.onclick = null;

  img1.onclick = () => {
    if (clickStage === 0) {
      step1();
      document.body.style.backgroundImage = "url('media/backgroung2.png')";
      container.style.display = "none";
      hideBulbs();
      clickStage++;
    }
    wire.style.visibility = "hidden";
  };

  img2.onclick = () => {
    if (clickStage === 1) {
      step2();
      wire.style.visibility = "hidden";
      document.body.style.backgroundImage =
        "url('media/backgroundRegular.svg')";
      container.style.display = "none";
      hideBulbs();
      clickStage++;
    }
  };

  img3.onclick = () => {
    if (clickStage === 2) {
      step3(); // ← הפונקציה של הדגשים / שלב 3
      wire.style.visibility = "hidden";
      document.body.style.backgroundImage =
        "url('media/backgroundRegular.svg')";
      container.style.display = "none";
      hideBulbs();
      clickStage++;
    }
  };

  img4.onclick = () => {
    if (clickStage === 3) {
      step4(); // ← הפונקציה של תרגול מסכם / שלב 4
      wire.style.visibility = "hidden";
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
      cell.textContent = text;
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
  imgBalon.src = "media/balon1.png";
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

    step1b();
  });
}

function step1b() {
  titleParts = document.querySelector(".title-part-style");

  if (!titleParts) {
    titleParts = document.createElement("h2");
    titleParts.textContent = "חלקי הערכה";
    titleParts.classList.add("title-part-style");
    document.body.appendChild(titleParts);
  }

  const lightBalon = document.createElement("img");
  lightBalon.src = "media/lightBalon.png";
  lightBalon.classList.add("light-Balon");
  document.body.appendChild(lightBalon);

  lightBalon.addEventListener("click", function () {
    titleParts.textContent = "מוט ההרמה";
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

  textPart = document.querySelector(".text-part");
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

  btnNextPart.onclick = () => {
    motHarama.style.display = "none";

    if (clickStage1 === 0) {
      titleParts.textContent = "חצובה";
      titleParts.style.right = "42%";
      textPart.textContent =
        "החצובה מורכבת משלושה רגליי ייצוב עם פרפריות לצורך חיזוק ואיזון החצובה";
      arrow.classList.remove("arrowPart1");
      arrow.classList.add("arrowPart2");
      clickStage1++;
    } else if (clickStage1 === 1) {
      titleParts.textContent = "גוף התאורה";
      titleParts.style.right = "33%";
      textPart.textContent =
        "גוף התאורה הוא נורת לד המוקפת במעטפת עגולה בצורת בלון";
      arrow.classList.remove("arrowPart2");
      arrow.classList.add("arrowPart3");
      clickStage1++;
    } else if (clickStage1 === 2) {
      titleParts.textContent = "משקולת";
      titleParts.style.right = "37%";
      textPart.textContent = "המשקולות מאזנות את החצובה, ישנן 3 משקולות";
      textPart.style.right = "10vw";
      arrow.classList.remove("arrowPart3");
      arrow.classList.add("arrowPart4");
      clickStage1++;

      btnNextPart.textContent = "בחזרה למסלול";
      btnNextPart.style.right = "27%";

      btnNextPart.onclick = () => {
        document.body.style.backgroundImage =
          "url('media/backgroundRegular.svg')";
        btnNextPart.style.visibility = "hidden";
        titleParts.style.display = "none";
        arrow.style.display = "none";
        imgBalon.style.display = "none";
        textPart.style.display = "none";

        document.getElementById("text-container").style.display = "block";
        const elements = document.getElementsByClassName("bulb");
        for (let el of elements) el.style.display = "block";

        level ++;
        navbar(level);
      };
    }
  };
}

function step2() {
  const title = document.createElement("h2");
  title.classList.add("Title");
  title.textContent = "הכנות ובדיקות לפני הפעלה";
  document.body.appendChild(title);

  const textPrep = document.createElement("div");
  textPrep.classList.add("text-prep");
  document.body.appendChild(textPrep);

  btnNextPart = resetButtonListeners(btnNextPart);
  btnNextPart.style.visibility = "visible";
  btnNextPart.style.right = "40vw";
  btnNextPart.textContent = "המשך";

  const lines = [
    "- נוודא כי המעטפת יבשה לחלוטין לפני התקנת הכיסוי המגן",
    "- נוודא כי יש פרפריות בערכה",
    "- נבצע בדיקה ויזואלית",
    "img", // הפריט האחרון הוא תמונה
  ];

  let clickIndex = 0;

  btnNextPart.onclick = () => {
    if (clickIndex < lines.length) {
      let el;
      if (lines[clickIndex] === "img") {
        el = document.createElement("img");
        el.src = "media/warning.svg";
        el.classList.add("warn-image");
      } else {
        el = document.createElement("p");
        el.textContent = lines[clickIndex];
        el.style.marginBottom = "10vh";
      }
      textPrep.appendChild(el);
      clickIndex++;
    } else {
      step2b();
    }
  };

  btnNextPart.onclick(); // מציגים את השורה הראשונה מיד
}

function step2b() {
  btnNextPart.style.visibility = "hidden";
  let page = document.getElementById("stage2-page");
  if (!page) {
    page = document.createElement("div");
    page.id = "stage2-page";
    page.style.position = "absolute";
    page.style.top = "0";
    page.style.right = "0";
    page.style.width = "100vw";
    page.style.height = "100vh";
    page.style.backgroundImage = "url('media/backgroundRegular.svg')";
    page.style.backgroundSize = "cover";
    document.body.appendChild(page);
  }

  pageIndex = 0;
  pages = [
    { subtitle: "שלב ראשון", imageSrc: "media/card1.svg" },
    { subtitle: "שלב שני", imageSrc: "media/card2.svg" },
    { subtitle: "שלב שלישי", imageSrc: "media/card3.svg" },
    { subtitle: "שלב רביעי", imageSrc: "media/card4.svg" },
    { subtitle: "שלב חמישי", imageSrc: "media/card5.svg" },
  ];

  function renderPage() {
    page.innerHTML = "";

    const mainTitle = document.createElement("h2");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = "הפעלת האמצעי";
    page.appendChild(mainTitle);

    const subTitle = document.createElement("h3");
    subTitle.classList.add("sub-title");
    subTitle.textContent = pages[pageIndex].subtitle;
    page.appendChild(subTitle);

    const img = document.createElement("img");
    img.src = pages[pageIndex].imageSrc;
    img.classList.add("page-image");
    page.appendChild(img);

    if (pageIndex > 0) {
      const backBtnPart2b = document.createElement("button");
      backBtnPart2b.textContent = "לשלב הקודם";
      backBtnPart2b.classList.add("btnPart2b", "backBtnPart2b");
      page.appendChild(backBtnPart2b);

      backBtnPart2b.onclick = () => {
        pageIndex--;
        renderPage();
      };
    }

    if (pageIndex < pages.length - 1) {
      const nextBtnPart2b = document.createElement("button");
      nextBtnPart2b.textContent = "לשלב הבא";
      nextBtnPart2b.classList.add("btnPart2b", "nextBtnPart2b");
      page.appendChild(nextBtnPart2b);

      nextBtnPart2b.onclick = () => {
        pageIndex++;
        renderPage();
      };
    } else {
      const foldBtn = document.createElement("button");
      foldBtn.textContent = "?איך מקפלים";
      foldBtn.classList.add("btnPart2b", "nextBtnPart2b");
      page.appendChild(foldBtn);

      foldBtn.onclick = () => {
        openFoldPage();
      };
    }
  }

  function openFoldPage() {
    page.innerHTML = `
    <img id="img1" class="bulb" />
    <img id="img2" class="bulb" />
    <img id="img3" class="bulb" />
    <img id="img4" class="bulb" />
`;
    const title = document.createElement("h2");
    title.classList.add("main-title");
    title.textContent = "סיום העבודה";
    page.appendChild(title);

    const finishWork = document.createElement("img");
    finishWork.src = "media/finishWork.svg";
    finishWork.classList.add("finishWork");
    page.appendChild(finishWork);

    const backToNavBtn = document.createElement("button");
    backToNavBtn.classList.add("btnPart2b", "navBtnPart2b");
    backToNavBtn.textContent = "חזרה לעמוד הניווט";
    page.appendChild(backToNavBtn);

    // btnNextPart.onclick = () => {
    //   document.body.style.backgroundImage =
    //     "url('media/backgroundRegular.svg')";
    //   btnNextPart.style.visibility = "hidden";
    //   titleParts.style.display = "none";
    //   arrow.style.display = "none";
    //   imgBalon.style.display = "none";
    //   textPart.style.display = "none";

    //   document.getElementById("text-container").style.display = "block";
    //   const elements = document.getElementsByClassName("bulb");
    //   for (let el of elements) el.style.display = "block";

    //   level = 1;
    //   navbar(level);
    // };

    backToNavBtn.onclick = () => {
      backToNavBtn.style.display = "none";
      title.style.display = "none";
      finishWork.style.display = "none";
      document.body.style.backgroundImage =
        "url('media/backgroundRegular.svg')";

      document.getElementById("text-container").style.display = "block";
      const elements = document.getElementsByClassName("bulb");
      for (let el of elements) el.style.display = "block";
      for (let el of elements) el.style.Zindex = "9";
      for (let el of elements) el.style.visibility = "visible";

      level++;
      navbar(level);
    };
  }

  renderPage();
}

function step3() {
  console.log("hi");
}
