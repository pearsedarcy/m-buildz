# M-BUILDZ

![README Cover Image](URL)

[Link to Live site](https://pearsedarcy.github.io/m-buildz/).

## Background

### Project Background

This project was undertaken as my first Personl Project(PP1) for a diploma in Software Delevopment from Code Institute. The project aims to test the students understanding and knowledge of HTML and CSS.

### Background

M-Buildz is a website built to display the work of Cavan based M-buildz, a workshop specializing in building the finest Drift Cars in Ireland.
The goal of the website is to showcase some of the products and services M-Buildz provides, and to encourage users to get in contact if they are intertested in purchasing some of the services or products.

## Project Goals

Build an eyecatching, highly performative, entirely responsive website to showcase skills in HTML and CSS, alone, without the use of any Object programming language i.e JavaScript. The website should use modern native styling to encourage intuitive use, and should display visual confirmation of interactions to the user.

## Project Scope

With a wide variety of possibilities when starting the project it was important to narrow the scope, and therefore the focus, of what was to be attempted. After much deliberation a basic format was decided upon.

1. **An Interesting animated loading screen**:
   Loading screens have become common place in the world of web development. While it is mostly a practical tool, used to prevent users from bouncing (Clicking off the website before interacting with it), it also can insinuate both quality and mistique. This is the aspect of the element which I want to leverage in this project.

2. **An eye catching Hero Section**: When the user lands on the page they should instantly know exactly what M-Buildz do.

3. **A Portfolio Section**: The goal of the website is to showcase some of M-Buildz projects over the years, this will be undertaken using a popular 'Card' section which will contain usuful information about some of the cars they have built.

4. **A Contact Section**: The major goal of the website is to encourage users to contact M-Buildz if they are interested in building a car with them. To do this I will implement an inviting contact form, which confirms to the user it's submission.

5. **A Intuitive Design**: The design language of the website should be native to the user. Iconography should be of a recognisable standard from which the user can automatically infer its meaning

### Future Goals

M-Buildz eventually would like to add an online store to the website. While that it out of the scope for the current project, it was held as a strong consideration while designing, so that when the time comes to implement a store, the theme and design language would seemlessly integrate into the larger platform.

## Initial Design Considerations

### WireFrame

To design to basic layout and structure of the website I built a wireframe diagram in Figma, a popular online design service.

#### Why we Wireframe

Wireframing is exceptionally important in web design. It allows the designer to effectively envision the layout and structure of the website without getting too caught up in the finer details of the content, colors and imagery. Of particular importance for myself was to use the wireframe to plan how the websites sections would scale and shrink with fluid motion. Modern websites need to be prepared to be viewed on screens as small as a smart watch, to as large as a Billboard. While those considerations might be a stretch for the goals of this project, it is worth keeping in mind while designing the elements to look good on screens from a small mobile phone, to a large PC monitor.

#### Mobile Page Structure

Using a mobile first approach when beginning with this design was of great importance. M-Buildz interacts with their customers mostly through Instagram, therefore it is safe to assume the majority of the website's visitors will be on mobile.
[Mobile-WireFrame](URL)

#### Tablet page structure

Tablets can be a tricky medium to strike when it comes to responsive design. On one hand they often have screens and resolutions simlar to small laptops, encouraging a lean toward the wider desktop display. On the other hand they are touch screen and are often swapped between landscape and portrait mode. Therefore I chose a "Wide Mobile" design language for the tablet. Using similar navigation elements as the mobile design, while maintaining a denser content structure, like that of the desktop.
[Tablet-Wireframe](URL)

#### Desktop Page Structure

The design of the desktop page structure is focused on maximising the wide aspect ratio. By stacking the portfolio cards as well as the contact section in a horizonal, or columnar fashion, I was able to make better use of the wider canvas, without making it feel crowded.
[Desktop-Wireframe](URL)

## Design Language

M-Buildz has a well established design language running throughout the history of the company. By disecting some of their exsiting branding such as logos and posters, I put together a collection of identifiable themes.

### Color Choice

Considering my enourmous bias on the subject, it was very easy to recognise an opportunity to leverage the recent popularity of the 'Dark Theme' design language for this project. The brand's exisiting imagery has a prevailing use of five major colors; Dark grey, light grey, purple, pink and white. This pallette is ideally suited for use in a dark themed website and compliment eachother nicely while having adequate constrast for readbility and to highlight important features.
[Color-Pallette](URL)

### Fonts

Two fonts were chosen with great consideration for the project. Google fonts API was used to implement the font choice for it's seemless integration and cross browser support. A sans-serif font was chosen in both cases as I feel it to be a more modern typeface.

#### Headings and Buttons

**Audiowide** This font was chosen due to its reasonable similarity to the font used in the M-Buildz logo. It is themactically matched to the broader vision of the brand identity and has many similaritys to fonts used in a wider sense accross the motor industry. It was ideal for use in larger pieces of text such as Headings and Buttons, however in smaller font sizes in not particually legible so an alternate font was chosen for paragraphs and smaller font sizes.

**Geologicia** I chose this font due to its readability and scaleabilty. It is a simplier sans serif typeface, and has many similarities to popular fonts such as Poppins or Roboto.

#### Logo

M-Buildz already has a logo so I used this.

#### Iconography

The automotive industry, much like the web, has a standardised or native set of icons commonly used accross brands to represent different elements of the car, such as the infamous engine light. I paired this common iconography with what has become the standard of icon sets in web design i.e. the burger menu, or three horizontal bars to represent a menu. This ensures an intuitive nagivation of the website. I used the FontAwesome API for the navigation icons and I used Figma to download the automotive icons.

#### Imagery

The majority of the images used on the website were provided by M-Buildz themselves, such as those of the cars and poster. The hero-section element was taken from Pexels, a copyright free stock image service.

## Section Disection

Here is a breakdown of each of the elements of the website.

### Page Header

The page header was constructed to blend in with the page as much as possible, to not distract from the page content, whilst ensuring branding recognition and intuitive use. On mobile a 'Burger Menu' icon was used due to its standardisation accross mobile applications. When clicked it reveals a side menu with a list of links to different sections of the page. The desktop implimentation makes use of the larger canvas by permanantly displaying the menu list, enabling quick navigation between sections.

[Page-Header](URL)

### Page Footer

The page footer displays links to social media accounts and a copyright. The footer scales for use on all screen sizes and the icons have hover interaction for desktop to imply clickability.

[Page-Footer](URL)
