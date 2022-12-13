const form = document.getElementById('form')
const formBtn = document.getElementById('btn-dark')
const colorBoxWrapper = document.getElementById('color-box-wrapper')

formBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const colorInputElValue = document.getElementById('color-input').value.split('#')
    const colorNameValue = document.getElementById('color-name').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputElValue[1]}&mode=${colorNameValue}&count=5`)
        .then(response => response.json())
        .then(data => {
            const { colors } = data
            let html = ''

            colors.map(function (color) {
                return html += `
                    <div class="color-box" style=background:${color.hex.value};>
			            <span class="color">${color.hex.value}</span>
		            </div>
                `
            })
            colorBoxWrapper.innerHTML = html
        })
})
