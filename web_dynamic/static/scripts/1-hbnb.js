$(document).ready(() => {
    
    let tags = []
    $('input:checked').change(e => { 
        e.preventDefault()
        

        const id = $(this).attr('data-id')
        const name = $(this).attr('data-name')

        const tag = {id: id, name: name}
        tags.push(tag)

        let str = ''
        for (const item of tags) {
            str += `${item},`
        }

        $('.amenities h4').html(str)
    })


});