export function renderQuiz(container, questions, options = { direction: 'rtl' }) {
    let currentQuestion = 0;
    const isRtl = options.direction === 'rtl';
    const labels = isRtl ? {
        finish: "🎉 رائع! لقد أنهيت الاختبار",
        ready: "أنت جاهز للدرس التالي.",
        reset: "أعد الاختبار",
        question: "السؤال",
        of: "من",
        testInfo: "اختبر معلوماتك 🧠",
        correct: "✅ إجابة صحيحة، أحسنت!",
        wrong: "❌ إجابة خاطئة، حاول مرة أخرى."
    } : {
        finish: "🎉 Great! You finished the test",
        ready: "You are ready for the next lesson.",
        reset: "Reset Quiz",
        question: "Question",
        of: "of",
        testInfo: "Test your knowledge 🧠",
        correct: "✅ Correct answer, well done!",
        wrong: "❌ Wrong answer, try again."
    };
    
    // Create quiz wrapper
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `background: white; border: 1px solid var(--gray-100); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow-md); margin-bottom: 30px; direction: ${options.direction}; text-align: ${isRtl ? 'right' : 'left'};`;
    
    function drawQuestion() {
        if(currentQuestion >= questions.length) {
            wrapper.innerHTML = `
                <div style="text-align: center; color: var(--primary-dark);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 15px;">${labels.finish}</h3>
                    <p style="color: var(--gray-800); font-size: 1.1rem;">${labels.ready}</p>
                    <button id="reset-quiz" style="margin-top:20px; background: var(--primary); color: white; padding: 12px 25px; border: none; border-radius: var(--radius); font-size: 1.1rem; cursor: pointer; font-weight: bold;">${labels.reset}</button>
                </div>
            `;
            wrapper.querySelector('#reset-quiz').addEventListener('click', () => {
                currentQuestion = 0;
                drawQuestion();
            });
            return;
        }

        const q = questions[currentQuestion];
        wrapper.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; color: var(--gray-800); font-weight: bold; flex-direction: ${isRtl ? 'row' : 'row-reverse'};">
                <span style="color: var(--primary);">${labels.testInfo}</span>
                <span>${labels.question} ${currentQuestion + 1} ${labels.of} ${questions.length}</span>
            </div>
            <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--gray-900); line-height: 1.6;">${q.question}</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;" id="options-container">
                ${q.options.map((opt, index) => `
                    <button class="quiz-option" data-idx="${index}" style="
                        text-align: ${isRtl ? 'right' : 'left'};
                        padding: 15px 20px;
                        background: var(--white);
                        border: 2px solid var(--gray-100);
                        border-radius: 8px;
                        font-family: inherit;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.2s;
                        color: var(--gray-900);
                    ">${opt}</button>
                `).join('')}
            </div>
            <div id="feedback" style="margin-top: 20px; font-weight: bold; min-height: 24px;"></div>
        `;

        wrapper.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedIdx = parseInt(e.target.dataset.idx);
                const isCorrect = selectedIdx === q.correct;
                const feedback = wrapper.querySelector('#feedback');
                
                // Disable all buttons
                wrapper.querySelectorAll('.quiz-option').forEach(b => {
                    b.disabled = true;
                    b.style.cursor = 'default';
                });

                if(isCorrect) {
                  e.target.style.background = '#dcfce7'; 
                  e.target.style.borderColor = '#22c55e';
                  feedback.style.color = '#15803d';
                  feedback.innerText = labels.correct;
                  
                  setTimeout(() => {
                      currentQuestion++;
                      drawQuestion();
                  }, 1500);
                } else {
                  e.target.style.background = '#fee2e2'; 
                  e.target.style.borderColor = '#ef4444';
                  feedback.style.color = '#b91c1c';
                  feedback.innerText = labels.wrong;
                  
                  setTimeout(() => {
                      // re-enable
                      wrapper.querySelectorAll('.quiz-option').forEach(b => {
                          b.disabled = false;
                          b.style.cursor = 'pointer';
                          b.style.background = 'var(--white)';
                          b.style.borderColor = 'var(--gray-100)';
                      });
                      feedback.innerText = '';
                  }, 2000);
                }
            });
            
            btn.addEventListener('mouseenter', (e) => {
                if(!e.target.disabled) {
                    e.target.style.background = 'var(--primary-light)';
                    e.target.style.borderColor = 'var(--primary)';
                }
            });
            btn.addEventListener('mouseleave', (e) => {
                if(!e.target.disabled && e.target.style.borderColor !== '#22c55e' && e.target.style.borderColor !== '#ef4444') {
                    e.target.style.background = 'var(--white)';
                    e.target.style.borderColor = 'var(--gray-100)';
                }
            });
        });
    }

    drawQuestion();
    container.appendChild(wrapper);
}
