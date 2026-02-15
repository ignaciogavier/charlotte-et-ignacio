# Language-Specific Google Forms Setup

## Overview
The website now supports displaying different Google Forms based on the selected language (English or Spanish).

## How It Works

### Code Changes
1. **script.js**:
   - Added `formIds` object at the top to store form IDs for each language
   - Created `updateFormLanguage(lang)` function that switches the iframe src
   - Modified `setLanguage(lang)` to call `updateFormLanguage()`
   - Modified `init()` to set the correct form on page load

2. **index.html**:
   - Added `id="rsvp-form"` to the iframe for JavaScript targeting
   - Updated comments to direct users to script.js for configuration

### Technical Implementation
When a user switches languages:
1. The `setLanguage(lang)` function is called with 'en' or 'es'
2. It updates all translated text via `updateContent(lang)`
3. It updates the language button states via `updateLanguageSelector(lang)`
4. **NEW**: It updates the Google Form via `updateFormLanguage(lang)`
   - This function gets the iframe element by ID
   - Changes its `src` to the form ID for the selected language
   - The form reloads automatically with the correct language version

## Setup Instructions

### Step 1: Create a Spanish Google Form
1. Go to Google Forms: https://forms.google.com
2. Create a new form or duplicate your English form
3. Translate all questions and options to Spanish
4. Make sure the form is set to accept responses

### Step 2: Get Both Form IDs

**For the English form:**
1. Open your English Google Form
2. Click the **"Send"** button (top right)
3. Click the **embed icon** (`</>`) 
4. You'll see code like:
   ```html
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc...../viewform?embedded=true">
   ```
5. Copy just the long ID between `/d/e/` and `/viewform`

**For the Spanish form:**
1. Repeat the same steps with your Spanish form
2. Copy its form ID

### Step 3: Update script.js
1. Open `script.js` in your editor
2. Find the `formIds` object near the top (around line 14-17)
3. Update the Spanish form ID:
   ```javascript
   const formIds = {
       en: '1FAIpQLSfYzc2iQg1ahsiRgZ1kMBQnKl1YZRZ550mlv9icVO56mvmeww', // English form ID
       es: 'YOUR_SPANISH_FORM_ID_HERE'  // Replace this with your Spanish form ID
   };
   ```
4. Save the file

### Step 4: Test It
1. Open your website in a browser
2. Scroll to the RSVP section - you should see the English form
3. Click the 🇦🇷 Spanish language button
4. The form should reload and show the Spanish version
5. Click the 🇬🇧 English button - the form should switch back
6. Refresh the page - it should remember your language choice

## Troubleshooting

### Form not changing when switching languages
- Check that both form IDs are correctly set in `script.js`
- Make sure the iframe has `id="rsvp-form"` in `index.html`
- Open the browser console (F12) to check for JavaScript errors

### Form not loading at all
- Verify the form IDs are correct (they should be very long strings)
- Make sure both forms are set to accept responses in Google Forms
- Check that the forms are not restricted to specific users/domains

### Same form showing for both languages
- You probably haven't updated the Spanish form ID yet
- By default, both languages use the same form ID as a placeholder
- Follow Step 3 above to update the Spanish form ID

## Example Form IDs
Form IDs look like this:
```
1FAIpQLSfYzc2iQg1ahsiRgZ1kMBQnKl1YZRZ550mlv9icVO56mvmeww
```

They are long alphanumeric strings with dashes and underscores.

## Future Enhancements
If you need to add more languages:
1. Add the new language to the `formIds` object
2. Create a form for that language
3. Add the language button in `index.html`
4. Add translations to the `translations` object

## Questions?
Refer to the main `FORM_SETUP.md` for general Google Forms setup, or contact the repository owner.
