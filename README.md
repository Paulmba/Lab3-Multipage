# Lab3 Multipage Website  

## 👥 Group Members  
- **Paul Mbambo**  
- **Ocean Mbiza**  

## 📄 Page Descriptions  

### 1️⃣ Home Page (index.html)  
- Includes a **hero banner** with a welcome message.  
- Uses **Flexbox** to arrange the main sections (Intro and Sidebar) side by side.  
- Contains a **navigation bar** that is shared across all pages.  
- Has a **footer** that stays at the bottom of the page.  

### 2️⃣ Services Page (services.html)  
- Displays **service cards** in a **CSS Grid** layout.  
- Each card includes an **image, title, and description**.  
- Hover effects on the cards for an interactive user experience.  

### 3️⃣ Contact Page (contact.html)  
- Contains a **styled HTML5 form** with fields for Name, Email, Subject, and Message.  
- Uses **CSS Flexbox** for form alignment and responsiveness.  
- Implements **HTML5 validation** to ensure proper input.  
- Includes subtle **animations** for form interactions (hover and focus effects).  

## Features Used  

### ✅ Selectors & Styling  
- Used **class selectors**, **ID selectors**, and **element selectors** for styling.  
- Applied **border, padding, margins, colors, and typography** for an aesthetic layout.  

### ✅ Layout Techniques  
- **Flexbox**: Used in the **navigation bar, home page sections, and form layout**.  
- **CSS Grid**: Used for arranging **service cards** in a responsive grid format.  

### ✅ Responsive Design  
- **Media queries** for different screen sizes:  
  - `max-width: 1024px` (Laptops & Tablets)  
  - `max-width: 768px` (Tablets & Small Screens)  
  - `max-width: 480px` (Mobile Phones)  
- Ensured **images are responsive** using `max-width: 100%; height: auto;`.  

### ✅ Animations & Effects  
- Used **@keyframes** to animate the **hero banner (fade-in effect)**.  
- Added **hover effects** to buttons and service cards.  
- Implemented **focus transitions** on form fields for a smoother UI. 

###    Updated Features

1. **Back to Top Button**  
   - A **Back to Top** button was added to allow users to easily scroll back to the top of the page.
   - The button appears only after the user scrolls down the page by 100px.
   - When clicked, the page smoothly scrolls back to the top.

2. **Switch Theme Toggle**  
   - A **theme toggle button** was added to switch between **light** and **dark** themes on the website.
   - The button toggles the theme by changing the background and text colors across the site.
   
3. **Form Validation**  
   - A **contact form** was added with validation.
   - The form checks if the user has entered values in both the **name** and **message** fields before submission.
   - If the fields are empty, an alert prompts the user to fill them out.

4. **Frequently Asked Questions (FAQ) Interactivity**  
   - The FAQ section allows users to click on a question to reveal or hide the corresponding answer.
   - This adds a smooth interactive experience to the FAQ section.
  

