// JavaScript to inject CSS for hiding elements on small devices
window.addEventListener('load', () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: 1000px) {
        #layout-groups>div:nth-child(1), #layout-groups>div:nth-child(2) { /* Replace with your IDs */
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
});
