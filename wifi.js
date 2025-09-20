        // Create background elements
        function createBackground() {
            const container = document.getElementById('bgElements');
            for (let i = 0; i < 15; i++) {
                const size = Math.random() * 200 + 50;
                const el = document.createElement('div');
                el.classList.add('bg-element');
                el.style.width = `${size}px`;
                el.style.height = `${size}px`;
                el.style.left = `${Math.random() * 100}%`;
                el.style.top = `${Math.random() * 100 + 100}%`;
                el.style.animationDuration = `${Math.random() * 20 + 10}s`;
                container.appendChild(el);
            }
        }

        // Toggle password visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        }

        // Login function
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const btn = document.getElementById('loginBtn');
            const status = document.getElementById('statusMessage');
            
            if (!username || !password) {
                status.className = 'status error';
                status.textContent = 'Please enter both username and password';
                return;
            }
            
            // Simulate loading
            btn.classList.add('loading');
            status.className = 'status';
            status.textContent = '';
            
            setTimeout(() => {
                btn.classList.remove('loading');
                
                // Simulate random success/failure
                const isSuccess = Math.random() > 0.2;
                
                if (isSuccess) {
                    status.className = 'status success';
                    status.textContent = 'Connected successfully! Redirecting...';
                    btn.textContent = 'CONNECTED';
                    btn.style.background = '#388E3C';
                    
                    // Simulate redirect after 2 seconds
                    setTimeout(() => {
                        alert(`Welcome ${username}! You are now connected.`);
                    }, 2000);
                } else {
                    status.className = 'status error';
                    status.textContent = 'Invalid credentials. Please try again.';
                    btn.textContent = 'RETRY';
                }
            }, 1500);
        }

        // Initialize background on load
        window.onload = function() {
            createBackground();
            
            // Add subtle floating animation to container
            const container = document.querySelector('.wifi-container');
            container.style.animation = 'float 6s ease-in-out infinite';
        }