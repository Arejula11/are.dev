---
title: "Protecting Astro Forms with reCAPTCHA v3"
description: "Learn how to integrate Google reCAPTCHA v3 into your Astro site to prevent spam without annoying your users. A practical guide to secure static form submissions."
tags: ["Learn"]
publishedDate: "2025-04-20 19:00"
coverImage: "https://images.unsplash.com/photo-1696013910376-c56f76dd8178?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "en"
keywords: ["Astro", "reCAPTCHA", "forms", "spam protection", "recaptcha v3", "frontend security", "guide", "Google reCAPTCHA"]
---

Spam is a persistent threat to any website with public forms. As bots get more advanced, protecting your site without ruining user experience becomes critical. Fortunately, **reCAPTCHA v3** offers a modern solution that works silently in the background, evaluating user behavior and assigning a confidence score to each submission.

In this post, you’ll learn how to integrate reCAPTCHA v3 into your **Astro** site to secure your forms without introducing annoying interactions like image puzzles or checkboxes.

## Understanding reCAPTCHA v3

**reCAPTCHA v3** is a security service from Google that distinguishes real users from bots by analyzing interaction patterns. Instead of requiring user input, it runs in the background and gives each session a score between *0.0* (likely a bot) and *1.0* (very likely a human). This allows you to evaluate whether a submission is trustworthy without asking users to click anything.

To get started, you’ll need a [Google reCAPTCHA site key and secret key](https://www.google.com/recaptcha/admin/create). Choose **reCAPTCHA v3** when registering your site.

##  Creating a Secure Form in Astro

Let’s create a simple registration form in Astro and enhance it with reCAPTCHA v3.

### 1. Building the Form
First of all, you need to have a functional Astro project. If you don't have one, you can follow my [Astro guide](https://are-dev.es/posts/astroguide).

Then you need to create a basic form. You can use the following code as a starting point, which includes a simple registration form with username, email, password, and confirm password fields. It also uses Tailwind CSS for styling, so make sure you have it set up in your project.
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
In your *<head>*, include the reCAPTCHA v3 script:

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
This code will execute reCAPTCHA v3 when the form is submitted and add the token to the form data.  The token will be validated before the rest of the form is processed. This is important because if the token is invalid, the form will not be submitted and the rest of the form will not be processed. It is important to replace *<SITE-KEY>* with your actual site key.
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

## Conclusion

Securing forms doesn't have to mean frustrating your users. With reCAPTCHA v3, you can seamlessly add a powerful layer of protection to your Astro site without compromising the experience.

You now have a fully functional example of how to:
- Create a form in Astro
- Add reCAPTCHA v3 to it
- Verify submissions server-side

This approach helps prevent spam and bot attacks with minimal effort and no UX disruption. From here, you can expand your implementation with:
- Score-based rate limiting
- Logging suspicious activity
- Using reCAPTCHA actions to differentiate between multiple types of interactions

If you want to keep your forms clean and your users happy, reCAPTCHA v3 is a great tool in your toolkit.
Feel free to reach out if you have any questions or need further assistance. Happy coding!