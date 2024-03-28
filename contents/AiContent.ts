import axios from "axios"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: [
    "https://theresanaiforthat.com/ai/*",
    "https://theresanaiforthat.com/gpt/*"
  ]
}

window.addEventListener("load", async () => {
  const use_case = document.getElementById("use_case")?.textContent
  const largeImg = document.querySelector(".ai_image")?.getAttribute("src")
  const descriptionContainer = document.querySelector(".description")
  const descriptionList = descriptionContainer?.getElementsByTagName("p")
  const uploadAt = document.querySelector(".launch_date_top")?.textContent
  const description = Array.from(descriptionList || [])
    .map((p) => p?.textContent)
    .join("")
  const total_alternative = document
    .getElementById("alternatives")
    ?.textContent.split(" ")[0]
  const alternativeBox = document.getElementById("alternatives_cont")
  const alternativeList = alternativeBox?.getElementsByTagName("li")
  const alternatives = Array.from(alternativeList || []).map((li) => {
    return li.getAttribute("data-id")
  })

  const aiId = document.querySelector(".save_ai_button").getAttribute("data-id")

  const prosContainer = document.querySelector(".pac-info-item-pros")
  const prosList = prosContainer?.getElementsByTagName("div")
  const pros = Array.from(prosList || []).map((div) => div?.textContent)
  const consContainer = document.querySelector(".pac-info-item-cons")
  const consList = consContainer?.getElementsByTagName("div")
  const cons = Array.from(consList || []).map((div) => div?.textContent)
  const qaList = document.querySelectorAll(".faq-info")
  const qa = Array.from(qaList).map((qa) => {
    const question = qa.querySelector(".faq-info-title")?.textContent
    const answer = qa.querySelector(".faq-info-description")?.textContent
    return { question, answer }
  })
  console.log({
    use_case,
    largeImg,
    description,
    total_alternative,
    alternatives,
    pros,
    cons,
    qa,
    uploadAt,
    aiId
  })

  const res = await axios.post("http://localhost:4000/addAiDetails", {
    data: {
      use_case,
      largeImg,
      description,
      total_alternative,
      alternatives,
      pros,
      cons,
      qa,
      uploadAt,
      aiId
    }
  })
  if (res.data) {
    window.location.href = `https://theresanaiforthat.com/ai/${res.data.title.split(" ").join("-")}/`
  }
})
