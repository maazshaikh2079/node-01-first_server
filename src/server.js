require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT;

const githubData = {
  "login": "maazshaikh2079",
  "id": 124486797,
  "node_id": "U_kgDOB2uEjQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/124486797?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/maazshaikh2079",
  "html_url": "https://github.com/maazshaikh2079",
  "followers_url": "https://api.github.com/users/maazshaikh2079/followers",
  "following_url": "https://api.github.com/users/maazshaikh2079/following{/other_user}",
  "gists_url": "https://api.github.com/users/maazshaikh2079/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/maazshaikh2079/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/maazshaikh2079/subscriptions",
  "organizations_url": "https://api.github.com/users/maazshaikh2079/orgs",
  "repos_url": "https://api.github.com/users/maazshaikh2079/repos",
  "events_url": "https://api.github.com/users/maazshaikh2079/events{/privacy}",
  "received_events_url": "https://api.github.com/users/maazshaikh2079/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 26,
  "public_gists": 0,
  "followers": 9,
  "following": 21,
  "created_at": "2023-02-05T06:24:25Z",
  "updated_at": "2025-06-12T14:35:36Z"
}

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Correct path to serve static files from '../public'
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/contact', (req, res) => {
    res.send(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/output.css" rel="stylesheet">
        <title>Contact</title>
    </head>
    <body>
        <div class="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
            <h1 class="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Contact <span class="underline underline-offset-4 decoration-1 under font-light">With Us</span>
            </h1>
            <p class="text-center text-gray-500 mb-12 max-w-80 mx-auto">
                Ready to Make a Move? Let’s Build Your Future Together
            </p>
            <form class="max-w-2xl mx-auto text-gray-600 pt-8">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 text-left">
                        Your Name
                        <input type="text" name="Name" placeholder="Your Name" required
                            class="w-full border border-gray-300 rounded py-3 px-4 mt-2" />
                    </div>
                    <div class="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input type="email" name="Email" placeholder="Your Email" required
                            class="w-full border border-gray-300 rounded py-3 px-4 mt-2" />
                    </div>
                </div>
                <div class="my-6 text-left">
                    Message
                    <textarea name="Message" placeholder="Message" required
                        class="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"></textarea>
                </div>
                <button class="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
                    Send Message
                </button>
            </form>
        </div>
    </body>
    `);
});

app.get('/user', (req, res) => {
    res.json(githubData)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
