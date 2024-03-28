// background/messages/ping.ts
import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  chrome.runtime.sendMessage({
    name: "message",
    body: req.body
  })
  res.send({
    message: "Message received from content script",
    data: req.body
  })
}

export default handler
