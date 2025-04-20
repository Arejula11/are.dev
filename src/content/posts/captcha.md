---
title: "Protecting Astro Forms with reCAPTCHA v3"
description: "Learn how to integrate Google reCAPTCHA v3 into your Astro site to prevent spam without annoying your users. A practical guide to secure static form submissions."
tags: ["Learning"]
publishedDate: "2025-04-20 19:00"
coverImage: "https://images.unsplash.com/photo-1696013910376-c56f76dd8178?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: true
language: "en"
keywords: ["Astro", "reCAPTCHA", "forms", "spam protection", "recaptcha v3", "frontend security", "guide", "Google reCAPTCHA"]
---

Forms are one of the most common entry points for spam on any website. If you’re using Astro to build static sites, you might be handling form submissions through APIs or third-party services—but even then, bots can still target your form endpoints.

reCAPTCHA v3 offers a silent way to detect and block spam without requiring user interaction. In this guide, you'll learn how to integrate it into an Astro project and validate the token server-side to ensure that only real users can submit your forms.

## What are reCAPTCHAs?
reCAPTCHA is a free service from Google that helps protect your website from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart. Probably you have seen the "I am not a robot" checkbox or the image selection challenges. This is the most common version, but reCAPTCHA v3 works differently. It runs in the background and assigns a score to each request based on its likelihood of being a bot. The higher the score, the more likely it is that the request is from a human.
## Why reCAPTCHA v3?
reCAPTCHA v3 is designed to be invisible to users. It doesn't require any user interaction, which means it won't interrupt the user experience. Instead, it runs in the background and assigns a score, from 0 to 10, based on the user's behavior on your site. This makes it ideal for protecting forms without annoying your users.

## Setting Up reCAPTCHA v3
First of all, you need to have a functional Astro project. If you don't have one, you can follow my [Astro guide](https://are-dev.es/posts/astroguide). Then you need to create a basic form. You can use the following code as a starting point, which includes a simple registration form with username, email, password, and confirm password fields. It also uses Tailwind CSS for styling, so make sure you have it set up in your project.

```astro
---
import Layout from "../layouts/Layout.astro";

const dataString = {
    username: "",
    email: "",
    password: "",
};
let errorMessage = "";

if (Astro.request.method === "POST") {
    try {
        // Get the form data
        const data = await Astro.request.formData();
        const username = data.get("username")?.toString().trim() || "";
        const email = data.get("email")?.toString().trim() || "";
        const password = data.get("password")?.toString().trim() || "";
        const confirmPassword = data.get("confirm-password")?.toString().trim() || ""; 

        dataString.email = email;
        dataString.password = password;
        dataString.username = username;

        // Check the password length and confirmation
        const isPasswordValid = password.length >= 8 && password === confirmPassword;

        if (!isPasswordValid) {
            errorMessage = "Password must be at least 8 characters long and match the confirmation.";
        }

        // If there are any errors, show them
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            // If the data is valid, handle the form submission
            return Astro.redirect("/");
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error en al registrar:", error.message);
            errorMessage = "Try again later. An error occurred while registering.";
        }
    }
}

---

<Layout>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Create an account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" method="POST">
                <div>
                    <label for="username" class="block text-sm/6 font-medium text-gray-900">
                        Username
                    </label>
                    <div class="mt-2">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>
                
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">
                        Email
                    </label>
                    <div class="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div class="mt-2">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label for="confirm-password" class="block text-sm/6 font-medium text-gray-900">
                        Confirm Password
                    </label>
                    <div class="mt-2">
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>

                

                {errorMessage && (
                    <div class="text-red-600 text-sm mt-2">
                        {errorMessage}
                    </div>
                )}

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-secondary-green hover:cursor-pointer"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
</Layout>
``` 

You will get a simple form like this: 
![form](/assets/recaptcha/form.png)

## Adding reCAPTCHA v3
Then you need to add reCAPTCHA v3 to your form. To do this, you need to create a Google reCAPTCHA account and get your site key and secret key. You can do this by going to the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin/create) and following the instructions.
Once you have your site and secret keys, copy them in a .env file so you will be the only one with access to them. Then, you can add the reCAPTCHA to your form. You need to add this code before the *<Layout>* tag in your form component, substituting **<SITE-KEY>** with your site key:

```astro
<head>
    <meta charset="UTF-8">
    <script is:inline src="https://www.google.com/recaptcha/api.js?render=<SITE-KEY>"></script>
</head>
```
This will load the reCAPTCHA script and make it available for use in your form. 
This version of reCAPTCHA doesn't require any user interaction, so we will hide the reCAPTCHA badge to the user. To add the badge, you need to add the following code inside the *<Layout>* tag, before the *</form>* tag:

```astro
<script is:inline>
  async function handleSubmit(event) {
      event.preventDefault();
      console.log("Submitting form...");
      // Execute reCAPTCHA v3
      grecaptcha.ready(async () => {
          const token = await grecaptcha.execute("<SITE-KEY>", { action: 'submit' });

          // Add the token to the form data
          const form = event.target.closest('form');
          const recaptchaInput = document.createElement('input');
          recaptchaInput.type = 'hidden';
          recaptchaInput.name = 'recaptcha';
          recaptchaInput.value = token;
          form.appendChild(recaptchaInput);

          // Submit the form
          form.submit();
      });
  }
</script>
```
This code will execute reCAPTCHA v3 when the form is submitted and add the token to the form data.  The token will be validated before the rest of the form is processed. This is important because if the token is invalid, the form will not be submitted and the rest of the form will not be processed.
## Validating the reCAPTCHA Token

```js

const data = await Astro.request.formData();
        const recaptchaToken = data.get("recaptcha");
        // Verify the reCAPTCHA token
         const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
        const requestHeaders = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        const requestBody = new URLSearchParams({
            secret: import.meta.env.RECAPTCHA_SECRET,
            response: recaptchaToken,
        });

        const recaptchaResponse = await fetch(recaptchaURL, {
            method: "POST",
            headers: requestHeaders,
            body: requestBody.toString(),
        });

        const recaptchaResult = await recaptchaResponse.json();
        console.log("Recaptcha result:", recaptchaResult);
        if (!recaptchaResult.success) {
            throw new Error("Error verifying captcha. Please try again.");
        }
        if (recaptchaResult.score < 0.5) {
            throw new Error("Captcha verification failed. Please try again.");
        }
```
This code will verify the reCAPTCHA token by sending a request to the Google reCAPTCHA API. If the token is valid, it will return a score between 0 and 1. If the score is below 0.5, it means that the request is likely from a bot and you should reject it.

The full code of the form component should look like this:

```astro
---

import Layout from "../layouts/Layout.astro";

const dataString = {
    username: "",
    email: "",
    password: "",
};
let errorMessage = "";

if (Astro.request.method === "POST") {
    try {
        // Get the form data
        const data = await Astro.request.formData();

        const recaptchaToken = data.get("recaptcha");
        // Verify the reCAPTCHA token
         // Verify the reCAPTCHA token
         const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
        const requestHeaders = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        const requestBody = new URLSearchParams({
            secret: import.meta.env.RECAPTCHA_SECRET,
            response: recaptchaToken,
        });

        const recaptchaResponse = await fetch(recaptchaURL, {
            method: "POST",
            headers: requestHeaders,
            body: requestBody.toString(),
        });

        const recaptchaResult = await recaptchaResponse.json();
        console.log("Recaptcha result:", recaptchaResult);
        if (!recaptchaResult.success) {
            throw new Error("Error verifying captcha. Please try again.");
        }
        if (recaptchaResult.score < 0.5) {
            throw new Error("Captcha verification failed. Please try again.");
        }

        const username = data.get("username")?.toString().trim() || "";
        const email = data.get("email")?.toString().trim() || "";
        const password = data.get("password")?.toString().trim() || "";
        const confirmPassword = data.get("confirm-password")?.toString().trim() || ""; 

        dataString.email = email;
        dataString.password = password;
        dataString.username = username;

        // Check the password length and confirmation
        const isPasswordValid = password.length >= 8 && password === confirmPassword;

        if (!isPasswordValid) {
            errorMessage = "Password must be at least 8 characters long and match the confirmation.";
        }

        // If there are any errors, show them
        if (errorMessage) {
            console.log(errorMessage);
        } else {
            // If the data is valid, handle the form submission
            return Astro.redirect("/");
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error en al registrar:", error.message);
            errorMessage = "Try again later. An error occurred while registering.";
        }
    }
}

---

<head>
    <meta charset="UTF-8">
    <script is:inline src="https://www.google.com/recaptcha/api.js?render=<SITE-KEY>"></script>
</head>
<Layout>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Create an account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" method="POST">
                <div>
                    <label for="username" class="block text-sm/6 font-medium text-gray-900">
                        Username
                    </label>
                    <div class="mt-2">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>
                
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">
                        Email
                    </label>
                    <div class="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm/6 font-medium text-gray-900">
                        Password
                    </label>
                    <div class="mt-2">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <label for="confirm-password" class="block text-sm/6 font-medium text-gray-900">
                        Confirm Password
                    </label>
                    <div class="mt-2">
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            required
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-green sm:text-sm/6"
                        />
                    </div>
                </div>

                

                {errorMessage && (
                    <div class="text-red-600 text-sm mt-2">
                        {errorMessage}
                    </div>
                )}

                <div>
                    <button
                        type="button"
                        class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-secondary-green hover:cursor-pointer"
                        onclick="handleSubmit(event)"
                    >
                        Sign Up
                    </button>
                </div>

                <script is:inline>
                    async function handleSubmit(event) {
                        event.preventDefault();
                        console.log("Submitting form...");
                        // Execute reCAPTCHA v3
                        grecaptcha.ready(async () => {
                            const token = await grecaptcha.execute("<SITE-KEY>", { action: 'submit' });

                            // Add the token to the form data
                            const form = event.target.closest('form');
                            const recaptchaInput = document.createElement('input');
                            recaptchaInput.type = 'hidden';
                            recaptchaInput.name = 'recaptcha';
                            recaptchaInput.value = token;
                            form.appendChild(recaptchaInput);

                            // Submit the form
                            form.submit();
                        });
                    }
                </script>
            </form>
        </div>
    </div>
</Layout>
```
Now the form is protected with reCAPTCHA v3, check that you have the reCAPTCHA badge in the bottom right corner of your form. You must get something like this:
![form with recaptcha](/assets/recaptcha/form_captcha.png)

Each time the form is submitted, the reCAPTCHA token will be generated and sent to the server for validation. If the token is valid, the form will be processed as usual. If the token is invalid or the score is too low, an error message will be displayed. The message with the captcha result will look like this:
![recaptcha result](/assets/recaptcha/captcha_result.png)