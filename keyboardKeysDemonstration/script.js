let keys = document.querySelectorAll('.lines .keys');
let i11 = document.querySelector('.i-11');

function down(event) {
    for (let i = 0; i < keys.length; i++) {

        if ((event.key == 'CapsLock') && (keys[i].classList.contains('dark') == true)) {
            keys[i].classList.remove('dark');
            return;

        } else if (keys[i].getAttribute('data1') == event.key || keys[i].getAttribute('data1') == event.code) {
            keys[i].classList.add('dark');

        } else if (keys[i].getAttribute('data2') == event.key || keys[i].getAttribute('data2') == event.code) {
            keys[i].classList.add('dark');

        } else if (keys[i].getAttribute('data3') == event.key || keys[i].getAttribute('data3') == event.code) {
            keys[i].classList.add('dark');

        } else if (keys[i].getAttribute('data4') == event.key || keys[i].getAttribute('data4') == event.code) {

            keys[i].classList.add('dark');

        }
    }
}

function up(event) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].getAttribute('data1') != 'CapsLock') {
            keys[i].classList.remove('dark');
        }
    }
}

i11.addEventListener('keydown', down, true);
i11.addEventListener('keyup', up, true);

