export function renderTimeline(container) {
    container.innerHTML = `
        <section class="fade-in" style="padding: 100px 20px 80px; max-width: 1000px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 50px;">
                <h2 style="font-size: 2.8rem; color: var(--gray-900); font-weight: 900; display: inline-block; position: relative;">
                    الخريطة الزمنية
                    <div style="position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); width: 80px; height: 6px; background: linear-gradient(90deg, var(--primary), var(--secondary)); border-radius: 10px;"></div>
                </h2>
                <p style="margin-top: 20px; font-size: 1.2rem; color: var(--gray-700); font-weight: 600;">(مدة التنفيذ: 10 أسابيع)</p>
            </div>

            <div class="timeline-container">
                <!-- المرحلة الأولى -->
                <div class="timeline-card glass-card delay-1">
                    <div class="timeline-header" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                        <h3>🟢 المرحلة الأولى: التخطيط والتحليل</h3>
                        <span class="timeline-date">أسبوع 1 – 2</span>
                    </div>
                    <div class="timeline-body">
                        <table class="timeline-table">
                            <tr><th>الأسبوع</th><th>المهام</th></tr>
                            <tr><td>1</td><td>تحليل محتوى المقررات الثلاثة وتحديد الوحدات المستهدفة</td></tr>
                            <tr><td>2</td><td>تحديد الأهداف السلوكية + كتابة سيناريو البرمجية (Storyboard)</td></tr>
                        </table>
                        <div class="timeline-outputs">
                            <h4>المخرجات:</h4>
                            <ul>
                                <li>تحليل محتوى مكتوب</li>
                                <li>قائمة أهداف تعليمية</li>
                                <li>تصور مبدئي للموقع</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- المرحلة الثانية -->
                <div class="timeline-card glass-card delay-2">
                    <div class="timeline-header" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                        <h3>🟡 المرحلة الثانية: التصميم التعليمي</h3>
                        <span class="timeline-date">أسبوع 3 – 4</span>
                    </div>
                    <div class="timeline-body">
                        <table class="timeline-table">
                            <tr><th>الأسبوع</th><th>المهام</th></tr>
                            <tr><td>3</td><td>تصميم واجهات الموقع (Wireframe)</td></tr>
                            <tr><td>4</td><td>إعداد الأنشطة والأسئلة لكل مقرر</td></tr>
                        </table>
                        <div class="timeline-outputs">
                            <h4>المخرجات:</h4>
                            <ul>
                                <li>تصميم مبدئي للواجهة</li>
                                <li>إعداد بنك أسئلة لكل مادة</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- المرحلة الثالثة -->
                <div class="timeline-card glass-card delay-3">
                    <div class="timeline-header" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);">
                        <h3>🔵 المرحلة الثالثة: التنفيذ البرمجي</h3>
                        <span class="timeline-date">أسبوع 5 – 8</span>
                    </div>
                    <div class="timeline-body">
                        <table class="timeline-table">
                            <tr><th>الأسبوع</th><th>المهام</th></tr>
                            <tr><td>5</td><td>إنشاء هيكل الموقع (HTML/CSS)</td></tr>
                            <tr><td>6</td><td>إضافة التفاعل والاختبارات (JavaScript)</td></tr>
                            <tr><td>7</td><td>إدخال محتوى 2 ابتدائي انجليزي</td></tr>
                            <tr><td>8</td><td>إدخال محتوى 2 إعدادي عربي + 1 ثانوي جغرافيا</td></tr>
                        </table>
                        <div class="timeline-outputs">
                            <h4>المخرجات:</h4>
                            <ul>
                                <li>موقع تعليمي كامل يعمل</li>
                                <li>اختبارات تفاعلية</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- المرحلة الرابعة -->
                <div class="timeline-card glass-card delay-4">
                    <div class="timeline-header" style="background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);">
                        <h3>🟣 المرحلة الرابعة: التجريب والتقويم</h3>
                        <span class="timeline-date">أسبوع 9</span>
                    </div>
                    <div class="timeline-body">
                        <div class="timeline-tasks">
                            <h4>المهام:</h4>
                            <ul>
                                <li>تجربة الموقع على عينة طلاب</li>
                                <li>جمع الملاحظات</li>
                                <li>تعديل الأخطاء</li>
                            </ul>
                        </div>
                        <div class="timeline-outputs">
                            <h4>المخرجات:</h4>
                            <ul>
                                <li>استمارة تقييم</li>
                                <li>نسخة محسنة من الموقع</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .timeline-container {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
                .timeline-card {
                    overflow: hidden;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                }
                .timeline-header {
                    padding: 20px 30px;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                }
                .timeline-header h3 {
                    margin: 0;
                    font-size: 1.5rem;
                    font-weight: 800;
                }
                .timeline-date {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-weight: bold;
                    backdrop-filter: blur(5px);
                }
                .timeline-body {
                    padding: 30px;
                    background: rgba(255, 255, 255, 0.6);
                }
                .timeline-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                .timeline-table th, .timeline-table td {
                    padding: 12px 15px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    text-align: right;
                }
                .timeline-table th {
                    background: rgba(0, 0, 0, 0.02);
                    font-weight: 800;
                    color: var(--gray-800);
                }
                .timeline-table td {
                    font-weight: 600;
                    color: var(--gray-700);
                }
                .timeline-outputs h4, .timeline-tasks h4 {
                    margin-bottom: 10px;
                    color: var(--gray-900);
                    font-weight: 800;
                }
                .timeline-outputs ul, .timeline-tasks ul {
                    list-style-type: disc;
                    margin-right: 20px;
                    color: var(--gray-700);
                    font-weight: 600;
                    line-height: 1.6;
                }
                .timeline-outputs ul li, .timeline-tasks ul li {
                    margin-bottom: 5px;
                }
                .timeline-tasks {
                    margin-bottom: 20px;
                }
            </style>
        </section>
    `;
}
