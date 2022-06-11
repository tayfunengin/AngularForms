# AngularForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage

This project contains an example for two types of Angular forms (template driven and reactive form). Besides, there are also examples of using structures such as routing, service, subject, custom directive in the project.

Below is starting page. Pages can be choosen from navigation.
![start](https://user-images.githubusercontent.com/71972947/173202052-692a3caa-2a36-49e3-b15b-ba20f5a9fcb3.PNG)

Username, email, gender are required in TD form. Form can not be submitted untill all form controls are valid. Reset button becomes active once at least one of the form control is filled.
![tdForm](https://user-images.githubusercontent.com/71972947/173202061-41a92134-0598-4d1c-b954-1555fdfc907e.PNG)

Once submitted, data is displayed on the screen.
![tdSubmit](https://user-images.githubusercontent.com/71972947/173202071-19a8d116-942b-4d2d-a762-343de5bffa1b.PNG)

In the reactive form, there is a custom validation that doest no accept "admin" as username because it is already taken.
![reactive](https://user-images.githubusercontent.com/71972947/173202083-73a70b02-4b61-4035-ac21-affde8cbedd6.PNG)

Once form is filled and submitted, app is directed to main page.

When clicking on any Menu Item, color of header and all buttons turns into the same color with the color of clicked menu item.
![menuClick](https://user-images.githubusercontent.com/71972947/173202094-0936dad6-f4e0-4d64-a0a7-5c567704dc9d.PNG)

Once clicking on any reset button, colors change to their original ones.

If you type a page which does not exist in url, app is redirected to not-found page.
![page not found](https://user-images.githubusercontent.com/71972947/173202112-769ec6ca-4e11-433a-a1d3-c48536731e02.PNG)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contact

You can reach me via engin.tayfun@gmail.com.

Thank you.
