// // contents/componentInTheMainWorld.tsx
// import axios from "axios"
// import type { PlasmoCSConfig } from "plasmo"

// import { sendToBackground } from "@plasmohq/messaging"

// export const config: PlasmoCSConfig = {
//   matches: ["https://theresanaiforthat.com/"]
// }

// window.addEventListener("load", async () => {
//   // document.body.style.background = "pink"
//   // sendMessageToPopup()
//   const periodList = document.querySelectorAll(".jump_letter")
//   const periods = Array.from(periodList).map((period) => period.textContent)

//   await axios
//     .post("http://localhost:4000/getPeriod", {
//       periods: periods.slice(1, periods.length - 1)
//     })
//     .then((res) => {
//       window.location.href = `https://theresanaiforthat.com/period/2015/`
//     })
// })
