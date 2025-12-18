# Personal Portfolio Website

A professional portfolio website built for GitHub Pages, showcasing your research, technical skills, and experience.

## 🚀 Quick Setup

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Make it public
4. Don't initialize with README (we have our own files)

### 2. Upload Your Files

#### Option A: Using GitHub Web Interface
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop all three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Commit the changes

#### Option B: Using Git Command Line
```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Initial commit: Add portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section (left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at `https://yourusername.github.io` within a few minutes

## 🎨 Customization Guide

### Essential Updates

Before publishing, you MUST update these sections in `index.html`:

#### 1. Contact Information (Line ~440)
```html
<a href="mailto:your.email@vt.edu" class="contact-link">
```
Replace with your actual email address.

#### 2. Social Links (Lines ~450-470)
Update the `href` attributes with your actual profiles:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`

#### 3. Experience Details
Review and update:
- Job titles and dates
- Descriptions of your responsibilities
- Location information

#### 4. Research Projects
Customize the four research cards with your actual projects:
- Project titles
- Descriptions
- Technologies used
- Add or remove projects as needed

### Optional Customizations

#### Colors
Edit the CSS variables in `styles.css` (lines 1-10):
```css
:root {
    --color-navy: #1a2332;      /* Main dark color */
    --color-coral: #e07a5f;     /* Accent color */
    --color-cream: #f8f5f2;     /* Background */
    /* ... */
}
```

#### Fonts
Change the Google Fonts import in `index.html` (line 9):
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Then update the CSS variables in `styles.css`:
```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

#### Add More Sections
To add a new section:
1. Add navigation link in the navbar
2. Create a new section with class `section`
3. Use the existing section structure as a template

## 📱 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Scroll-triggered fade-in effects and parallax elements
- **Interactive Elements**: Hover effects on cards and links
- **Clean Navigation**: Fixed navbar with smooth scroll
- **Professional Layout**: Sections for About, Education, Experience, Research, Skills, and Contact

## 🛠️ Technical Stack

- Pure HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks required)
- Google Fonts
- SVG icons

## 📋 Adding Content

### Adding a New Project

In `index.html`, duplicate a `.research-card` div and modify:
```html
<div class="research-card">
    <div class="research-tag">Your Category</div>
    <h3>Project Title</h3>
    <p class="research-location">Institution/Lab</p>
    <p class="research-description">
        Description of your project...
    </p>
    <div class="research-tech">
        <span class="tech-badge">Technology</span>
        <span class="tech-badge">Another Tech</span>
    </div>
</div>
```

### Adding a New Experience

Duplicate a `.timeline-item` div in the experience section:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Job Title</h3>
            <span class="timeline-date">Date Range</span>
        </div>
        <p class="timeline-location">Company Name</p>
        <ul class="timeline-details">
            <li>Achievement or responsibility</li>
            <li>Another achievement</li>
        </ul>
    </div>
</div>
```

### Adding Skills

Add new skill items in the appropriate category:
```html
<span class="skill-item">New Skill</span>
```

## 🔧 Troubleshooting

### Site not loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository name is exactly `yourusername.github.io`
- Ensure files are in the root directory (not in a subfolder)
- Verify the repository is public

### Styles not working?
- Make sure all three files are uploaded
- Check that file names are exactly: `index.html`, `styles.css`, `script.js`
- Clear your browser cache

### Animations not working?
- Ensure `script.js` is properly linked in `index.html`
- Check browser console for any JavaScript errors

## 📈 Next Steps

1. **Add Analytics**: Set up Google Analytics to track visitors
2. **Custom Domain**: Configure a custom domain in GitHub Pages settings
3. **Add Blog**: Create a `/blog` directory with additional pages
4. **Portfolio Items**: Add detailed project pages
5. **Resume Download**: Add a PDF of your resume

## 📄 License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.

## 🤝 Support

If you encounter issues:
1. Check the GitHub Pages [documentation](https://docs.github.com/en/pages)
2. Review HTML/CSS in browser developer tools
3. Ensure all files are properly uploaded and linked

---

**Good luck with your job search! 🎓✨**
