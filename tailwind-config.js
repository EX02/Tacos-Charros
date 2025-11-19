// Tailwind configuration moved out of inline HTML so CSP can block inline scripts.
window.tailwind = window.tailwind || {};
tailwind.config = {
    theme: {
        extend: {
            colors: {
                amber: {
                    50: '#fffbeb',
                    200: '#fde68a',
                    300: '#fcd34d',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                red: {
                    600: '#dc2626',
                    700: '#b91c1c',
                }
            }
        }
    }
};
