let level = 0;

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

    if (i <= level) {
      img.src = "media/bulbOn.svg";
      img.classList.add("on"); // נורה דולקת מקבלת קלאס מיוחד
    } else {
      img.src = "media/bulbOff.svg";
    }
  }

  // -------------------------------
  // הוספת ארבעת הטקסטים
  const container = document.getElementById("text-container");
  const texts = [
    "יעוד<br>והכרת הכלי", // כאן שברנו שורה
    "הכנות  <br>והפעלה",
    "דגשים  <br>והוראות בטיחות",
    "תרגול <br>   מסכם",
  ];
  // ניקוי קודם
  container.innerHTML = "";

  for (let i = 0; i < texts.length; i++) {
    const p = document.createElement("p");
    p.classList.add("bulb-text"); // קלאס משותף לכל הטקסטים
    p.id = `text${i + 1}`;
    // p.textContent = texts[i];
    p.innerHTML = texts[i];

    container.appendChild(p);
  }
//   step1();
}

// function step1(){

// });