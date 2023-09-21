const head = document.querySelector('head')
const submit = document.querySelector('#submit')
const fontClass = document.querySelector('#fontClass');
const fontSymbol = document.querySelector('#fontsymbol');
const content = document.querySelector('#content')

let once = false;
const allIcons = [];
const regRex = /\.(icon-.*?)\:before \{/g

const ICON_TYPE = {
  CLASS:'class',
  SVG:'svg'
}

const setButtonColor = function (item) {
  const classBtn = document.querySelector(`.${item.class}_${ICON_TYPE.CLASS}`)
  const svgBtn = document.querySelector(`.${item.class}_${ICON_TYPE.SVG}`)

  if(item.type === ICON_TYPE.CLASS) {
    classBtn.style.background = '#2770EF'
    classBtn.style.color = '#fff'
    svgBtn.style.background = '#ffffff'
    svgBtn.style.color = '#000'
  }
  if(item.type === ICON_TYPE.SVG) {
    classBtn.style.background = '#ffffff'
    classBtn.style.color = '#000'
    svgBtn.style.background = '#2770EF'
    svgBtn.style.color = '#fff'
  }
}

const changeIconClass = function (event) {
  const {iconType, iconName}  = event.target.dataset
  const item = allIcons.find(item => item.class === iconName)
  item.type = iconType

  setButtonColor(item);

  const iconDom = document.querySelector(`.${iconName}_`)
  iconDom.innerHTML = ''

  let icon = ''
  if (iconType === ICON_TYPE.CLASS) {
    icon = createClassIcon(item)
  }
  if (iconType === ICON_TYPE.SVG) {
    icon = createSvgIcon(item)
  }

  iconDom.appendChild(icon)
}

const createClassIcon = function (item) {
  const icon = document.createElement('i')
  icon.classList = [`iconfont ${item.class}`]
  return icon
}

const createSvgIcon = function (item) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
  svg.classList = ['icon']
  svg.ariaHidden = true
  const use = document.createElementNS('http://www.w3.org/2000/svg','use')
  use.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',`#${item.class}`)

  svg.appendChild(use)
  return svg
}

const createClassIconItem = function (item) {
  const iconBox = document.createElement('div')
  iconBox.classList = ['icon-box']

  const iconDom = document.createElement('div')
  iconDom.classList= [`${item.class}_`]

  let icon = ''
  if(item.type === ICON_TYPE.CLASS) {
    icon = createClassIcon(item)
  }
  if(item.type === ICON_TYPE.SVG) {
    icon = createSvgIcon(item)
  }
  iconDom.appendChild(icon)


  const iconName = document.createElement('div')
  iconName.classList = ['name']
  iconName.innerText = item.class

  const iconButton = document.createElement('div')
  iconButton.classList = ['icon-btn']
  const classButton = document.createElement('button')
  classButton.classList = [`${item.class}_${ICON_TYPE.CLASS}`]
  classButton.innerText = 'Class'
  classButton.dataset.iconType = ICON_TYPE.CLASS
  classButton.dataset.iconName = item.class
  classButton.onclick = changeIconClass
  const svgButton = document.createElement('button')
  svgButton.classList = [`${item.class}_${ICON_TYPE.SVG}`]
  svgButton.innerText = 'Svg'
  svgButton.dataset.iconType = ICON_TYPE.SVG
  svgButton.dataset.iconName = item.class
  svgButton.onclick = changeIconClass

  iconButton.appendChild(classButton)
  iconButton.appendChild(svgButton)

  if (item.type === ICON_TYPE.CLASS) {
    classButton.style.background = '#2770EF'
    classButton.style.color = '#ffffff'
  }

  if (item.type === ICON_TYPE.SVG) {
    svgButton.style.background = '#2770EF'
    svgButton.style.color = '#ffffff'
  }


  iconBox.appendChild(iconDom)
  iconBox.appendChild(iconName)
  iconBox.appendChild(iconButton)

  return iconBox
}

const renderIcon = function (allIcon) {
  if(allIcon.length === 0){
    return
  }

  allIcon.forEach(item => {
    let iconDom = ''
    iconDom = createClassIconItem(item)
    content.appendChild(iconDom)
  })

  once = false
}

const linkLoadedFn = function () {
  fetch(`https:${fontClass.value}`)
    .then(res => res.text())
    .then(data => {
      [...data.matchAll(regRex)].forEach(item => {
        allIcons.push({
          class:item[1],
          type:ICON_TYPE.SVG
        })
      })

      renderIcon(allIcons);
    })
}

submit.onclick = function () {
  if(once) {
    return
  }
  once = true

  if(!fontClass.value || !fontSymbol.value) {
    alert('请输入font class地址 或 font symbol地址')
    once = false
    return;
  }

  linkLoadedFn()

  const linkDom = document.createElement('link')
  linkDom.rel = 'stylesheet'
  linkDom.href = `https:${fontClass.value}`

  const symbolDom = document.createElement('script')
  symbolDom.src = `https:${fontSymbol.value}`

  head.append(linkDom)
  head.append(symbolDom)
}
