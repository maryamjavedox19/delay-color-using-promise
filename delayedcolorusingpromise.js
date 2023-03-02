const delaycolorchange=(color, delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        }, delay)
    })
}

delaycolorchange('violet', 1000)
.then(()=>delaycolorchange('blue', 1000))
.then(()=>delaycolorchange('yellow', 1000))
.then(()=>delaycolorchange('orange', 1000))
.then(()=>delaycolorchange('indigo', 1000))
.then(()=>delaycolorchange('red', 1000))
