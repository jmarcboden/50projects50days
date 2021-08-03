const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText //Email or Password
        .split('') //split it into an array puts each letter into it's own item in the array
        .map((letter, idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //map each letter into an array with a span around it
        .join('')//turning back into a string
});