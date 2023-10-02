

function exportar(template, nomElemCustom, shadow){
    class contTemplate extends HTMLElement{
        constructor(){
            super()
        }
        
        connectedCallback(){
            const shadowroot = this.attachShadow({mode: shadow})
            
            shadowroot.appendChild(template.content)
        }
    } 
    
    customElements.define(nomElemCustom, contTemplate)
}



module.exports = exportar
