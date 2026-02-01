const key = "AIzaSyDKnUCbM7XgW-t_Q15xz9-ak6xe_uElRY0";
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;

import('node-fetch').then(({ default: fetch }) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.models) {
                data.models.forEach(m => console.log(m.name));
            } else {
                console.log("No models found or error:", data);
            }
        })
        .catch(err => console.error(err));
}).catch(err => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.models) {
                data.models.forEach(m => console.log(m.name));
            } else {
                console.log("No models found or error:", data);
            }
        })
        .catch(e => console.error(e));
});
