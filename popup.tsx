import axios from "axios"
import { useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.name === "url") {
        alert("Message received in popup:")
        // Process the message here
        // window.location.href = "https://www.plasmo.com"
      }
    }
  )

  return (
    <div
      style={{
        padding: 4
      }}>
      <h2>Welcome to Data Scrapper</h2>
      <button
        onClick={async () => {
          const res = await axios.get("http://localhost:4000/getAIdetails")
          const resp = await sendToBackground({
            name: "url",
            body: res.data,
            extensionId: "gckikmjbhonnfjjalcjbhccoogdmgoge" // Replace with your extension's ID
          })
          console.log(resp)
        }}>
        Start Scrapping
      </button>
    </div>
  )
}

export default IndexPopup
