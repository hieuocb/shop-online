import '../css/style.css';

(() => {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        console.log('dark');
        //document.getElementById('change-theme').textContent = 'light';
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        console.log('light');
        //document.getElementById('change-theme').textContent = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>';
        themeToggleDarkIcon.classList.remove('hidden');
    }
})()

document.getElementById('change-theme').addEventListener("click", function(event) {
    event.preventDefault();
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');     
        //this.textContent = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>';
    } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        //this.textContent = 'light';
    }
})

// function changeTheme() {
//     if (localStorage.theme === 'dark') {
//         localStorage.theme = 'light';
//         document.documentElement.classList.remove('dark');
//     } else {
//         localStorage.theme = 'dark';
//         document.documentElement.classList.add('dark');
//     }
    
//     // // Whenever the user explicitly chooses dark mode
//     // localStorage.theme = 'dark'
    
//     // // Whenever the user explicitly chooses to respect the OS preference
//     // localStorage.removeItem('theme')
// }