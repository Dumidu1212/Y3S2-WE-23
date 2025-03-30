├── web-app/                                        # Unified React Web App for Admin & Restaurant Users
│   ├── .env.example                                # Environment variable template (e.g., REACT_APP_API_BASE_URL)
│   ├── package.json                                # npm dependencies and scripts
│   ├── Dockerfile                                  # Docker configuration (for containerized deployment)
│   ├── README.md                                   # Web app documentation
│   ├── public/
│   │   └── index.html                              # Main HTML template for the web app
│   └── src/
│       ├── index.js                                # React entry point
│       ├── App.js                                  # Main application component with unified routing
│       ├── components/                             # Reusable UI components (Navbar, Sidebar, Cards, etc.)
│       ├── pages/                                  # Role-specific screens (organized by subfolder)
│       │   ├── admin/                              # Screens for Admin users
│       │   │   ├── AdminLogin.js                   # Login screen for Admin users
│       │   │   ├── AdminDashboard.js               # Dashboard with metrics, user management, etc.
│       │   │   ├── UserManagement.js               # Manage user accounts
│       │   │   ├── RestaurantApproval.js           # Approve/reject restaurant registrations
│       │   │   ├── FinancialOverview.js            # Financial data & transaction summaries
│       │   │   └── AdminProfile.js                 # Admin Profile/Settings (optional)
│       │   └── restaurant/                         # Screens for Restaurant owners
│       │       ├── RestaurantLogin.js              # Login/Registration screen for Restaurant owners
│       │       ├── RestaurantDashboard.js          # Dashboard for active orders and notifications
│       │       ├── MenuManagement.js               # Manage menu items (CRUD operations)
│       │       ├── OrderManagement.js              # Manage incoming orders
│       │       └── ProfileManagement.js            # Update restaurant profile details
│       ├── services/                               # API integration services (using Axios)
│       └── store/                                  # State management (Redux or Context API)
│