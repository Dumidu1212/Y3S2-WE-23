GroupID_DS-Assignment/                              # Root directory for the entire project
├── backend/                                        # All backend microservices
│   ├── .env.example                                # Global backend environment variable template (PORT, MONGODB_URI, JWT_SECRET, etc.)
│   ├── api-gateway/                                # API Gateway Service: central entry point for requests
│   │   ├── config/                                 # Configuration files (DB connections, API keys, etc.)
│   │   ├── src/
│   │   │   ├── app.js                              # Main Express app with a health-check route
│   │   │   └── routes/
│   │   │       └── gatewayRoutes.js                # Routing and middleware definitions
│   │   ├── Dockerfile                              # Docker configuration for API Gateway
│   │   ├── package.json                            # Dependencies and scripts (with "type": "module")
│   │   └── README.md                               # API Gateway documentation
│   ├── user-service/                               # User Management Service (handles Admin, Customer, Delivery)
│   │   ├── config/
│   │   ├── src/
│   │   │   ├── app.js                              # Express app for user-service
│   │   │   ├── controllers/
│   │   │   │   └── userController.js               # Business logic for user operations (register, login, profile update)
│   │   │   ├── models/
│   │   │   │   └── User.js                         # MongoDB schema for users
│   │   │   ├── routes/
│   │   │   │   └── userRoutes.js                   # RESTful endpoints for user operations
│   │   │   ├── services/
│   │   │   │   └── authService.js                  # Authentication logic (JWT, hashing)
│   │   │   └── utils/
│   │   │       └── logger.js                       # Common logging utility
│   │   ├── Dockerfile                              # Docker config for user-service
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   ├── restaurant-service/                         # Restaurant & Menu Management Service
│   │   ├── config/
│   │   ├── src/
│   │   │   ├── app.js                              # Express app for restaurant-service
│   │   │   ├── controllers/
│   │   │   │   └── restaurantController.js         # Business logic for restaurant and menu operations
│   │   │   ├── models/
│   │   │   │   ├── Restaurant.js                   # Schema for restaurant information
│   │   │   │   └── MenuItem.js                       # Schema for menu items
│   │   │   └── routes/
│   │   │       └── restaurantRoutes.js             # RESTful endpoints for restaurant management
│   │   ├── Dockerfile                              # Docker configuration for restaurant-service
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   ├── order-service/                              # Order Management Service
│   │   ├── config/
│   │   ├── src/
│   │   │   ├── app.js                              # Express app for order-service
│   │   │   ├── controllers/
│   │   │   │   └── orderController.js              # Business logic for order processing
│   │   │   ├── models/
│   │   │   │   ├── Order.js                        # Schema for orders
│   │   │   │   └── OrderItem.js                    # Schema for order items
│   │   │   └── routes/
│   │   │       └── orderRoutes.js                  # RESTful endpoints for order operations
│   │   ├── Dockerfile                              # Docker configuration for order-service
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   ├── delivery-service/                           # Delivery Management Service
│   │   ├── config/
│   │   ├── src/
│   │   │   ├── app.js                              # Express app for delivery-service
│   │   │   ├── controllers/
│   │   │   │   └── deliveryController.js           # Business logic for delivery operations
│   │   │   ├── models/
│   │   │   │   └── Delivery.js                     # Schema for delivery details
│   │   │   └── routes/
│   │   │       └── deliveryRoutes.js               # RESTful endpoints for delivery operations
│   │   ├── Dockerfile                              # Docker configuration for delivery-service
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   ├── payment-service/                            # Payment Integration Service
│   │   ├── config/
│   │   ├── src/
│   │   │   ├── app.js                              # Express app for payment-service
│   │   │   ├── controllers/
│   │   │   │   └── paymentController.js            # Payment processing logic
│   │   │   ├── models/
│   │   │   │   └── Payment.js                      # Schema for payment transactions
│   │   │   └── routes/
│   │   │       └── paymentRoutes.js                # RESTful endpoints for payment operations
│   │   ├── Dockerfile                              # Docker configuration for payment-service
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   ├── notification-service/                       # Notification Service
│   │   ├── config/
│   │   ├── src/
│   │   │   ├── app.js                              # Express app for notification-service
│   │   │   ├── controllers/
│   │   │   │   └── notificationController.js       # Logic for sending notifications (SMS, email)
│   │   │   └── routes/
│   │   │       └── notificationRoutes.js           # RESTful endpoints for notifications
│   │   ├── Dockerfile                              # Docker configuration for notification-service
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   └── common/                                     # Shared utilities for backend microservices
│       └── utils/
│           └── logger.js                           # Common logging utility
│
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
├── mobile-app/                                     # Flutter Mobile App for Customers & Delivery Personnel
│   ├── .env.example                                # Environment variable template (e.g., API_BASE_URL, APP_ENV)
│   ├── pubspec.yaml                                # Flutter project configuration and dependencies
│   ├── README.md                                   # Mobile app documentation
│   ├── lib/                                        # Application source code
│   │   ├── main.dart                               # Entry point and routing configuration
│   │   ├── models/                                 # Data models (user.dart, restaurant.dart, menu_item.dart, order.dart, delivery.dart)
│   │   ├── screens/                                # UI screens for mobile users
│   │   │   ├── customer/                           # Customer screens:
│   │   │   │   ├── login.dart                      # Customer Login/Registration screen
│   │   │   │   ├── home.dart                       # Home/Dashboard screen
│   │   │   │   ├── restaurant_list.dart            # Restaurant List screen
│   │   │   │   ├── restaurant_details.dart         # Restaurant Details & Menu screen
│   │   │   │   ├── cart.dart                       # Cart/Order Summary screen
│   │   │   │   ├── payment.dart                    # Payment screen
│   │   │   │   ├── order_tracking.dart             # Order Tracking screen
│   │   │   │   └── order_history.dart              # Order History screen
│   │   │   └── delivery/                           # Delivery Personnel screens:
│   │   │       ├── login.dart                      # Delivery Login/Registration screen
│   │   │       ├── dashboard.dart                  # Dashboard (list of assigned orders)
│   │   │       ├── order_details.dart              # Order Details screen (with map integration)
│   │   │       └── delivery_status_update.dart     # Delivery Status Update screen
│   │   ├── services/                               # API calls, authentication, and business logic integration
│   │   └── widgets/                                # Reusable UI components (custom buttons, cards, etc.)
│   ├── assets/                                     # Images, fonts, and static resources
│   ├── test/                                       # Unit and widget tests for the mobile app
│   └── README.md
│
├── database/                                       # Database Configuration and Initialization Scripts
│   ├── init.sql                                    # SQL schema for relational databases (if applicable)
│   ├── docker-compose.yml                          # Database container configuration
│
├── infra/                                          # Infrastructure & Deployment Configurations
│   ├── k8s/                                        # Kubernetes manifests for all services
│   │   ├── deployment-api-gateway.yaml
│   │   ├── deployment-user-service.yaml
│   │   ├── deployment-restaurant.yaml
│   │   ├── deployment-order.yaml
│   │   ├── deployment-delivery.yaml
│   │   ├── deployment-payment.yaml
│   │   ├── deployment-notification.yaml
│   │   ├── service-api-gateway.yaml
│   │   ├── service-user.yaml
│   │   ├── service-restaurant.yaml
│   │   ├── service-order.yaml
│   │   ├── service-delivery.yaml
│   │   ├── service-payment.yaml
│   │   └── service-notification.yaml
│   ├── docker-compose.yml                          # Multi-container Docker configuration for local development
│
├── logs/                                           # (Optional) Log files for production or testing
├── docs/                                           # Project Documentation
│   ├── report.pdf                                  # Detailed project report (architecture, workflows, etc.)
│   ├── submission.txt                              # GitHub repository and demo video links
│   ├── readme.txt                                  # Step-by-step deployment instructions
│   ├── members.txt                                 # Group member details
│   └── architecture-diagram.png                    # High-level architectural diagram showing interconnectivity
│
├── README.md                                       # Overall project overview and high-level instructions
├── .env                                            # Global environment variables (if applicable)
└── docker-compose.yml                              # Root-level Docker configuration for multi-container setup
