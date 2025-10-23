🌟 Assignment Design Project: Interactive Widgets Showcase🎯 OverviewThis repository contains a showcase of two interactive UI components built using Next.js and React. The project focuses on recreating a dark-theme design layout, emphasizing clean aesthetics, component functionality, and state management.The key deliverable is a two-column layout featuring:Tabs Widget: Displays multi-section information (About Me, Experiences, Recommended) with dynamic content switching and a scrollable area.Gallery Widget: A functional image gallery that allows users to cycle through existing images and upload new ones dynamically using local files.🚀 Technologies UsedCategoryTechnologyPurposeFrameworkNext.js (App Router)Core framework providing structure, routing, and SSR capabilities.LanguageTypeScriptEnsures type safety for components and interfaces (e.g., GalleryImage).StylingTailwind CSSUsed for the main page layout, widget containers, utility classes, and dark-mode styling.StylingStyled ComponentsUtilized specifically for the complex, detailed styling of the custom Toggle Button component.IconsLucide-ReactProvides clean, modern icons (e.g., Info, Plus, ChevronLeft).⚙️ Local Setup and InstallationFollow these steps to get the project running on your local machine.PrerequisitesEnsure you have the following installed:Node.js (v18 or higher)npm (or yarn/pnpm)Installation StepsClone the Repository:Navigate to your desired directory and clone the project.Bashgit clone https://github.com/krrish321/Assignment-design.git
cd Assignment-design
Install Dependencies:Install all required packages, including styled-components and its TypeScript types.Bash# Install main dependencies
npm install

# Install TypeScript types for styled-components (essential for .tsx files)
npm install --save-dev @types/styled-components
If you face dependency conflicts (ERESOLVE errors), use npm install --legacy-peer-deps.Configure Next.js (for Styled Components):Verify that your next.config.js file includes the necessary compiler option for styled-components to work correctly with Server-Side Rendering (SSR).JavaScript// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // This enables styled-components support
  },
};

module.exports = nextConfig;
Run the Development Server:Bashnpm run dev
The application will be accessible at http://localhost:3000.📁 Project Structure HighlightsThe main components are located within the components directory and are assembled in the root page.tsx.assignment-design/
├── app/
│   └── page.tsx           # Main component assembling TabsWidget and GalleryWidget.
├── components/
│   ├── button.tsx         # Custom Toggle Button (using styled-components).
│   ├── gallery-widget.tsx # Image navigation and upload functionality.
│   └── tabs-widget.tsx    # Tab navigation and scrollable content display.
└── public/
    └── (images)           # Placeholder images for the initial gallery state.
🤝 Contribution & FeedbackThis project was created as an assignment. Feedback, suggestions, or potential improvements are welcome!

📝 LicenseThis project is open-sourced under the MIT License.
