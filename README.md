# Login-Form (Cart-X)

> An Angular-based E-commerce Authentication & Shopping Cart Web Application powered by Firebase.

---

## 🚀 Features

- **Authentication & User Management**:
  - Email & Password Sign Up and Sign In via Firebase Auth.
  - Google OAuth single sign-on (SSO).
  - Route guards (`AuthGuard`) protecting dashboard and product catalog access.
- **E-Commerce & Storefront**:
  - Product catalog browsing with filtering and sorting pipes.
  - Interactive shopping cart management service.
  - Dynamic billing form and order management models.
- **Cloud Database Integration**:
  - Firestore data sync for user profiles and product store records.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: [Angular v11](https://angular.io/) (TypeScript, RxJS)
- **UI Framework**: [Bootstrap 4](https://getbootstrap.com/)
- **Backend & Auth**: [Firebase / AngularFire](https://github.com/angular/angularfire)
- **Testing**: Karma & Jasmine

---

## 🔧 Getting Started

### Prerequisites

- Node.js (v14+ recommended for Angular 11 compatibility)
- npm (v6+)
- Angular CLI installed globally (`npm i -g @angular/cli@11`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ckr-Harsh/Login-Form.git
   cd Login-Form
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   Update `src/environments/environment.ts` with your Firebase project credentials:
   ```typescript
   export const environment = {
     production: false,
     firebaseConfig: {
       apiKey: "YOUR_FIREBASE_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
     }
   };
   ```

4. **Run the Development Server**:
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

---

## 🔍 Recent Updates & Fixes

- **AuthGuard Fix**: Resolved authorization bypass where `this.service.GoogleAuth` function reference was evaluated as truthy, preventing unauthenticated access to `/dashboard`.
- **Centralized Configuration**: Moved Firebase configuration into `environment.ts` & `environment.prod.ts` and refactored `AppModule` to eliminate duplicate configuration code.
- **LocalStorage & Session Cleanup**: Fixed memory leaks and `"null"` string artifacts in local storage during sign-out.
- **Template & Form Validation**: Corrected invalid form evaluation in `SignInComponent` template (`form.invalid && form.touched`) and updated route navigation methods.

---

## 📜 Build & Test Commands

- **Production Build**:
  ```bash
  ng build --prod
  ```
- **Run Unit Tests**:
  ```bash
  ng test
  ```
