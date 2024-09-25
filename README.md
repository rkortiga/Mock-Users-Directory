# Mock-Users-Directory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Project Overview

Mock-Users-Directory is a simple Angular application built to demonstrate user login functionality, authentication
guard, and user management. It integrates `PrimeNg` for UI components and leverages Angular's routing system and signals
for state management.

### Key Features:

- **Login Component**: A simple login form to authenticate users using a hardcoded username (`testuser123`) and
  password (`str0ngp@ssword!`).
- **Authentication Service**: Simulates user authentication and authorization using a basic hardcoded credential check.
- **Auth Guard**: Protects certain routes from being accessed unless the user is authenticated. Redirects
  unauthenticated users to the login page.
- **User List and Search**: A search bar is available to filter the user list, and each user is clickable, navigating to
  a detailed view of that user.
- **PrimeNg Integration**: Uses PrimeNg components such as `Card`, `Checkbox`, and `MessageService` for UI consistency
  and better user interaction.
- **Angular Signals**: Implements Angular signals for cleaner state management, avoiding the complexity of RxJS
  observables and subscriptions.
- **Mock API Integration**: Fetches user data from a mock API endpoint to populate the user list.

## API Usage

The application uses the following mock API to fetch user data:

- API Endpoint: [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)

This API is used to simulate real-world user data, which is displayed in the user list component. Users can search
through the list and view detailed information for each user by clicking on them.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Login Component

The login component allows users to enter their credentials (`username` and `password`) and authenticate. On successful
login, users are redirected to the home page, and on failure, an error message is displayed.

- **Login Simulation**:
    - Username: `testuser123`
    - Password: `str0ngp@ssword!`
- **Authentication Behavior**:
    - Successful login shows a success message and navigates to `/home`.
    - Failed login shows an error message.

## Authentication and Guard

- **AuthService**:
    - Handles user login and logout operations with a hardcoded username and password.
    - Provides authentication status to the guard to restrict access to certain routes.

- **Auth Guard**:
    - Routes such as `/home`, `/users`, and individual user pages are protected.
    - If the user is not authenticated, they are redirected to the `/login` page.

## Routes Configuration

The application uses Angular's `RouterModule` to define and protect routes with the `authGuard`.

- **Login Route**: `/login`
- **Home Route**: `/home` (protected by `authGuard`)
- **User List Route**: `/users` (protected by `authGuard`)
- **User Detail Route**: `/user/:id` (protected by `authGuard`)

## User List and Search

- The user list component fetches user data from the mock API (`https://jsonplaceholder.typicode.com/users`).
- It includes a search bar to filter through the users.
- Clicking on a user redirects to their detailed page (`/user/:id`).

## PrimeNg Usage

This project makes use of the following PrimeNg components:

- `CardModule`: Used for displaying user information.
- `CheckboxModule`: Included in the login form for the "Remember Me" functionality.
- `MessageService`: Used to show login success or error messages.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
