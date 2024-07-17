
const jump = () => {
    const mario = document.getElementById('mario')
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const pipe = document.getElementById('pipe')
    const contador = document.getElementById('contador')
    const pipeposition = pipe.offsetLeft
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './mario-jump-images/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    } else {
    }
}, 10)

document.addEventListener('keydown', jump)