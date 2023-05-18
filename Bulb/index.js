// V oddělené složce vytvořte komponentu Bulb, která vyrobí DOM element pro žárovku. Komponenta bude vyžadovat 
//jednu prop s názvem isOn udávajcí, zda je žárovka zapnutá či nikoliv. Zapnutí žárovky proveďte tak, 
//že na element přidáte třídu bulb--on.

export const Bulb = (props)=>{
    const {isOn} = props
    const element = document.createElement('div');
    let tickClass ='';
    if (isOn) {
        tickClass='bulb--on';
    }
    element.innerHTML=
  
   `
   <div class="bulb ${tickClass}"></div>
  `
  const zarovka = element.querySelector('.bulb');
  zarovka.addEventListener('click',()=>{
    
//console.log('ahoj');
if (isOn) {
    element.replaceWith(
        Bulb({                
            isOn:!props.isOn,            
        })
     )
}else if (isOn===false){
    element.replaceWith(
        Bulb({                
            isOn:!props.isOn,            
        })
        )

}
    
    })
    
  return element
}
//<div class="bulb"></div>