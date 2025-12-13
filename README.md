# Dhruvi Sutariya - Portfolio Website

A beautiful, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Modern dark theme with teal accents
- Contact form with email functionality
- Projects showcase section
- Skills and qualifications display

## How to Deploy

### Option 1: Free Hosting with GitHub Pages

1. Create a GitHub account at https://github.com
2. Create a new repository
3. Upload all files (index.html, styles.css, script.js, contact.php)
4. Go to Settings > Pages
5. Select the branch and save
6. Your site will be live at `https://yourusername.github.io/repository-name`

Note: GitHub Pages doesn't support PHP. For contact form functionality, use Option 2 or 3.

### Option 2: Free Hosting with InfinityFree

1. Sign up at https://infinityfree.net
2. Create a new account
3. Upload files via File Manager or FTP
4. Your site will be live with PHP support for the contact form

### Option 3: Netlify (Simple Deployment)

1. Sign up at https://netlify.com
2. Drag and drop your folder
3. Your site is live!

For contact form: Use Netlify Forms (change form action) or keep PHP file and use a PHP host.

### Option 4: Traditional Web Hosting

Upload files to any web host that supports PHP (like Bluehost, HostGator, etc.) via FTP.

## Email Setup

To receive emails from the contact form:

1. Open `contact.php`
2. Change line 45: `$to = 'your-real-email@example.com';`
3. Upload to a PHP-supported host

## Customization

### Update Your Information

**Email & Phone:** Edit `index.html` around line 175-185

**Projects:** Edit `index.html` around line 140-160

**Skills:** Edit `index.html` around line 110-120

**Colors:** Edit `styles.css` at the top (lines 10-18) to change the color scheme

### Add Project Images

Replace the placeholder divs with actual images:

\`\`\`html
<div class="project-image">
    <img src="your-image.jpg" alt="Project description">
</div>
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and design
- `script.js` - Interactive features
- `contact.php` - Email handling backend
- `README.md` - This file

## Need Help?

If you need any modifications or help deploying, feel free to reach out!
