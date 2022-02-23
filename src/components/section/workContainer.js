import { icons } from "../../data/icons.js"

export const makeWorkContainer = (workDataArr, type) => {
    const func = { small : makeSmallType, horizontal: makeHorizontalType, vertical: makeVerticalType};
    const worksTemplate = workDataArr.map(workData => func[type](workData)).join(''); 
    return `
        <ul class="work-container">
            ${worksTemplate}
        </ul>
    `
}


const makeSmallType = (workData) => {
    return `
        <li class="work--small">
            <div class="work--small-thumbnail-box">
              <div class="work--small-img-wrapper">
                <img src=${workData.src} />
              </div>
              <div class="work--small-label">
                <span>${workData.label}</span
                ><img class="small-icon" src=${icons[workData.labelIcon]} />
              </div>
            </div>
            <div class="work--small-info">
              <div class="work--small-title">${workData.title}</div>
              <div class="work--small-details">
                ${workData.tagIcons ? `${workData.tagIcons.map(icon => `<img class='small-icon' src=${icons[icon]} />`).join('')}` : "" }
                <img class="small-icon" src=${icons.grayPerson} /><span>${workData.view}</span>
              </div>
            </div>
        </li>
    `
}

const makeHorizontalType = () => {

}

const makeVerticalType = () => {

}