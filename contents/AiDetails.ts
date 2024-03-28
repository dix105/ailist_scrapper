// import axios from "axios"
// import type { PlasmoCSConfig } from "plasmo"

// export const config: PlasmoCSConfig = {
//   matches: ["https://theresanaiforthat.com/period/*"]
// }

// window.addEventListener("load", async () => {
//   const list = document.getElementsByTagName("li")
//   const aiDetails = Array.from(list).map((li) => {
//     const image = li.getElementsByTagName("img")[0]?.src
//     const a = li.getElementsByClassName("ai_link")
//     const span = (a[0] as any)?.getElementsByTagName("span")[0]
//     const title = span?.textContent
//     const category = (li.getElementsByClassName("task_label").item(0) as any)
//       ?.textContent
//     const price = (li.querySelector(".ai_launch_date") as any)?.textContent
//     const saves = (li.querySelector(".saves") as any)?.textContent
//     const comments = (li.querySelector(".comments") as any)?.textContent
//     const aiId = li.getAttribute("data-id")
//     const link = li.getAttribute("data-url")
//     return { image, title, category, price, saves, comments, aiId, link }
//   })

//   const details = aiDetails.filter((ai) => ai.title && ai.category && ai.aiId)
//   const res = await axios.post("http://localhost:4000/aiDetails", {
//     data: JSON.stringify(details),
//     period: window.location.pathname.split("/")[2]
//   })
//   if (res.data) {
//     window.location.href = `https://theresanaiforthat.com/period/${res.data.period}/`
//   }
// })
