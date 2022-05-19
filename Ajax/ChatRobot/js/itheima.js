function resolveParams(data) {
    var arr = []
    for(let key in data){
        arr.push(key + "=" + data[key])
    }
    return arr.join('&')
}

function itheima(options) {
    var xhr = new XMLHttpRequest()
    var qs = resolveParams(options.data)

    if(options.method.toUpperCase() === "GET"){
        xhr.open(options.method, options.url + "?" + qs)
        xhr.send()
    }else if(options.method.toUpperCase() === "POST"){
        xhr.open(options.method, options.url)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(qs)
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            options.success(JSON.parse(xhr.responseText))
        }
    }
}
