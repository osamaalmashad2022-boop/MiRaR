export function renderLogin(container) {
    const loginHTML = `
        <div class="login-wrapper fade-in">
            <div class="login-container glass-card delay-1">
                <div class="login-header">
                    <img src="assets/images/logo-icon.png" alt="MiRaR" class="login-logo logoSpinIn">
                    <h2 class="text-gradient gradient-blue" id="auth-title">مرحباً بك مجدداً</h2>
                    <p id="auth-subtitle">قم بتسجيل الدخول للوصول إلى كورساتك ومتابعة تقدمك</p>
                </div>

                <div class="auth-toggle-container fade-in delay-2">
                    <div class="auth-toggle">
                        <input type="radio" name="auth-type" id="login-tab" value="login" checked>
                        <label for="login-tab">تسجيل الدخول</label>
                        
                        <input type="radio" name="auth-type" id="register-tab" value="register">
                        <label for="register-tab">حساب جديد</label>
                        
                        <div class="toggle-slider"></div>
                    </div>
                </div>

                <form class="login-form">
                    <div class="input-group fade-in delay-2">
                        <i class="input-icon">👤</i>
                        <input type="text" id="username" required placeholder=" " autocomplete="off" dir="ltr">
                        <label for="username">اسم المستخدم</label>
                        <div class="input-glow"></div>
                    </div>

                    <div class="input-group fade-in delay-2 register-only" style="display: none;">
                        <i class="input-icon">✉️</i>
                        <input type="email" id="email" placeholder=" " autocomplete="off" dir="ltr">
                        <label for="email">البريد الإلكتروني</label>
                        <div class="input-glow"></div>
                    </div>

                    <div class="input-group fade-in delay-3">
                        <i class="input-icon">🔒</i>
                        <input type="password" id="password" required placeholder=" " autocomplete="new-password" dir="ltr">
                        <label for="password">كلمة المرور</label>
                        <div class="input-glow"></div>
                        <button type="button" class="toggle-password" title="عرض كلمة المرور">👁️</button>
                    </div>

                    <div class="form-options fade-in delay-3 login-only">
                        <label class="remember-me">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                            تذكرني
                        </label>
                        <a href="#" class="forgot-password">نسيت كلمة المرور؟</a>
                    </div>

                    <button type="submit" class="btn-primary login-submit fade-in delay-3" id="auth-submit-btn">
                        <span>تسجيل الدخول</span>
                        <div class="btn-glow"></div>
                    </button>
                </form>
            </div>
        </div>
    `;

    container.innerHTML = loginHTML;

    // Attach Interactivity
    const form = container.querySelector('.login-form');
    const togglePassword = container.querySelector('.toggle-password');
    const passwordInput = container.querySelector('#password');
    
    // Toggle Logic
    const authRadios = container.querySelectorAll('input[name="auth-type"]');
    const registerOnlyFields = container.querySelectorAll('.register-only');
    const loginOnlyFields = container.querySelectorAll('.login-only');
    const authTitle = container.querySelector('#auth-title');
    const authSubtitle = container.querySelector('#auth-subtitle');
    const submitBtnText = container.querySelector('#auth-submit-btn span');
    const emailInput = container.querySelector('#email');

    authRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const isLogin = e.target.value === 'login';
            
            if (isLogin) {
                authTitle.textContent = 'مرحباً بك مجدداً';
                authSubtitle.textContent = 'قم بتسجيل الدخول للوصول إلى كورساتك ومتابعة تقدمك';
                submitBtnText.textContent = 'تسجيل الدخول';
                
                // Hide register fields, show login fields
                registerOnlyFields.forEach(el => {
                    el.style.display = 'none';
                    el.classList.remove('fade-in');
                });
                loginOnlyFields.forEach(el => {
                    el.style.display = 'flex';
                    // Trigger reflow to restart animation
                    void el.offsetWidth;
                    el.classList.add('fade-in');
                });
                emailInput.removeAttribute('required');
            } else {
                authTitle.textContent = 'إنشاء حساب جديد';
                authSubtitle.textContent = 'انضم إلينا الآن للبدء في رحلة التعلم الخاصة بك';
                submitBtnText.textContent = 'إنشاء حساب';
                
                // Hide login fields, show register fields
                loginOnlyFields.forEach(el => {
                    el.style.display = 'none';
                    el.classList.remove('fade-in');
                });
                registerOnlyFields.forEach(el => {
                    el.style.display = 'block';
                    // Trigger reflow to restart animation
                    void el.offsetWidth;
                    el.classList.add('fade-in');
                });
                emailInput.setAttribute('required', 'required');
            }
        });
    });

    // Toggle Password Visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        togglePassword.classList.toggle('active');
    });

    // Form submission animation simulation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = container.querySelector('.login-submit');
        const isLogin = container.querySelector('input[name="auth-type"]:checked').value === 'login';
        
        const usernameVal = container.querySelector('#username').value.trim();
        const passwordVal = container.querySelector('#password').value;
        const originalText = submitBtnText.textContent;
        
        submitBtn.innerHTML = '<div class="loader-small"></div> جاري التحقق...';
        submitBtn.style.opacity = '0.9';
        submitBtn.style.pointerEvents = 'none';

        // Simulate network request
        setTimeout(() => {
            if (isLogin) {
                // Hardcoded authentication check
                if (usernameVal === 'rawan' && passwordVal === '123') {
                    submitBtn.innerHTML = '✅ تم تسجيل الدخول بنجاح';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    submitBtn.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.4)';
                    
                    // Redirect to home or dashboard after success
                    setTimeout(() => {
                        const routeEvent = new Event('click', { bubbles: true });
                        const homeLink = document.createElement('a');
                        homeLink.dataset.route = 'home';
                        document.body.appendChild(homeLink);
                        homeLink.dispatchEvent(routeEvent);
                        homeLink.remove();
                    }, 1000);
                } else {
                    submitBtn.innerHTML = '❌ بيانات الدخول غير صحيحة';
                    submitBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                    submitBtn.style.boxShadow = '0 10px 25px rgba(239, 68, 68, 0.4)';
                    
                    // Reset button after error
                    setTimeout(() => {
                        submitBtn.innerHTML = `<span>${originalText}</span><div class="btn-glow"></div>`;
                        submitBtn.style.background = '';
                        submitBtn.style.boxShadow = '';
                        submitBtn.style.opacity = '1';
                        submitBtn.style.pointerEvents = 'auto';
                    }, 2000);
                }
            } else {
                // Registration simulation
                submitBtn.innerHTML = '✅ تم إنشاء الحساب بنجاح';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                submitBtn.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.4)';
                
                setTimeout(() => {
                    const routeEvent = new Event('click', { bubbles: true });
                    const homeLink = document.createElement('a');
                    homeLink.dataset.route = 'home';
                    document.body.appendChild(homeLink);
                    homeLink.dispatchEvent(routeEvent);
                    homeLink.remove();
                }, 1000);
            }
        }, 1200);
    });
}
