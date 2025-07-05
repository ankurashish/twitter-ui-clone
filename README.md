# 🐦 X.com Clone

A responsive UI clone of **X.com (formerly Twitter)** built with HTML and Tailwind CSS. This project mimics the layout, components, and interactive feel of the original platform, including sidebars, trending widgets, post creation, and sample posts.

---

## 🚀 Features

- ✅ Fully responsive layout using **Tailwind CSS**
- ✅ Sidebar navigation with icons and hover effects
- ✅ Tweet composer with reply options and media buttons
- ✅ Post feed with profile pics, images, and interaction icons
- ✅ Right sidebar with trending topics and follow suggestions
- ✅ Sticky headers and sidebars
- ✅ Dark theme styling

---

## 🛠 Tech Stack

- **HTML5**
- **Tailwind CSS**
- **Google Material Symbols**
- **Responsive Design**
- **Font + Icon Integration**

---

## 📂 Folder Structure

```
x-clone/
├── index.html
├── src/
│   └── output.css         # Tailwind CSS output
├── public/
│   └── icons, images, etc
```

---

## ⚙️ Getting Started (Local Setup)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ankurashish/twitter-ui-clone.git
   cd twitter-ui-clone
   ```

2. **Install Tailwind CSS (if not already set up)**
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

3. **Create Tailwind Input File (optional)**
   ```bash
   # src/input.css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Build CSS**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

5. **Open `index.html` in Your Browser**

---


## 🙌 Author

**Ankur Ashish**  
🔗 [@ankurashish](https://github.com/ankurashish/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
You are free to use, modify, and distribute it for personal or commercial purposes.

---

> **Note:** This is a static UI clone. It does not include backend functionality like posting, liking, or following.
