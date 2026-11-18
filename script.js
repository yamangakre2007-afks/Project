document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.highlight').style.color = randomColor;
});