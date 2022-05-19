function dateFormat(dtStr){

    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())
    
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n){
    return n < 9 ? `0${n}` : n 
}

function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch(match){
            case '<': 
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

function htmlUnescape(str){
    return str.replace(/&lt;|&gt;|&amp;|&quot;/g, (match)=>{
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&amp;':
                return '&'
            case '&quot;':
                return '"'
        }
    })
}

module.exports = {
    dateFormat, 
    htmlEscape,
    htmlUnescape
}