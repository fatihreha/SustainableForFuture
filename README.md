# 7tepe Sustainable - UN Global Goals Web App

## Project Overview

7tepe Sustainable is a modern web application designed to raise awareness and provide information about the United Nations Sustainable Development Goals (SDGs). The site features visually engaging, individually themed pages for each of the 17 Global Goals, with custom backgrounds, overlays, and detailed descriptions. The project aims to educate users about the SDGs and inspire action towards a more sustainable future.

## Features
- Dedicated page for each of the 17 UN Sustainable Development Goals
- Custom background color and overlay for each goal
- Responsive, modern UI with clear typography and accessibility in mind
- Header, footer, and consistent layout across all pages
- Additional tools such as a Sustainable Product Recommender and Carbon Calculator
- Built with React and TypeScript for maintainability and scalability

## Technologies Used
- **React** (with functional components)
- **TypeScript**
- **Tailwind CSS** (for rapid, utility-first styling)
- **Vite** or **Create React App** (depending on your setup)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fatihreha/7tepeSustainable.git
   cd 7tepeSustainable/global-goals
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory for any required API keys or environment variables.
   - **Important:** Do not commit your `.env` file. It is already included in `.gitignore`.

## Running Locally

To start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (or the port specified in your setup).

## Folder Structure
```
global-goals/
├── src/
│   ├── components/         # Reusable UI components (Header, Footer, etc.)
│   ├── pages/              # Individual pages for each SDG (1.tsx, 2.tsx, ..., 17.tsx)
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── public/                 # Static public files
├── .env                    # Environment variables (not committed)
├── .gitignore
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md
```

## Contribution

Contributions are welcome! If you have suggestions for new features, improvements, or bug fixes, please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is for educational and awareness purposes. Please check the repository for license details.

---

For more information about the UN Sustainable Development Goals, visit [https://sdgs.un.org/goals](https://sdgs.un.org/goals) 
