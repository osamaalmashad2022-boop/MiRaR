export function renderCourseGeo(container) {
    const dashboardHTML = `
        <div class="container fade-in" style="padding: 40px 0; max-width: 1400px; padding-bottom: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 2px solid rgba(14, 165, 233, 0.1); padding-bottom: 20px;">
                <div>
                    <h1 style="font-size: 2.8rem; font-weight: 900; margin-bottom: 10px;" class="text-gradient gradient-blue">الجغرافيا - الصف الأول الثانوي</h1>
                    <p style="color: var(--gray-600); font-size: 1.1rem; font-weight: 600;">لوحة تحكم المسار التعليمي</p>
                </div>
                <button data-route="home" class="btn-primary" style="padding: 12px 30px; font-size: 1.1rem; border-radius: 15px; display: inline-flex; background: white; color: var(--primary); border: 2px solid var(--primary); box-shadow: none;">
                    <span style="font-size: 1.4rem; margin-left: 10px;">&rarr;</span> العودة للرئيسية
                </button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 40px;">
                
                <div class="glass-card" style="padding: 30px; border-radius: 20px; border-right: 5px solid var(--primary); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; background: linear-gradient(90deg, #f0f9ff 0%, #ffffff 100%);">
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div style="width: 70px; height: 70px; background: rgba(14, 165, 233, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">📝</div>
                        <div>
                            <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--gray-900); margin-bottom: 5px;">الاختبار القبلي المبدئي</h2>
                            <p style="color: var(--gray-600); margin: 0; font-weight: 600;">قم بتحديد مستوى معرفتك قبل البدء في دراسة الوحدات</p>
                        </div>
                    </div>
                    <button class="course-btn" style="--c-color: var(--primary); min-width: 200px; text-align: center;">دخول الاختبار <span style="font-size: 1.2rem; margin-right: 8px;">&larr;</span></button>
                </div>

                <div>
                    <h2 style="font-size: 2rem; color: var(--gray-800); font-weight: 800; margin-bottom: 25px; display: flex; align-items: center; gap: 10px;">
                        <span style="color: var(--primary);">📚</span> وحدات المنهج
                    </h2>
                    
                    <div class="courses-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                        
                        <!-- Unit 1 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(14, 165, 233, 0.4); box-shadow: 0 10px 25px rgba(14,165,233,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_geo_egypt_cover_ar.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: var(--primary-dark); padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">الوحدة الأولى</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">الموقع ومظاهر سطح مصر</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">استكشف عبقرية المكان، وفهم التضاريس والحدود الجغرافية التي شكلت شخصية مصر عبر التاريخ.</p>
                                <button id="btn-open-unit-1" class="course-btn" style="--c-color: var(--primary); width: 100%;">
                                    <span>بدء التعلم</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 2 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.4); box-shadow: 0 10px 25px rgba(59,130,246,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_geo_climate_cover_ar.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #1e40af; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">الوحدة الثانية</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.6rem; margin-bottom: 10px; font-weight: 900; line-height: 1.4;">المناخ في مصر</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">تعرف على الأقاليم المناخية في مصر، والتقلبات الجوية وتأثيرها على مختلف الأنشطة البشرية.</p>
                                <button id="btn-open-unit-2" class="course-btn" style="--c-color: #2563eb; width: 100%;">
                                    <span>بدء التعلم</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 3 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(16, 185, 129, 0.4); box-shadow: 0 10px 25px rgba(16,185,129,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_geo_population_cover_ar.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #059669; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">الوحدة الثالثة</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.5rem; margin-bottom: 15px; font-weight: 900; line-height: 1.4;">نمو و تركيب السكان فى مصر</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">فهم أعمق لخصائص المجتمع المصري، التركيب العمري والنوعي، وتوزيع السكان في مختلف المحافظات.</p>
                                <button id="btn-open-unit-3" class="course-btn" style="--c-color: #059669; width: 100%;">
                                    <span>بدء التعلم</span>
                                    <span style="font-size: 1.2rem; margin-right: 5px;">&larr;</span>
                                </button>
                            </div>
                        </div>

                        <!-- Unit 4 -->
                        <div class="glass-card unit-card" style="display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(234, 179, 8, 0.4); box-shadow: 0 10px 25px rgba(234,179,8,0.1);">
                            <div style="height: 180px; background: url('assets/images/unit_geo_economy_cover_ar.png') center/cover no-repeat; position: relative; display: flex; align-items: center; justify-content: center;">
                                <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);"></div>
                                <div style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.95); color: #a16207; padding: 6px 14px; border-radius: 20px; font-weight: 900; font-size: 0.85rem; z-index: 2; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">الوحدة الرابعة</div>
                            </div>
                            <div style="padding: 25px; display: flex; flex-direction: column; flex: 1; background: white;">
                                <h3 style="color: var(--gray-900); font-size: 1.5rem; margin-bottom: 15px; font-weight: 900; line-height: 1.4;">الأنشطة الاقتصادية في مصر</h3>
                                <p style="color: var(--gray-600); margin-bottom: 25px; line-height: 1.6; flex: 1; font-weight: 600;">نظرة شاملة على موارد مصر، الأنشطة الزراعية والصناعية والتجارية، ودورها في دفع عجلة التنمية.</p>
                                <button id="btn-open-unit-4" class="course-btn" style="--c-color: #d97706; width: 100%;">
                                    <span>بدء التعلم</span>
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

    const unit1Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/strategic-course-design-and-content-organization-ddf159" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit2Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-professional-course-design-and-content-structuring-645ec8" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit3Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-professional-course-design-and-content-organization-0e8d4c" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;
    const unit4Code = `<div id="iframe_container" style="width: 100%;position: relative;overflow: hidden;padding-top: 100%;"><iframe id="mcg" name="mcg_frame" title="Mini-Course" src="https://share.minicoursegenerator.com/mastering-course-design-from-content-to-structured-lessons-e1e576" align="center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style="position: absolute; width: 100%;height: 100%;top: 0;right: 0;bottom: 0;left: 0;border: none;margin: 0px;padding: 0px;"></iframe></div>`;

    function renderUnitView(unitTitle, unitCodeHTML) {
        container.innerHTML = `
            <div class="container fade-in" style="padding: 20px 0; max-width: 1400px; height: 100vh; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 15px 25px; background: white; border-radius: 15px; box-shadow: var(--shadow-sm); border: 1px solid rgba(14, 165, 233, 0.2);">
                    <h2 style="margin: 0; font-size: 1.5rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 10px;">
                        <span>📚</span> ${unitTitle}
                    </h2>
                    <div style="display: flex; gap: 15px;">
                        <button id="btn-fullscreen-unit" class="btn-primary" style="padding: 10px 20px; font-size: 1rem; border-radius: 12px; display: inline-flex; align-items: center; background: white; color: var(--primary); border: 1px solid var(--primary); box-shadow: none;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                            <span>شاشة كاملة</span>
                        </button>
                        <button id="btn-back-to-dash" class="btn-primary" style="padding: 10px 20px; font-size: 1rem; border-radius: 12px; display: inline-flex; background: var(--primary); color: white; border: none;">
                            <span>&rarr;</span> <span style="margin-right: 8px;">العودة للوحدات</span>
                        </button>
                    </div>
                </div>
                
                <div id="unit-content-wrapper" class="glass-card" style="flex: 1; border-radius: 20px; overflow: hidden; background: white; border: 1px solid rgba(14, 165, 233, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.05); position: relative; display: flex; flex-direction: column;">
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
                renderUnitView("الوحدة الأولى: الموقع ومظاهر سطح مصر", unit1Code);
            });
        }

        const btnOpenUnit2 = container.querySelector('#btn-open-unit-2');
        if(btnOpenUnit2) {
            btnOpenUnit2.addEventListener('click', () => {
                renderUnitView("الوحدة الثانية: المناخ في مصر", unit2Code);
            });
        }

        const btnOpenUnit3 = container.querySelector('#btn-open-unit-3');
        if(btnOpenUnit3) {
            btnOpenUnit3.addEventListener('click', () => {
                renderUnitView("الوحدة الثالثة: نمو و تركيب السكان فى مصر", unit3Code);
            });
        }

        const btnOpenUnit4 = container.querySelector('#btn-open-unit-4');
        if(btnOpenUnit4) {
            btnOpenUnit4.addEventListener('click', () => {
                renderUnitView("الوحدة الرابعة: الأنشطة الاقتصادية في مصر", unit4Code);
            });
        }
    }

    initDashboard();
}
