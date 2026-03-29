export function renderCourseGeo(container) {
    container.innerHTML = `
        <div class="container fade-in" style="padding: 30px 0; height: calc(100vh - 70px); display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <button data-route="home" class="btn-back" style="background: none; border: none; color: var(--primary); cursor: pointer; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; font-family: inherit; width: fit-content;">
                    <span style="font-size: 1.4rem;">&rarr;</span> العودة للكورسات
                </button>
                <button id="btn-fullscreen" class="btn-primary" style="padding: 8px 20px; font-size: 1rem; border-radius: 12px; display: flex; align-items: center; gap: 8px; background: white; color: var(--primary); border: 2px solid var(--primary); box-shadow: none;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                    <span>شاشة كاملة</span>
                </button>
            </div>
            <div id="course-frame-container" style="background: white; border-radius: var(--radius); box-shadow: var(--shadow-sm); border: 1px solid var(--gray-100); flex: 1; overflow: hidden; position: relative;">
                <iframe style="overflow-x: hidden; position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://my.coursebox.ai/courses/223485/about" frameborder="0" allowfullscreen></iframe>
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
            courseContainer.style.borderRadius = 'var(--radius)';
        }
    });
}
