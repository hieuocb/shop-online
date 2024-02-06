(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        console.log('dark');
    } else {
        document.documentElement.classList.remove('dark');
        console.log('light');
    }
})()

function changeTheme() {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
    } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    }
    
    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark'
    
    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
}