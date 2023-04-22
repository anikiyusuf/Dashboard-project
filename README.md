# Dashboard-project

This project is built using vite , a build tools that aims to provide faster and learning development experience for modern web projects. Using react js as the language of the project and and a css frameworks call tailwind.

ctreaing a vite application 
npm create vite@latest

npx degit user/project my-project
cd my-project

npm install
npm run dev


# To install and use Tailwind css 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Then you configure the index css 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}





to configure your app.css file 

Templates
Screencasts
Playground
Resources
Community
Getting Started
Installation
Editor Setup
Using with Preprocessors
Optimizing for Production
Browser Support
Upgrade Guide
Core Concepts
Utility-First Fundamentals
Hover, Focus, and Other States
Responsive Design
Dark Mode
Reusing Styles
Adding Custom Styles
Functions & Directives
Customization
Configuration
Content
Theme
Screens
Colors
Spacing
Plugins
Presets
Base Styles
Preflight
Layout
Aspect Ratio
Container
Columns
Break After
Break Before
Break Inside
Box Decoration Break
Box Sizing
Display
Floats
Clear
Isolation
Object Fit
Object Position
Overflow
Overscroll Behavior
Position
Top / Right / Bottom / Left
Visibility
Z-Index
Flexbox & Grid
Flex Basis
Flex Direction
Flex Wrap
Flex
Flex Grow
Flex Shrink
Order
Grid Template Columns
Grid Column Start / End
Grid Template Rows
Grid Row Start / End
Grid Auto Flow
Grid Auto Columns
Grid Auto Rows
Gap
Justify Content
Justify Items
Justify Self
Align Content
Align Items
Align Self
Place Content
Place Items
Place Self
Spacing
Padding
Margin
Space Between
Sizing
Width
Min-Width
Max-Width
Height
Min-Height
Max-Height
Typography
Font Family
Font Size
Font Smoothing
Font Style
Font Weight
Font Variant Numeric
Letter Spacing
Line Clamp
Line Height
List Style Image
List Style Position
List Style Type
Text Align
Text Color
Text Decoration
Text Decoration Color
Text Decoration Style
Text Decoration Thickness
Text Underline Offset
Text Transform
Text Overflow
Text Indent
Vertical Align
Whitespace
Word Break
Hyphens
Content
Backgrounds
Background Attachment
Background Clip
Background Color
Background Origin
Background Position
Background Repeat
Background Size
Background Image
Gradient Color Stops
Borders
Border Radius
Border Width
Border Color
Border Style
Divide Width
Divide Color
Divide Style
Outline Width
Outline Color
Outline Style
Outline Offset
Ring Width
Ring Color
Ring Offset Width
Ring Offset Color
Effects
Box Shadow
Box Shadow Color
Opacity
Mix Blend Mode
Background Blend Mode
Filters
Blur
Brightness
Contrast
Drop Shadow
Grayscale
Hue Rotate
Invert
Saturate
Sepia
Backdrop Blur
Backdrop Brightness
Backdrop Contrast
Backdrop Grayscale
Backdrop Hue Rotate
Backdrop Invert
Backdrop Opacity
Backdrop Saturate
Backdrop Sepia
Tables
Border Collapse
Border Spacing
Table Layout
Caption Side
Transitions & Animation
Transition Property
Transition Duration
Transition Timing Function
Transition Delay
Animation
Transforms
Scale
Rotate
Translate
Skew
Transform Origin
Interactivity
Accent Color
Appearance
Cursor
Caret Color
Pointer Events
Resize
Scroll Behavior
Scroll Margin
Scroll Padding
Scroll Snap Align
Scroll Snap Stop
Scroll Snap Type
Touch Action
User Select
Will Change
SVG
Fill
Stroke
Stroke Width
Accessibility
Screen Readers
Official Plugins
Typography
Forms
Aspect Ratio
Container Queries
Installation

Install Tailwind CSS with Vite
Setting up Tailwind CSS in a Vite project.

Using React
Using Vue
Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

Terminal

npm create vite@latest my-project -- --template react
cd my-project
Install Tailwind CSS
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

Terminal

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;



Templates
Screencasts
Playground
Resources
Community
Getting Started
Installation
Editor Setup
Using with Preprocessors
Optimizing for Production
Browser Support
Upgrade Guide
Core Concepts
Utility-First Fundamentals
Hover, Focus, and Other States
Responsive Design
Dark Mode
Reusing Styles
Adding Custom Styles
Functions & Directives
Customization
Configuration
Content
Theme
Screens
Colors
Spacing
Plugins
Presets
Base Styles
Preflight
Layout
Aspect Ratio
Container
Columns
Break After
Break Before
Break Inside
Box Decoration Break
Box Sizing
Display
Floats
Clear
Isolation
Object Fit
Object Position
Overflow
Overscroll Behavior
Position
Top / Right / Bottom / Left
Visibility
Z-Index
Flexbox & Grid
Flex Basis
Flex Direction
Flex Wrap
Flex
Flex Grow
Flex Shrink
Order
Grid Template Columns
Grid Column Start / End
Grid Template Rows
Grid Row Start / End
Grid Auto Flow
Grid Auto Columns
Grid Auto Rows
Gap
Justify Content
Justify Items
Justify Self
Align Content
Align Items
Align Self
Place Content
Place Items
Place Self
Spacing
Padding
Margin
Space Between
Sizing
Width
Min-Width
Max-Width
Height
Min-Height
Max-Height
Typography
Font Family
Font Size
Font Smoothing
Font Style
Font Weight
Font Variant Numeric
Letter Spacing
Line Clamp
Line Height
List Style Image
List Style Position
List Style Type
Text Align
Text Color
Text Decoration
Text Decoration Color
Text Decoration Style
Text Decoration Thickness
Text Underline Offset
Text Transform
Text Overflow
Text Indent
Vertical Align
Whitespace
Word Break
Hyphens
Content
Backgrounds
Background Attachment
Background Clip
Background Color
Background Origin
Background Position
Background Repeat
Background Size
Background Image
Gradient Color Stops
Borders
Border Radius
Border Width
Border Color
Border Style
Divide Width
Divide Color
Divide Style
Outline Width
Outline Color
Outline Style
Outline Offset
Ring Width
Ring Color
Ring Offset Width
Ring Offset Color
Effects
Box Shadow
Box Shadow Color
Opacity
Mix Blend Mode
Background Blend Mode
Filters
Blur
Brightness
Contrast
Drop Shadow
Grayscale
Hue Rotate
Invert
Saturate
Sepia
Backdrop Blur
Backdrop Brightness
Backdrop Contrast
Backdrop Grayscale
Backdrop Hue Rotate
Backdrop Invert
Backdrop Opacity
Backdrop Saturate
Backdrop Sepia
Tables
Border Collapse
Border Spacing
Table Layout
Caption Side
Transitions & Animation
Transition Property
Transition Duration
Transition Timing Function
Transition Delay
Animation
Transforms
Scale
Rotate
Translate
Skew
Transform Origin
Interactivity
Accent Color
Appearance
Cursor
Caret Color
Pointer Events
Resize
Scroll Behavior
Scroll Margin
Scroll Padding
Scroll Snap Align
Scroll Snap Stop
Scroll Snap Type
Touch Action
User Select
Will Change
SVG
Fill
Stroke
Stroke Width
Accessibility
Screen Readers
Official Plugins
Typography
Forms
Aspect Ratio
Container Queries
Installation

Install Tailwind CSS with Vite
Setting up Tailwind CSS in a Vite project.

Using React
Using Vue
Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

Terminal

npm create vite@latest my-project -- --template react
cd my-project
Install Tailwind CSS
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

Terminal

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev


## Code example
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    
    # To restart the application 
    npm run dev
  )
}




