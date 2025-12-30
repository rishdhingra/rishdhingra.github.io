# Professional Portfolio Website

A beautiful, modern, and fully responsive portfolio website designed for IT professionals minoring in Computer Science. This portfolio showcases your skills, projects, experience, and education in an impressive way that will catch any company's attention.

## ✨ Features

- **Modern Design**: Beautiful gradient effects, smooth animations, and professional styling
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Typing animation in hero section
  - Animated skill progress bars
  - Smooth scrolling navigation
  - Hover effects on cards and buttons
  - Counter animations for statistics
- **Sections Included**:
  - Hero/Introduction section
  - About Me
  - Skills & Technologies
  - Featured Projects
  - Experience & Education Timeline
  - Contact Form
- **Performance Optimized**: Fast loading times and smooth animations

## 📁 Project Structure

```
uploadweb/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles and animations
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/
│       └── gllass.png      # Profile image
├── README.md               # Project documentation
└── .gitignore             # Git ignore file
```

## 🚀 Getting Started

### Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required - it's pure HTML, CSS, and JavaScript

### Customization Guide

#### 1. Personal Information

**Update your name and title:**
- In `index.html`, find the hero section and update:
  - Line ~45: Change "Your Name" to your actual name
  - Line ~48: Update the typing animation texts in `script.js` (line ~35)

**Update contact information:**
- In `index.html`, find the contact section and update:
  - Email address
  - Phone number
  - Location
  - Social media links (LinkedIn, GitHub, Twitter, etc.)

#### 2. About Section

**Update the about text:**
- In `index.html`, find the about section (~line 100)
- Customize the description paragraphs
- Update statistics (projects, technologies, etc.)

#### 3. Skills Section

**Update your skills:**
- Modify programming languages in the skills grid
- Add/remove technologies in the tech tags section
- Update skill percentages (data-width attribute)
- Customize core competencies

#### 4. Projects Section

**Add your projects:**
- Replace the example projects with your own
- Update project titles, descriptions, and technologies
- Add links to live demos and GitHub repositories
- Change project categories as needed

#### 5. Experience Section

**Update your experience:**
- Replace timeline items with your actual work experience
- Update dates, job titles, company names
- Customize descriptions and achievements
- Add or remove timeline items as needed

#### 6. Colors & Styling

**Customize the color scheme:**
- In `styles.css`, modify the CSS variables at the top (lines 2-18)
- Change `--primary-color`, `--secondary-color`, etc.
- Adjust gradients to match your brand

#### 7. Images

**Add your profile image:**
- Replace the placeholder in the hero section
- Add project screenshots to the project cards
- Update the about section image

## 📁 File Structure

```
uploadweb/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🎨 Color Scheme

The default color scheme uses:
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Accent**: Cyan (#06b6d4)

You can customize these in the CSS variables section of `styles.css`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Advanced Customization

### Adding New Sections

1. Add a new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu if needed
4. Add scroll animations in `script.js`

### Changing Fonts

1. Update the Google Fonts link in `index.html` head section
2. Modify font-family in `styles.css`

### Adding Animations

- All animations are defined in `styles.css`
- JavaScript animations are in `script.js`
- Use Intersection Observer for scroll-triggered animations

## 📝 Form Submission

The contact form currently logs data to the console. To make it functional:

1. Set up a backend service (Node.js, PHP, etc.)
2. Update the form submission handler in `script.js`
3. Add proper validation and error handling

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save

### Netlify
1. Drag and drop your folder to Netlify
2. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Support

If you need help customizing this portfolio, feel free to:
- Check the code comments for guidance
- Modify the HTML structure as needed
- Adjust CSS to match your preferences
- Add or remove features based on your needs

## 🎯 Tips for Success

1. **Keep it updated**: Regularly update your projects and experience
2. **Show your best work**: Feature your most impressive projects
3. **Be authentic**: Write in your own voice
4. **Optimize images**: Compress images for faster loading
5. **Test thoroughly**: Check on multiple devices and browsers
6. **Get feedback**: Ask peers to review your portfolio

---

**Good luck with your job search!** 🚀

