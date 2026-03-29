export function renderHome(container) {
    container.innerHTML = `
        <section class="hero fade-in" style="text-align: center; padding: 120px 20px 80px; position: relative; overflow: hidden; z-index: 1;">
            
            <div style="display: inline-block; margin-bottom: 20px; padding: 8px 20px; border-radius: 30px; font-weight: 700; color: var(--primary); font-size: 0.95rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid rgba(14, 165, 233, 0.2); background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(10px);" class="fade-in">
                🚀 أحدث منصات التعلم الإلكتروني 2026
            </div>
            
            <h1 class="fade-in delay-1" style="font-size: clamp(3rem, 6vw, 4.5rem); margin-bottom: 25px; letter-spacing: -1.5px; font-weight: 900; line-height: 1.2;">
                مرحباً بك في <span class="text-gradient gradient-blue" style="padding-bottom:10px;">MiRaR</span>
                <br>المنصة التعليمية الذكية
            </h1>
            
            <p class="fade-in delay-2" style="font-size: clamp(1.1rem, 2vw, 1.3rem); max-width: 650px; margin: 0 auto 40px; color: var(--gray-700); line-height: 1.8; font-weight: 600;">
                وجهتك الأولى للتعلم التفاعلي. نوفر لك بيئة دراسية متكاملة وممتعة بأحدث التقنيات، لتجعل رحلة تعلمك تجربة لا تُنسى.
            </p>
            
            <div class="fade-in delay-3" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <button onclick="document.getElementById('courses').scrollIntoView({behavior: 'smooth', block: 'start'})" class="btn-primary">
                    استكشف الكورسات
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg); margin-right: 8px;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>
        </section>

        <!-- Students Production Section -->
        <section class="container fade-in delay-3" style="padding: 0 20px; margin-bottom: 80px; position: relative; z-index: 10;">
            <div class="glass-card" style="padding: 40px; text-align: center; position: relative; overflow: hidden; max-width: 900px; margin: 0 auto;">
                
                <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: linear-gradient(135deg, var(--primary) 0%, transparent 100%); opacity: 0.1; border-radius: 50%; filter: blur(30px);"></div>
                <div style="position: absolute; bottom: -50px; left: -50px; width: 150px; height: 150px; background: linear-gradient(135deg, transparent 0%, var(--secondary) 100%); opacity: 0.1; border-radius: 50%; filter: blur(30px);"></div>
                
                <span style="background: rgba(14, 165, 233, 0.15); color: var(--primary-dark); padding: 6px 16px; border-radius: 20px; font-weight: 800; font-size: 0.9rem; display: inline-block; margin-bottom: 15px; border: 1px solid rgba(14, 165, 233, 0.2);">المشروع التعليمي</span>
                
                <h2 style="font-size: 2rem; color: var(--gray-900); font-weight: 800; margin-bottom: 30px;">هذا العمل من إنتاج الطالبات المتميزات:</h2>

                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-bottom: 35px; position: relative; z-index: 1;">
                    <div class="student-pill">منة محمد الكفافي</div>
                    <div class="student-pill">روفان ناصر حسن</div>
                    <div class="student-pill">روان عمرو الجندي</div>
                </div>

                <div style="text-align: center; border-top: 2px dashed rgba(203, 213, 225, 0.6); padding-top: 30px; margin: 0 auto; max-width: 600px; position: relative; z-index: 1;">
                    <h3 style="font-size: 1.2rem; color: var(--gray-700); font-weight: 700; margin-bottom: 15px;">تحت إشراف:</h3>
                    <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                        <span style="font-size: 1.3rem; font-weight: 900; color: var(--primary-dark); background: rgba(255,255,255,0.7); padding: 8px 25px; border-radius: 15px; box-shadow: var(--shadow-sm);">الدكتور / محمد شمة</span>
                        <span style="font-size: 1.3rem; font-weight: 900; color: var(--primary-dark); background: rgba(255,255,255,0.7); padding: 8px 25px; border-radius: 15px; box-shadow: var(--shadow-sm);">الدكتورة / غادة متولي</span>
                    </div>
                </div>
            </div>
            
            <style>
                .student-pill {
                    background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
                    padding: 14px 30px; 
                    border-radius: 30px; 
                    border: 1px solid rgba(255,255,255,0.8); 
                    font-weight: 800; 
                    font-size: 1.15rem; 
                    color: var(--gray-800); 
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05); 
                    transition: all 0.3s;
                    position: relative;
                    overflow: hidden;
                }
                .student-pill::before {
                    content: ''; position: absolute; top:0; left:-100%; width:50%; height:100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                    transition: all 0.5s;
                }
                .student-pill:hover {
                    transform: translateY(-3px) scale(1.03);
                    box-shadow: 0 10px 20px rgba(14, 165, 233, 0.15);
                    color: var(--primary-dark);
                    border-color: var(--primary-light);
                }
                .student-pill:hover::before {
                    left: 200%;
                }
            </style>
        </section>
        
        <section id="courses" class="container fade-in" style="padding: 40px 0 120px 0;">
            <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.8rem; color: var(--gray-900); font-weight: 900; display: inline-block; position: relative;">
                    المسارات التعليمية المتاحة
                    <div style="position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); width: 80px; height: 6px; background: linear-gradient(90deg, var(--primary), var(--secondary)); border-radius: 10px;"></div>
                </h2>
            </div>
            
            <div class="courses-grid">
                
                <!-- Course Card 1: Geography -->
                <div class="glass-card" style="display: flex; flex-direction: column; overflow: hidden; cursor: pointer; border: 1px solid rgba(14, 165, 233, 0.2);" onclick="document.querySelector('#btn-geo').click()">
                    <div style="height: 220px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <div class="course-icon-wrapper">
                            <span style="font-size: 6.5rem; filter: drop-shadow(0 15px 15px rgba(14, 165, 233, 0.3)); display: block; line-height: 1;">🌍</span>
                        </div>
                        <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); color: var(--primary-dark); padding: 8px 16px; border-radius: 30px; font-weight: 800; font-size: 0.9rem; z-index: 1; box-shadow: var(--shadow-sm); border: 1px solid rgba(255,255,255,0.5);">الصف الأول الثانوي</div>
                    </div>
                    <div style="padding: 35px; display: flex; flex-direction: column; flex: 1; background: rgba(255,255,255,0.8);">
                        <h3 style="color: var(--gray-900); font-size: 1.8rem; margin-bottom: 15px; font-weight: 900;" class="text-gradient gradient-blue">الجغرافيا</h3>
                        <p style="color: var(--gray-700); margin-bottom: 30px; font-size: 1.1rem; line-height: 1.7; flex: 1; font-weight: 600;">منهج الجغرافيا للفصل الدراسي الثاني. فهم أعمق لظواهر العالم من حولك وتوزيع السكان بأسلوب شيق.</p>
                        <button id="btn-geo" data-route="course-geo" class="course-btn" style="--c-color: var(--primary);">
                            <span>استكشاف المسار</span>
                            <span style="font-size: 1.4rem; font-weight: normal;">&larr;</span>
                        </button>
                    </div>
                </div>
                
                <!-- Course Card 2: Arabic -->
                <div class="glass-card" style="display: flex; flex-direction: column; overflow: hidden; cursor: pointer; border: 1px solid rgba(249, 115, 22, 0.2);" onclick="document.querySelector('#btn-arab').click()">
                    <div style="height: 220px; background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%); position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <div class="course-icon-wrapper">
                            <span style="font-size: 6.5rem; filter: drop-shadow(0 15px 15px rgba(249, 115, 22, 0.2)); display: block; line-height: 1;">📖</span>
                        </div>
                        <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); color: #c2410c; padding: 8px 16px; border-radius: 30px; font-weight: 800; font-size: 0.9rem; z-index: 1; box-shadow: var(--shadow-sm); border: 1px solid rgba(255,255,255,0.5);">الصف الثاني الإعدادي</div>
                    </div>
                    <div style="padding: 35px; display: flex; flex-direction: column; flex: 1; background: rgba(255,255,255,0.8);">
                        <h3 style="color: var(--gray-900); font-size: 1.8rem; margin-bottom: 15px; font-weight: 900;" class="text-gradient gradient-orange">اللغة العربية</h3>
                        <p style="color: var(--gray-700); margin-bottom: 30px; font-size: 1.1rem; line-height: 1.7; flex: 1; font-weight: 600;">نصوص، قراءة وبلاغة. عزز مهاراتك اللغوية بأسلوب سلس وجهز نفسك للتميز الأكاديمي المبدع.</p>
                        <button id="btn-arab" data-route="course-arabic" class="course-btn" style="--c-color: #ea580c;">
                            <span>استكشاف المسار</span>
                            <span style="font-size: 1.4rem; font-weight: normal;">&larr;</span>
                        </button>
                    </div>
                </div>
                
                <!-- Course Card 3: English -->
                <div class="glass-card" style="display: flex; flex-direction: column; overflow: hidden; cursor: pointer; border: 1px solid rgba(225, 29, 72, 0.2);" onclick="document.querySelector('#btn-eng').click()">
                    <div style="height: 220px; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <div class="course-icon-wrapper">
                            <span style="font-size: 6.5rem; filter: drop-shadow(0 15px 15px rgba(225, 29, 72, 0.2)); display: block; line-height: 1; transform: translateY(-5px);">🔤</span>
                        </div>
                        <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); color: #be185d; padding: 8px 16px; border-radius: 30px; font-weight: 800; font-size: 0.9rem; z-index: 1; box-shadow: var(--shadow-sm); border: 1px solid rgba(255,255,255,0.5);">الصف الثاني الابتدائي</div>
                    </div>
                    <div style="padding: 35px; display: flex; flex-direction: column; flex: 1; background: rgba(255,255,255,0.8);">
                        <h3 style="color: var(--gray-900); font-size: 1.8rem; margin-bottom: 15px; font-weight: 900;" class="text-gradient gradient-pink">English - Connect 2</h3>
                        <p style="color: var(--gray-700); margin-bottom: 30px; font-size: 1.1rem; line-height: 1.7; flex: 1; font-weight: 600;">تأسيس مذهل في اللغة الإنجليزية بطرق مبتكرة تعتمد على المرح والتفاعل لتناسب طفلك.</p>
                        <button id="btn-eng" data-route="course-english" class="course-btn" style="--c-color: #e11d48;">
                            <span>استكشاف المسار</span>
                            <span style="font-size: 1.4rem; font-weight: normal;">&larr;</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <style>
                .course-btn {
                    background: transparent;
                    color: var(--c-color);
                    border: 2px solid var(--c-color);
                    padding: 14px 25px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 1.1rem;
                    cursor: pointer;
                    width: 100%;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-family: inherit;
                }
                .glass-card:hover .course-btn {
                    background: var(--c-color);
                    color: white;
                    box-shadow: 0 10px 20px -5px var(--c-color);
                }
            </style>
        </section>
    `;

    // Reattach inline event listeners using query selector for better practice
    // (though inline is kept above for ease within the template string structure)
}
