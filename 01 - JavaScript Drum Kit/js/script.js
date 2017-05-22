window.addEventListener('keydown', function (e) {

    const keyEl = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(keyEl !== null)
    {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
        keyEl.classList.add('playing');

        window.addEventListener('keyup', function (e) {

            const keyEl = document.querySelector(`div[data-key="${e.keyCode}"]`);

            if(keyEl !== null)
            {
                keyEl.classList.remove('playing');
            }
        });
    }
});

