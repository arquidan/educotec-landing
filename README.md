# Educotec Solutions — Website

A one-page bilingual (English / Spanish) website. It is plain HTML, CSS and JavaScript, so there is nothing to install or build. Double-click `index.html` to open it in a browser.

```
index.html            the page itself (structure, contact details, form address)
css/styles.css        colors, fonts, layout
js/translations.js    ALL website text, in English and Spanish
js/main.js            behavior (language switch, menu, form); normally no need to edit
assets/               logo, favicon, social preview image
```

To edit a file, open it in a plain text editor such as VS Code, Notepad or TextEdit (in TextEdit, use *Format → Make Plain Text*). Save the file, then reload the page in your browser.

---

## 1. Edit the website text

All text is in **`js/translations.js`**. It has one block for English (`en: { … }`) and one for Spanish (`es: { … }`), grouped by section: `hero`, `about`, `pillars`, `who`, `services`, `why`, `contact`, `form`, `footer`.

```js
hero: {
  title: "Empowering schools through Education, Health and Technology",
```

- Change only the words **inside the quotation marks**. Keep the quotes and the comma at the end of the line.
- Make the same change in the Spanish block.
- Don't rename the key on the left (`title`, `item1`…). The page uses those names to know where each text goes.
- The page title and Google description are under `seo`.

> The English text inside `index.html` is only a backup for search engines. The page replaces it with the text from `translations.js`.

The About numbers (**34**, **3**, **K-12**) are in `index.html`. To change 34 or 3, edit both the visible number and its `data-count-to="…"` value.

## 2. Replace the [PHONE] and [EMAIL] placeholders

Open `index.html` and use your editor's search (Ctrl/Cmd + F) for `[PHONE]` and `[EMAIL]`. Each appears in two places:

1. **Contact section.** Replace every occurrence, including the one in the link:
   ```html
   <a class="contact-value" href="tel:+13055551234">(305) 555-1234</a>
   <a class="contact-value" href="mailto:info@educotec.com">info@educotec.com</a>
   ```
   In `tel:`, use digits only, starting with the country code (`+1…`).
2. **"Structured data" block** near the top (`"telephone"` and `"email"`). This is the information Google shows about the business.

While you're there, also search for **`YOUR-DOMAIN`** and replace it with the real website address (e.g. `https://www.educotec.com/`). Social media previews and Google use it.

## 3. Connect the contact form

The form sends messages through [Formspree](https://formspree.io), which has a free plan.

1. Create a Formspree account and a new form. Use the email address where you want to receive messages.
2. Copy the form address. It looks like `https://formspree.io/f/abcdwxyz`.
3. In `index.html`, search for `YOUR_FORM_ID` and replace the whole address:
   ```html
   <form … action="https://formspree.io/f/abcdwxyz" method="POST" novalidate>
   ```
4. Publish the site and send a test message. The first time, Formspree asks you to confirm by email.

Until step 3 is done, pressing **Send** shows the "Something went wrong" message.

## 4. Add French

1. In `js/translations.js`, copy the whole Spanish block (from `es: {` to its matching `},`).
2. Paste it right after the Spanish block and rename `es` to `fr`. Make sure there is a comma between the blocks.
3. In the new block's `meta` section, set:
   ```js
   meta: { code: "FR", name: "Français", htmlLang: "fr", ogLocale: "fr_FR" },
   ```
4. Translate every text in the block.

That's all. The **FR / Français** buttons appear automatically in the header and footer. Visitors whose browser is set to French will see French on their first visit, and any text you haven't translated yet shows in English.

## 5. Change a photo

The site uses web-sized copies of the photos in `assets/photos/`, two sizes each (800px and 1600px wide), so phones download the smaller one:

| Section | Photo | Alt text key in `translations.js` |
|---|---|---|
| Hero | `img_02` | `hero.photoAlt` |
| About | `img_07` | `about.photoAlt` |
| Who We Serve: Students | `img_01` | `who.studentsPhotoAlt` |
| Who We Serve: Parents | `img_03` | `who.parentsPhotoAlt` |
| Who We Serve: Teachers | `img_08` | `who.teachersPhotoAlt` |

To swap a photo, the easiest way is to keep the same file names: save your new photo as, for example, `assets/photos/img_02-1600.jpg` (1600px wide) and `img_02-800.jpg` (800px wide), compressing both at [squoosh.app](https://squoosh.app). Then update its description ("alt text") in both languages in `translations.js`. The description is read aloud to visitors using screen readers, so say what the photo shows.

Photos are cropped to fit their box, so edges may be trimmed. The large originals (`assets/img_01.jpg` … `img_08.jpg`) are not used by the page, so you don't need to upload them.

## 6. Change colors or fonts

At the top of `css/styles.css`, the `:root` block lists every brand color, the font, corner sizes and spacing. Change a value there and it updates across the whole site.

## 7. Publish the site

Upload `index.html`, `css/`, `js/` and `assets/`. You can leave out `design_handoff_educotec_website/`, the `.md` copy file, this README and the large original photos `assets/img_01.jpg` … `img_08.jpg` (about 18 MB).

- **Netlify:** go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the folder onto the page.
- **GitHub Pages:** push the files to a repository, then go to *Settings → Pages → Deploy from branch → main / (root)*.
- **cPanel / any web host:** in *File Manager*, upload the files into `public_html` (or your domain's folder), keeping the folder structure.

After publishing, check that the language switch, menu and form work on the live address.

---

**Technical notes:** there are no dependencies other than the Figtree font from Google Fonts (the system font is used if it can't load). The visitor's language choice is saved in the browser's localStorage. Fade-in and counting animations are turned off when the visitor's device is set to reduce motion. `assets/educotec-logo-full.png` is the original high-resolution logo; the site uses the smaller `educotec-logo.png`.
