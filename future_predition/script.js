const predictions = [
  "இன்று உங்களுக்கான நல்ல நாள்.",
  "உங்கள் முயற்சி வெற்றியாகும்.",
  "உங்கள் கனவுகள் நனவாகும்.",
  "ஒரு இனிய செய்தி வரவிருக்கிறது.",
  "உங்கள் வாழ்வில் சந்தோஷம் நிரம்பப் போகிறது.",
  "நீங்கள் அனைவரையும் மகிழ்விக்கிறீர்கள்.",
  "உங்கள் மனம் அமைதியுடன் இருக்கும்.",
  "ஒரு புதுமையான வாய்ப்பு காத்திருக்கிறது.",
  "உங்கள் முயற்சிக்கு பாராட்டு கிடைக்கும்.",
  "உங்களை சுற்றி நல்ல சக்திகள் இருக்கின்றன.",
  "நீங்கள் ஒரு நல்ல மனிதராக மதிக்கப்படுகிறீர்கள்.",
  "உங்கள் வாழ்வு செழிப்புடன் அமையும்.",
  "இன்று ஒரு புதிய தொடக்கம் காத்திருக்கிறது.",
  "உங்கள் உழைப்பு வெற்றியாகும்.",
  "நீங்கள் நல்ல மாற்றத்தை காணப்போகிறீர்கள்.",
  "உங்கள் கனவுகள் வளர்ந்து வரும்.",
  "நலன் உங்களை சுற்றியிருக்கும்.",
  "உங்கள் வாழ்க்கையில் ஒளி பரவும்.",
  "நீங்கள் ஒரு நல்ல மாற்றத்தை அனுபவிக்க போகிறீர்கள்.",
  "இன்று உங்கள் நாள் சிறப்பானது!"
];

const monthTraits = {
  0:  { char: "திடமான நிலைமை மற்றும் உறுதியான முடிவுகள்", color: "Red", number: 1 },
  1:  { char: "அன்பும் புரிதலும் நிறைந்தவர்", color: "Pink", number: 6 },
  2:  { char: "உணர்வுகள் நிரம்பிய சிந்தனையாளர்", color: "Green", number: 9 },
  3:  { char: "புத்திசாலித்தனம் மற்றும் புதிய யோசனைகள்", color: "Yellow", number: 3 },
  4:  { char: "நேசிக்கத் தெரிந்த நட்பு சிந்தனை", color: "Blue", number: 5 },
  5:  { char: "தன்னம்பிக்கை மற்றும் வளர்ச்சி ஆவல்", color: "Orange", number: 2 },
  6:  { char: "அழகு, கலை, இசை போன்றவற்றில் ஈடுபாடு", color: "Purple", number: 7 },
  7:  { char: "ஆழமான சிந்தனை மற்றும் அமைதி", color: "White", number: 8 },
  8:  { char: "தொழில் வெற்றி மற்றும் நிர்வாகத் திறமை", color: "Gold", number: 4 },
  9:  { char: "நல்லவனாக மதிக்கப்படும் மனிதன்", color: "Brown", number: 1 },
  10: { char: "வாழ்க்கையில் உற்சாகம் மற்றும் ஆற்றல்", color: "Teal", number: 9 },
  11: { char: "கற்பனை மற்றும் உணர்வு நுட்பம்", color: "Silver", number: 6 }
};

document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("username") || "Guest";
  document.getElementById("username").innerText = name;
});

function predict() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    document.getElementById("result").innerHTML = "📅 தயவு செய்து பிறந்த தேதியை உள்ளிடவும்.";
    return;
  }

  const date = new Date(dobInput);
  const month = date.getMonth(); // 0 = January, 11 = December
  const traits = monthTraits[month] || {};

  const prediction = predictions[Math.floor(Math.random() * predictions.length)];

  const fullMessage = `
    🔮 <strong>Prediction:</strong> ${prediction}<br><br>
    🎭 <strong>Your Character:</strong> ${traits.char}<br>
    🎨 <strong>Lucky Color:</strong> ${traits.color}<br>
    🔢 <strong>Lucky Number:</strong> ${traits.number}
  `;

  document.getElementById("result").innerHTML = fullMessage;
  localStorage.setItem("prediction", fullMessage);
}
