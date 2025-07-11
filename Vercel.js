{
“version”: 2,
“name”: “wheel-of-fortune-training”,
“builds”: [
{
“src”: “index.html”,
“use”: “@vercel/static”
}
],
“routes”: [
{
“src”: “/(.*)”,
“dest”: “/index.html”
}
],
“headers”: [
{
“source”: “/(.*)”,
“headers”: [
{
“key”: “X-Content-Type-Options”,
“value”: “nosniff”
},
{
“key”: “X-Frame-Options”,
“value”: “DENY”
},
{
“key”: “X-XSS-Protection”,
“value”: “1; mode=block”
},
{
“key”: “Referrer-Policy”,
“value”: “strict-origin-when-cross-origin”
},
{
“key”: “Content-Security-Policy”,
“value”: “default-src ‘self’ ‘unsafe-inline’ ‘unsafe-eval’ https://unpkg.com https://cdn.tailwindcss.com; script-src ‘self’ ‘unsafe-inline’ ‘unsafe-eval’ https://unpkg.com https://cdn.tailwindcss.com”
}
]
},
{
“source”: “/(.*).html”,
“headers”: [
{
“key”: “Cache-Control”,
“value”: “public, max-age=3600”
}
]
}
]
}
