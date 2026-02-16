# Factory Management System - Frontend

Angular-based web application for real-time factory monitoring and control with SignalR integration.

## 🏗️ Architecture Overview
```
┌─────────────────────────────────────────────────────────┐
│                  Angular Frontend                       │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Components Layer                    │   │
│  │  ┌────────────┐  ┌─────────────┐  ┌───────────┐  │   │
│  │  │ Dashboard  │  │ Program     │  │ History   │  │   │
│  │  │            │  │ Management  │  │ Viewer    │  │   │
│  │  └─────┬──────┘  └──────┬──────┘  └─────┬─────┘  │   │
│  └────────┼─────────────────┼──────────────┼────────┘   │ 
│           │                 │              │            │
│  ┌────────┼─────────────────┼──────────────┼────────┐   │
│  │        │     Services Layer             │        │   │
│  │  ┌─────▼──────┐  ┌───────▼──────┐  ┌───▼─────┐   │   │
│  │  │ SignalR    │  │ API Service  │  │ State   │   │   │
│  │  │ Service    │  │ (REST)       │  │ Service │   │   │
│  │  └─────┬──────┘  └───────┬──────┘  └─────────┘   │   │
│  └────────┼──────────────────┼──────────────────────┘   │
│           │                  │                          │
└───────────┼──────────────────┼──────────────────────────┘
            │                  │
            │ WebSocket        │ HTTP/HTTPS
            │ (SignalR)        │ (REST API)
            │                  │
            ▼                  ▼
   ┌────────────────────────────────┐
   │     Backend Server (.NET 9)    │
   │  - SignalR Hub (/factoryHub)   │
   │  - REST API (/api/*)           │
   └────────────────────────────────┘
```

## 🎯 Design Principles

### Reactive State Management

- **SignalR Service:** Manages WebSocket connection and real-time updates
- **State Service:** RxJS-based reactive state for PLC data
- **API Service:** Traditional HTTP requests for commands
- **Smart/Dumb Components:** Smart containers handle logic, dumb components display data

### Real-time First

- SignalR connection established on app initialization
- Automatic reconnection with exponential backoff
- Optimistic UI updates with rollback on error
- Live data binding with Angular signals

## 🛠️ Technology Stack

- **Framework:** Angular 17+
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 3
- **Real-time:** @microsoft/signalr
- **HTTP Client:** Angular HttpClient
- **State Management:** RxJS + Angular Signals
- **Build Tool:** Angular CLI
- **Package Manager:** npm

## 🚀 Getting Started

### Prerequisites
```bash
# Required
- Node.js 18+ (LTS recommended)
- npm 9+

# Optional
- VS Code with Angular Language Service
- Chrome DevTools (for debugging)
```

### Installation

1. **Clone the repository:**
```bash
git clone 
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment:**

Create `src/environments/environment.development.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
  hubUrl: 'http://localhost:5000/factoryHub',
  reconnectDelayMs: 2000,
  maxReconnectAttempts: 10
};
```

Create `src/environments/environment.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://factory-api.yourdomain.com',
  hubUrl: 'https://factory-api.yourdomain.com/factoryHub',
  reconnectDelayMs: 5000,
  maxReconnectAttempts: 20
};
```

4. **Start development server:**
```bash
ng serve
```

Application runs at: `http://localhost:4200`

5. **Open in browser:**
```bash
# Automatically open browser
ng serve --open
```

## 📁 Project Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts          # Main monitoring view
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.css
│   │   │   ├── program-list/
│   │   │   │   ├── program-list.component.ts       # Program selection
│   │   │   │   ├── program-list.component.html
│   │   │   │   └── program-list.component.css
│   │   │   ├── controls/
│   │   │   │   ├── controls.component.ts           # Manual controls
│   │   │   │   ├── controls.component.html
│   │   │   │   └── controls.component.css
│   │   │   ├── history/
│   │   │   │   ├── history.component.ts            # Historical data viewer
│   │   │   │   ├── history.component.html
│   │   │   │   └── history.component.css
│   │   │   ├── alarms/
│   │   │   │   ├── alarms.component.ts             # Alarm display
│   │   │   │   └── alarms.component.html
│   │   │   └── shared/
│   │   │       ├── status-indicator/               # Reusable status display
│   │   │       ├── value-display/                  # Sensor value display
│   │   │       └── loading-spinner/                # Loading state
│   │   ├── services/
│   │   │   ├── signalr.service.ts                 # SignalR connection manager
│   │   │   ├── api.service.ts                     # REST API client
│   │   │   ├── plc-state.service.ts               # PLC state management
│   │   │   ├── program.service.ts                 # Program operations
│   │   │   └── event-log.service.ts               # Event logging
│   │   ├── models/
│   │   │   ├── plc-state.model.ts                 # PLC state interface
│   │   │   ├── program.model.ts                   # Program interface
│   │   │   ├── event.model.ts                     # Event interface
│   │   │   └── alarm.model.ts                     # Alarm interface
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts                # Future: JWT auth
│   │   │   └── error.interceptor.ts               # Global error handling
│   │   ├── guards/
│   │   │   └── auth.guard.ts                      # Future: Route protection
│   │   ├── app.component.ts                       # Root component
│   │   ├── app.component.html
│   │   ├── app.routes.ts                          # Routing configuration
│   │   └── app.config.ts                          # App configuration
│   ├── environments/
│   │   ├── environment.ts                         # Production config
│   │   └── environment.development.ts             # Development config
│   ├── assets/
│   │   ├── icons/                                 # SVG icons
│   │   └── images/                                # Static images
│   ├── styles/
│   │   └── styles.css                             # Global styles + Tailwind
│   ├── index.html                                 # Main HTML
│   └── main.ts                                    # Bootstrap
├── tailwind.config.js                             # Tailwind configuration
├── tsconfig.json                                  # TypeScript config
├── angular.json                                   # Angular CLI config
├── package.json                                   # Dependencies
└── README.md
```