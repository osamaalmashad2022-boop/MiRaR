export function renderCourseEnglish(container) {
    container.innerHTML = `
        <div class="container fade-in" style="padding: 40px 0; max-width: 1400px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                <button data-route="home" class="btn-primary" style="padding: 12px 30px; font-size: 1.1rem; border-radius: 15px; display: inline-flex;">
                    <span style="font-size: 1.4rem; margin-left: 10px;">&rarr;</span> العودة للرئيسية
                </button>
                <button id="btn-fullscreen" class="btn-primary" style="padding: 12px 30px; font-size: 1.1rem; border-radius: 15px; display: inline-flex; align-items: center; background: white; color: var(--primary); border: 2px solid var(--primary); box-shadow: none;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                    <span>شاشة كاملة</span>
                </button>
            </div>
            <div class="glass-card" style="padding: 15px; border-radius: 24px; height: calc(100vh - 250px); display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(225, 29, 72, 0.3); box-shadow: 0 15px 35px rgba(225, 29, 72, 0.15); background: rgba(255, 255, 255, 0.8);">
                <div id="course-frame-container" style="width: 100%; height: 100%; border-radius: 16px; overflow: hidden; background: white;">
                    <iframe style="width: 100%; height: 100%;" src="https://my.coursebox.ai/courses/223502/about" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    `;

    const fullscreenBtn = container.querySelector('#btn-fullscreen');
    const courseContainer = container.querySelector('#course-frame-container');

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            courseContainer.requestFullscreen().catch(err => {
                console.error("Error attempting to enable fullscreen:", err);
            });
        } else {
            document.exitFullscreen();
        }
    });

    courseContainer.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            courseContainer.style.borderRadius = '0';
        } else {
            courseContainer.style.borderRadius = '16px';
        }
    });
}
