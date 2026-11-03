Project title: Nicole's Fried Chicken

Student Information:st10475925@rcconnect.edu.za
Elihle Shandu

Overview: Nicole’s Fried Chicken is a fictional fast-food restaurant located in Newtown C, Inanda, Durban, KwaZulu-Natal. The restaurant specialises in freshly prepared fried chicken, burgers, wings, chips, wraps, 
family meals and cold beverages at affordable prices. The business aims to provide quality meals together with excellent customer service in a clean and welcoming environment. Nicole’s Fried Chicken is a fictional 
fast-food restaurant located in Newtown C, Inanda, Durban, KwaZulu-Natal. The restaurant specialises in freshly prepared fried chicken, burgers, wings, chips, wraps, family meals and cold beverages at affordable prices.
The business aims to provide quality meals together with excellent customer service in a clean and welcoming environment. Nicole’s Fried Chicken is a fictional fast-food restaurant located in Newtown C, Inanda, Durban,
KwaZulu-Natal. The restaurant specialises in freshly prepared fried chicken, burgers, wings, chips, wraps, family meals and cold beverages at affordable prices. The business aims to provide quality meals together with 
excellent customer service in a clean and welcoming environment.

Goals: 
The proposed website aims to: 
Increase awareness of Nicole’s Fried Chicken. 
Promote menu items and weekly specials. 
Make it easier for customers to view products and prices. 
Encourage customer enquiries through an online contact page. 
Strengthen the business’s online presence.

Objectives 
The website will: 
Display the restaurant’s menu. 
Provide business information and trading hours. 
Showcase promotions and special offers. 
Allow customers to contact the business. 
Display the restaurant’s location using Google Maps. 

The website will include the following pages: 

Home 
Welcome message 
Featured meals 
Current promotions 
Call-to-action buttons 
About Us 
Business history 
Mission and vision 
Company values 
PRODUCTS  
Products will include: 
Menu 
Fried chicken meals 
Burgers 
Wings 
Wraps 
Chips 
Drinks 
Family meals 
Specials 
Weekly promotions 
Combo deals 
Seasonal offers 
Gallery 
Food photographs 
Restaurant images 
Contact Us 
Contact details 
Contact form 
Business hours 
Google Maps location 

Website Functionality :
Responsive design 
Easy navigation 
Contact form 
Interactive menu 
Social media links 
Google Maps integration 

Timeline and Milestones:
Week 1 Research and planning 
Week 2 Design wireframes
Week 3 Create HTML pages
Week 4 Apply CSS styling 
Week 5 Add JavaScript functionality
Week 6 Testing and debugging
Week 7 Final improvements 

PART 1 – HTML DEVELOPMENT (Week 3)Minor Description:
Part 1 focused on building the basic structure and content of the Nicole's Fried Chicken website using only HTML5. No styling or interactivity was added at this stage. The aim was to create a semantically correct, accessible foundation with all core pages linked through navigation.Purpose of Part 1:
To establish the website's information architecture, ensure all business information is present, and create a working navigation system that allows users to move between pages. This part proves the website meets the client brief before styling.Files Included (Excluding enquiry.html as per Part 3 addition):index.html / Home.html – Landing page with welcome message, featured meals and call-to-actionabout.html – Business history, mission, vision and information about the ownermenu.html – Complete list of food items, prices and categories (Burgers, Wings, Family Meals)specials.html – Weekly specials and promotional offersgallery.html – Food photography gallery showcasing productscontact.html – Business hours, physical address, phone number, and contact form structure (without JS validation)How Part 1 Adds to Success:
HTML provides the skeleton that makes the site functional even without CSS/JS. It ensures search engines can crawl the content, screen readers can access it, and all business objectives (display menu, location, contact info) are met. A clean HTML structure in Part 1 made Part 2 and Part 3 easier to implement and reduced errors.

PART 2 – CSS DEVELOPMENT (Week 4)Minor Description:
Part 2 involved adding visual design and responsiveness using external CSS. All styling was applied through an external stylesheet to separate content from presentation, and to create a consistent brand identity for Nicole's Fried Chicken.Purpose of Part 2:
To improve user experience, readability and brand appeal. To make the website responsive on mobile, tablet and desktop, and to create emotional connection through colours, fonts and layout that reflect a fast-food brand.Files Included:css/style.css – Main stylesheet controlling layout, colours (red/white/yellow brand), typography, navigation bar, flexbox/grid layout, footer and responsive media queriesAll HTML files were updated to link to style.cssimages/ folder – Optimized images of burgers, chicken, family meals used for visual appealHow Part 2 Adds to Success:
CSS turns a plain text site into a professional, trustworthy business website. The responsive design ensures customers can view the menu on their phones while on the go, which directly increases enquiries and orders. Consistent styling across Home, About, Menu, Specials, Gallery and Contact creates brand recognition and keeps users on the site longer.

PART 3 – JAVASCRIPT DEVELOPMENT (Week 5) – Current SubmissionMinor Description:
Part 3 added interactivity and form validation using JavaScript. This is where enquiry.html was introduced as a new feature, along with client-side validation for both contact.html and enquiry.html to ensure data quality before submission.Purpose of Part 3:
To prevent empty or incorrect submissions, guide the user with immediate error messages, and improve overall functionality. JavaScript ensures business receives valid enquiries (e.g., real name, valid 10-digit phone, words-only Subject).Files Included:js/script.js – Contains validateForm() function that validates Full Name, Email, Phone, Subject and Message; Handles enquiryForm and contactForm and contactEnquiryForm IDs; Includes modal pop-up for successful enquiryenquiry.html (New file added in Part 3) – Dedicated enquiry page with fields: Full Name, Email Address, Phone Number, Subject, Message. This separates general contact from specific business enquiries (Catering, Sponsorship)Updated contact.html – Now includes active validation for Subject fieldUpdated gallery.html – Added lightbox/filter functionality via JSHow Part 3 Adds to Success:
JavaScript is what makes the Subject field active – if Subject is empty, it now shows: “Subject is required! Please enter a subject” and blocks submission. This was the error you fixed. Without JS, users could submit blank enquiries, wasting business time. With JS validation, the website collects clean, usable leads, builds customer trust through instant feedback, and meets the POE requirement for interactive functionality. The addition of enquiry.html in Part 3 expands the website from 5 pages to 6 pages, offering a specialized conversion point for catering and large orders, which directly increases sales opportunities.


ChangelogPart 2 - 17 September 2026:Added CSS files for all 6 pagesChanged menu header from purple to maroon for consistencyFixed nav links colour from blue to whiteAdded card layout for weekly specialsAdded animated Order Now button on index pageMade images and text responsive for mobilePart 1:Created HTML for all 6 pages of Nicole's Fried ChickenReferencesW3Schools - CSS Backgrounds, Navigation Bar, and AnimationsMDN Web Docs - CSS Box Model and Responsive DesignI followed current trends like card-based layouts, consistent brand colours, and simple button animations for better user experience.

COMMIT:
Added maroon header and black navigation styling for all pagesFixed Part 1 feedback - changed menu page from purple to maroon and fixed invisible nav linksAdded responsive card layout for specials and fixed About page text cut offAdded moving Order Now button and updated README for Part 2

PART 3
CHANGELOG-  Added
- Search bar functionality in menu.html using JavaScript (filters by dish name)
- Image modal popup in menu.html and gallery.html - click to enlarge, click to close (as per perfume site example)
- JavaScript form validation for enquiry.html (name, email, phone format, enquiry type)
- JavaScript form validation for contact.html (name, email, message)
- Restaurant image added to gallery

 Fixed
- CRITICAL: All images not showing - corrected extension from .jpg to .jpeg to match actual files in images/ folder (burger.jpeg, chicken.jpeg, chips.jpeg, wings.jpeg, wrap.jpeg, family-meal.jpeg, restaurant.jpeg)
- Family meal image not showing - removed duplicate file "family-meal - Copy.jpeg" that had spaces, standardized to family-meal.jpeg with dash
- Removed all inline JavaScript (onerror, onclick) from HTML files - moved all logic to js/script.js as per Part 2 feedback

   Part 2 Feedback
- Fixed navigation links consistency (Home.html capital H issue)
- Fixed folder structure
- Updated content as per lecturer comments
- ADDED ENQUIRY FILE (MADE IT ACTIVE)
- MADE CONTACT PAGE (FILE) ACTIVE

References
 - Duckett, J. 2014. HTML and CSS: Design and Build Websites. 1st ed. Indianapolis: John Wiley & Sons.
- Flanagan, D. 2020. JavaScript: The Definitive Guide. 7th ed. Sebastopol: O'Reilly Media.
- GitHub, Inc. 2024. Creating and committing changes to your repository. [Online]. Available at: https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project [Accessed 11 May 2026].
- Mozilla Corporation. 2024. Client-side form validation. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 11 May 2026].
- Mozilla Corporation. 2024. Using images in HTML. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML [Accessed 11 May 2026].
- Netlify, Inc. 2024. Deploy with GitHub. [Online]. Available at: https://docs.netlify.com/integrations/frameworks/ [Accessed 11 May 2026].
- W3Schools. 2024. HTML Form Elements. [Online]. Available at: https://www.w3schools.com/html/html_form_elements.asp [Accessed 11 May 2026].
- W3Schools. 2024. JavaScript Form Validation. [Online]. Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 11 May 2026].
- W3Schools. 2024. How To Create a Modal Image Gallery. [Online]. Available at: https://www.w3schools.com/howto/howto_css_modal_images.asp [Accessed 11 May 2026].

  https://meek-lily-22b4a1.netlify.app/

