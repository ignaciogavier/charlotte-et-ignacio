# Charlotte & Ignacio - Wedding Website

A beautiful, responsive single-page wedding website.

## 🌟 Features

- **Responsive Design**: Mobile-friendly layout using flexbox and CSS grid
- **Elegant Styling**: Subtle animations and transitions
- **Complete Sections**:
  - Hero section with couple names, date, and location
  - Ceremony & reception details
  - Dress code information
  - Hotel accommodations
  - Gift registry placeholder
  - RSVP form (Google Forms integration)
- **SEO Protection**: robots.txt blocks search engine indexing
- **Easy Customization**: CSS variables for colors, fonts, and spacing

## 🚀 GitHub Pages Setup

### Option 1: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select:
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment
7. Your site will be available at: `https://ignaciogavier.github.io/charlotte-et-ignacio/`

### Option 2: Using GitHub CLI

```bash
# Enable GitHub Pages for the repository
gh repo edit --enable-pages --pages-branch main --pages-path /
```

## 🎨 Customization Guide

### 1. Update Wedding Details

Edit `index.html` to change:
- Couple names in the `.couple-names` heading
- Wedding date and location in the `.wedding-date` section
- Ceremony details in the ceremony card
- Reception details in the reception card
- Hotel information in the `.hotels-grid` section
- All other text content

### 2. Customize Colors and Fonts

Edit the `:root` selector in `style.css` to change:

```css
:root {
    --primary-color: #8b7355;      /* Main brand color */
    --secondary-color: #d4a574;    /* Secondary/accent color */
    --accent-color: #f4e8d8;       /* Light accent */
    --font-heading: 'Georgia', 'Times New Roman', serif;
    --font-body: 'Helvetica Neue', Arial, sans-serif;
}
```

### 3. Add Google Form for RSVP

The RSVP section now includes a Google Form ([https://forms.gle/Qy9ij2bWY4SBDgHU7](https://docs.google.com/forms/d/e/1FAIpQLSfYzc2iQg1ahsiRgZ1kMBQnKl1YZRZ550mlv9icVO56mvmeww/viewform?usp=dialog)).

**If you need to update the form:**

1. Visit the Google Form URL in your browser
2. In Google Forms editor, click **Send** → Select embed icon `</>` 
3. Copy the iframe code
4. In `index.html`, replace the iframe src in the RSVP section with your new form ID:

```html
<iframe 
    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
    width="100%" 
    height="900" 
    frameborder="0">
    Loading…
</iframe>
```

### 4. Add Custom Images

To add a hero background image:

1. Add your image to the repository (e.g., `hero-image.jpg`)
2. Update `style.css` in the `.hero` section:

```css
.hero {
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                url('hero-image.jpg') center/cover;
}
```

## 📁 File Structure

```
charlotte-et-ignacio/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Interactive features
├── robots.txt          # Block search engines
└── README.md           # This file
```

## 🔒 Privacy Features

1. **robots.txt**: Blocks search engine crawlers
2. **No-index Meta Tag**: Additional SEO protection in HTML

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsive

The site automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 💡 Tips

- Update the Google Form link before the RSVP deadline
- Consider adding your wedding colors to match your theme
- Add high-quality images for better visual appeal

## 📝 License

This is a private wedding website. Feel free to use and modify for personal use.

---

**Built with ❤️ for Charlotte & Ignacio**
