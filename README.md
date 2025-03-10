# whatsapp-api

This REST API was created using [Express](https://expressjs.com/) and [Venom](https://github.com/orkestral/venom), to automate sending messages to WhatsApp via HTTP/HTTPS requests.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

## Installation

To get started, follow these steps:

1. Clone the repository
```
git clone https://github.com/gabsroot/whatsapp-api.git
```

2. Install dependencies
```
cd whatsapp-api && npm install
```

3. Start the server
```
npm start
```

4. Scan the **QR code** to authenticate WhatsApp

---

## Send Message

![POST](https://img.shields.io/badge/POST-red)

```
http://localhost/send_message
```

### Parameters  
| Parameter       | Type   | Required | Description |
|----------------|--------|----------|--------------------------------------------|
| `chat_id`      | string | ✅ Yes   | Recipient number in international format |
| `text`         | string | ✅ Yes   | Content of the message |

### cURL
```sh
curl -X POST http://localhost/send_message -H "Content-Type: application/json" -d "{\"chat_id\":\"5511900000000\", \"text\":\"Hello, how are you?\"}"
```

---

## Send Image  

![POST](https://img.shields.io/badge/POST-red)

```
http://localhost/send_image
```

### Parameters  
| Parameter       | Type   | Required | Description |
|----------------|--------|----------|--------------------------------------------|
| `chat_id`      | string | ✅ Yes   | Recipient number in international format |
| `image_url`    | string | ✅ Yes   | URL of the image to be sent |
| `image_name`   | string | ❌ No    | Custom file name displayed in WhatsApp |
| `caption`      | string | ❌ No    | Additional text message sent with the image |

### cURL
```sh
curl -X POST http://localhost/send_image -H "Content-Type: application/json" -d "{\"chat_id\":\"5511900000000\", \"image_url\":\"https://example.com/image.jpg\", \"image_name\":\"Beach.jpg\", \"caption\":\"Check out this beautiful view!\"}"
```

---

## Send Document  

![POST](https://img.shields.io/badge/POST-red)

```
http://localhost/send_document
```

### Parameters  
| Parameter       | Type   | Required | Description |
|----------------|--------|----------|--------------------------------------------|
| `chat_id`      | string | ✅ Yes   | Recipient number in international format |
| `document_url` | string | ✅ Yes   | URL of the document to be sent |
| `document_name` | string | ❌ No    | Custom file name displayed in WhatsApp |
| `caption`      | string | ❌ No    | Additional text message sent with the document |

### cURL
```sh
curl -X POST http://localhost/send_document -H "Content-Type: application/json" -d "{\"chat_id\":\"5511900000000\", \"document_url\":\"https://example.com/document.pdf\", \"document_name\":\"Invoice.pdf\", \"caption\":\"Here is your invoice\"}"
```
