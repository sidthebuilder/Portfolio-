const key = "AIzaSyDKnUCbM7XgW-t_Q15xz9-ak6xe_uElRY0";
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

import('node-fetch').then(({ default: fetch }) => {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(JSON.stringify(data, null, 2)))
        .catch(err => console.error(err));
}).catch(err => {
    // Fallback if node-fetch is not available (using native fetch in newer node)
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(JSON.stringify(data, null, 2)))
        .catch(e => console.error(e));
});
