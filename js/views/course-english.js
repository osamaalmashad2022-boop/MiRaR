export function renderCourseEnglish(container) {
    const dashboardHTML = `
        <div class="container fade-in" style="padding: 40px 0; max-width: 1400px; padding-bottom: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 2px solid rgba(225, 29, 72, 0.1); padding-bottom: 20px;">
                <div>
                    <h1 style="font-size: 2.8rem; font-weight: 900; margin-bottom: 10px;" class="text-gradient gradient-pink">English - Connect 2</h1>
                    <p style="color: var(--gray-600); font-size: 1.1rem; font-weight: 600;">لوحة تحكم المسار التعليمي</p>
                </div>
                <button data-route="home" class="btn-primary" style="padding: 12px 30px; font-size: 1.1rem; border-radius: 15px; display: inline-flex; background: white; color: #e11d48; border: 2px solid #e11d48; box-shadow: none;">
                    <span style="font-size: 1.4rem; margin-left: 10px;">&rarr;</span> العودة للرئيسية
                </button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 40px;">
                
                <div class="glass-card" style="padding: 30px; border-radius: 20px; border-right: 5px solid #e11d48; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; background: linear-gradient(90deg, #fff1f2 0%, #ffffff 100%);">
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div style="width: 70px; height: 70px; background: rgba(225, 29, 72, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">📝</div>
                        <div>
                            <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--gray-900); margin-bottom: 5px;">الاختبار القبلي المبدئي</h2>
                            <p style="color: var(--gray-600); margin: 0; font-weight: 600;">قم بتحديد مستوى معرفتك قبل البدء في دراسة الوحدات</p>
                        </div>
                    </div>
                    <button class="course-btn" style="--c-color: #e11d48; min-width: 200px; text-align: center;">دخول الاختبار <span style="font-size: 1.2rem; margin-right: 8px;">&larr;</span></button>
                </div>

                <div>
                    <h2 style="font-size: 2rem; color: var(--gray-800); font-weight: 800; margin-bottom: 25px; display: flex; align-items: center; gap: 10px;">
                        <span style="color: #e11d48;">📚</span> وحدات المنهج
                    </h2>
                    
                    <div class="courses-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                        
                        <!-- Unit 1 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(225, 29, 72, 0.4); box-shadow: 0 10px 25px rgba(225,29,72,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_eng_greetings_cover.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #be185d; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Unit 1</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">Classroom Greetings</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">Learn how to greet your friends and teacher in the classroom correctly and confidently.</p>
                                <button id="btn-open-unit-1" class="course-btn" style="--c-color: #e11d48; width: 100%;">
                                    <span>Start Learning</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 2 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(217, 70, 239, 0.4); box-shadow: 0 10px 25px rgba(217,70,239,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_eng_colors_shapes_cover.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #a21caf; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Unit 2</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">Colors and Shapes</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">Discover the vibrant world of colors and basic shapes around you in English.</p>
                                <button id="btn-open-unit-2" class="course-btn" style="--c-color: #d946ef; width: 100%;">
                                    <span>Start Learning</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 3 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(16, 185, 129, 0.4); box-shadow: 0 10px 25px rgba(16,185,129,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_eng_routines_cover.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #059669; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Unit 3</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">Actions & Routines</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">Learn common classroom actions and daily routines to communicate effectively in English.</p>
                                <button id="btn-open-unit-3" class="course-btn" style="--c-color: #059669; width: 100%;">
                                    <span>Start Learning</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 4 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(251, 191, 36, 0.4); box-shadow: 0 10px 25px rgba(251,191,36,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_eng_family_cover.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #d97706; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Unit 4</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">My Family</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">Meet your family members and learn how to introduce them to others in English.</p>
                                <button id="btn-open-unit-4" class="course-btn" style="--c-color: #f59e0b; width: 100%;">
                                    <span>Start Learning</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 5 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(14, 165, 233, 0.4); box-shadow: 0 10px 25px rgba(14,165,233,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_eng_home_cover.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #0369a1; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Unit 5</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">My Home</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">Explore the different parts of a house and learn to describe your own home in English.</p>
                                <button id="btn-open-unit-5" class="course-btn" style="--c-color: #0ea5e9; width: 100%;">
                                    <span>Start Learning</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 6 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(139, 92, 246, 0.4); box-shadow: 0 10px 25px rgba(139,92,246,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_eng_rooms_cover.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #6d28d9; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Unit 6</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">Rooms at Home</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">Let's explore each room at home together and learn what we do in them in English.</p>
                                <button id="btn-open-unit-6" class="course-btn" style="--c-color: #8b5cf6; width: 100%;">
                                    <span>Start Learning</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="glass-card" style="padding: 30px; border-radius: 20px; border-right: 5px solid #10b981; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; background: linear-gradient(90deg, #ecfdf5 0%, #ffffff 100%); margin-top: 20px;">
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div style="width: 70px; height: 70px; background: rgba(16, 185, 129, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">🏆</div>
                        <div>
                            <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--gray-900); margin-bottom: 5px;">الاختبار البعدي النهائي</h2>
                            <p style="color: var(--gray-600); margin: 0; font-weight: 600;">قم باختبار معلوماتك بعد الانتهاء من دراسة جميع الوحدات للحصول على التقييم</p>
                        </div>
                    </div>
                    <button class="course-btn" style="--c-color: #10b981; min-width: 200px; text-align: center;">دخول الاختبار <span style="font-size: 1.2rem; margin-right: 8px;">&larr;</span></button>
                </div>

            </div>

            <style>
                .course-btn {
                    background: transparent;
                    color: var(--c-color);
                    border: 2px solid var(--c-color);
                    padding: 12px 20px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 1.05rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-family: inherit;
                }
                .course-btn:hover:not(:disabled) {
                    background: var(--c-color);
                    color: white;
                    box-shadow: 0 8px 15px -3px var(--c-color);
                    transform: translateY(-2px);
                }
                .unit-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .unit-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                }
            </style>
        </div>
    `;

    const unit1Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/htrf-tsmym-ldwrt-ltdryby-whykl-lmhtw-lt-lymy-bhtrfy-778423" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit2Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-course-content-organization-and-lesson-structuring-6f37f4" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit3Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-course-content-organization-and-lesson-structuring-64dabc" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit4Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-professional-course-structuring-and-lesson-design-955524" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit5Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/strategic-course-design-organizing-content-into-effective-lessons-279bbe" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit6Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-professional-course-structuring-and-content-organization-01249e" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;

    function renderUnitView(unitTitle, unitCodeHTML) {
        container.innerHTML = `
            <div class="container fade-in" style="padding: 20px 0; max-width: 1400px; height: 100vh; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 15px 25px; background: white; border-radius: 15px; box-shadow: var(--shadow-sm); border: 1px solid rgba(225, 29, 72, 0.2);">
                    <h2 style="margin: 0; font-size: 1.5rem; font-weight: 800; color: #e11d48; display: flex; align-items: center; gap: 10px;">
                        <span>📚</span> ${unitTitle}
                    </h2>
                    <div style="display: flex; gap: 15px;">
                        <button id="btn-fullscreen-unit" class="btn-primary" style="padding: 10px 20px; font-size: 1rem; border-radius: 12px; display: inline-flex; align-items: center; background: white; color: var(--primary); border: 1px solid var(--primary); box-shadow: none;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                            <span>Full Screen</span>
                        </button>
                        <button id="btn-back-to-dash" class="btn-primary" style="padding: 10px 20px; font-size: 1rem; border-radius: 12px; display: inline-flex; background: #e11d48; color: white; border: none;">
                            <span>&rarr;</span> <span style="margin-right: 8px;">Back to Dashboard</span>
                        </button>
                    </div>
                </div>
                
                <div id="unit-content-wrapper" class="glass-card" style="flex: 1; border-radius: 20px; overflow: hidden; background: white; border: 1px solid rgba(225, 29, 72, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative; display: flex; flex-direction: column;">
                    <div style="width: 100%; height: 100%; position: relative;">
                        ${unitCodeHTML.replace('padding-top: 100%', 'height: 100%')}
                    </div>
                </div>
            </div>
        `;

        const wrapper = container.querySelector('#unit-content-wrapper');
        const embeddedScripts = wrapper.querySelectorAll('script');
        embeddedScripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });

        container.querySelector('#btn-back-to-dash').addEventListener('click', () => {
            initDashboard();
        });

        const fullscreenBtn = container.querySelector('#btn-fullscreen-unit');
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                wrapper.requestFullscreen().catch(err => console.error(err));
            } else {
                document.exitFullscreen();
            }
        });

        wrapper.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                wrapper.style.borderRadius = '0';
            } else {
                wrapper.style.borderRadius = '20px';
            }
        });
    }

    function initDashboard() {
        container.innerHTML = dashboardHTML;
        
        const btnOpenUnit = container.querySelector('#btn-open-unit-1');
        if(btnOpenUnit) {
            btnOpenUnit.addEventListener('click', () => {
                renderUnitView("Unit 1: Classroom Greetings", unit1Code);
            });
        }

        const btnOpenUnit2 = container.querySelector('#btn-open-unit-2');
        if(btnOpenUnit2) {
            btnOpenUnit2.addEventListener('click', () => {
                renderUnitView("Unit 2: Colors and Shapes", unit2Code);
            });
        }

        const btnOpenUnit3 = container.querySelector('#btn-open-unit-3');
        if(btnOpenUnit3) {
            btnOpenUnit3.addEventListener('click', () => {
                renderUnitView("Unit 3: Classroom Actions & Routines", unit3Code);
            });
        }

        const btnOpenUnit4 = container.querySelector('#btn-open-unit-4');
        if(btnOpenUnit4) {
            btnOpenUnit4.addEventListener('click', () => {
                renderUnitView("Unit 4: My Family", unit4Code);
            });
        }

        const btnOpenUnit5 = container.querySelector('#btn-open-unit-5');
        if(btnOpenUnit5) {
            btnOpenUnit5.addEventListener('click', () => {
                renderUnitView("Unit 5: My Home", unit5Code);
            });
        }

        const btnOpenUnit6 = container.querySelector('#btn-open-unit-6');
        if(btnOpenUnit6) {
            btnOpenUnit6.addEventListener('click', () => {
                renderUnitView("Unit 6: Rooms at Home", unit6Code);
            });
        }
    }

    initDashboard();
}
