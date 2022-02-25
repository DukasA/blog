const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    let tezrAreaHeight = item.offsetHeight;
    item.addEventListener('input', event => {
        let $this = event.target;

        $this.style.height = tezrAreaHeight + "px";
        $this.style.height = $this.scrollHeight + 'px';
    });
});