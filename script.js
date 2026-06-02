function navigateTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🔒';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

function toggleAccordion(itemId) {
    const targetItem = document.getElementById(itemId);
    const isOpen = targetItem.classList.contains('open');
    
    if (targetItem.parentNode.classList.contains('help-layout') || targetItem.parentNode.classList.contains('settings-layout')) {
        targetItem.parentNode.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('open');
        });
    }

    if (!isOpen) {
        targetItem.classList.add('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        navigateTo('screen-register'); 
    }, 2500);

    const codeInputs = document.querySelectorAll('.code-input');
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                codeInputs[index - 1].focus();
            }
        });
    });
});