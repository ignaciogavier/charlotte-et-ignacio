# Google Form Setup Instructions

## Current Status
The RSVP section has been set up with a Google Form iframe, but the **full form ID needs to be updated** for it to work properly.

## Why This Is Needed
Google Forms short URLs (like `https://forms.gle/Qy9ij2bWY4SBDgHU7`) do not work directly in iframes. You need the full embed URL.

## How to Get the Correct Form ID

1. **Open the Google Form:**
   - Visit: https://forms.gle/Qy9ij2bWY4SBDgHU7
   - Make sure you're logged into the Google account that owns the form

2. **Get the Embed Code:**
   - Click the **"Send"** button (top right of the form editor)
   - Click the **embed icon** (`</>`) tab
   - You'll see an iframe code similar to:
     ```html
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc...../viewform?embedded=true" ...>
     ```

3. **Copy the Form ID:**
   - Copy the entire URL from the `src=""` attribute
   - It should start with: `https://docs.google.com/forms/d/e/`
   - And end with: `/viewform?embedded=true`

4. **Update index.html:**
   - Open `index.html`
   - Find the RSVP section (search for `id="rsvp"` or the comment `<!-- Google Form Embed -->`)
   - Replace the iframe `src` with the URL you copied:
     ```html
     <iframe 
         src="https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?embedded=true" 
         width="100%" 
         height="900" 
         frameborder="0" 
         marginheight="0" 
         marginwidth="0">
         Loading Google Form...
     </iframe>
     ```

5. **Test It:**
   - Save the file
   - Open `index.html` in a browser
   - Scroll to the RSVP section
   - The form should now load properly

## Alternative: If You Don't Have Edit Access

If you don't have access to edit the form, you can:
1. Share the form link with someone who does
2. Ask them to follow steps 2-3 above
3. They can send you the full form URL

## Temporary Placeholder

A temporary form ID has been added as a placeholder:
- `1FAIpQLSdQy9ij2bWY4SBDgHU7`

This is a **guess** based on the short URL pattern and may not work. Please update it with the actual form ID from the steps above.

## Questions?

If you need help with this setup, refer to:
- [Google Forms Embed Documentation](https://support.google.com/docs/answer/2839588)
- Contact: GitHub repository owner
