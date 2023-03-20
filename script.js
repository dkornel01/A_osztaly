const LIS=["kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep6.jpg",];
const KIVALASZTOTTKEPEK=[]
let db=0;
let szam=[0,1,2,3,4,5,6]

$(function(){
    //ide jön a kód
    const BEIROELEM=$("#felso");
    const BEIROELEM2=$("#also");
    let szamok=shuffel()
    let tarto=osszeAllit(szamok);
    szamok=shuffel()
    let tarto2=osszeAllit2(szamok);
    BEIROELEM.append(tarto)
    BEIROELEM2.append(tarto2)
    const FELSOKEPEK=$("#felso img")
    FELSOKEPEK.on("click",kepreKattintas)
    const ALSOKEPEK=$("#also img")
    ALSOKEPEK.on("click",kepreKattintas)
})

function kepreKattintas(){
   db++
   const ATKKEP=(event.target);
   console.log(db)
   console.log($(ATKKEP).attr("id"))
   ATKKEP.src=LIS[ATKKEP.id]
   KIVALASZTOTTKEPEK.push($(ATKKEP).attr("id"))
   if (db==2){
    db=0;
    visszaFordit()
   }
   
}

function visszaFordit() {
    
    console.log(KIVALASZTOTTKEPEK);
    const FELSOKEPEK=$("#felso img");
    setTimeout(function(){
    let aktkepe=FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0])
    $(aktkepe).attr("src", "kepek/hatter.jpg")
    aktkepe=FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]) 
    $(aktkepe).attr("src", "kepek/hatter.jpg")
    KIVALASZTOTTKEPEK.pop()
    KIVALASZTOTTKEPEK.pop()
    },1000)
    

    /*for (let index = 0; index < KIVALASZTOTTKEPEK.length; index++) {
        KIVALASZTOTTKEPEK[index].src="kepek/hatter.jpg"
    }*/
   
    // visszaálitjuk az src-t a háttérre, amelyikre katintottunk;

}

function osszeAllit(szamok){
    let db=1;
    szam.s
    let txt=""
    for (let index = 0; index < LIS.length; index++) {
            txt+=`<div><img src="kepek/hatter.jpg"  alt="${db}" id="${szamok[index]}" ></div>`
            db=db+1;
            szam++
    }
    return txt
}

function osszeAllit2(szamok){
    let db=1;
    let txt=""
    for (let index = 0; index < LIS.length; index++) {
            txt+=`<div><img src="kepek/hatter.jpg"  alt="${db}" id="${szamok[index]}" ></div>`
            db=db+1;
            szam++
    }
    return txt
}

function shuffel() {
    let van
    let meg=[]
    let szamok
    while (meg.length<6) {
        szamok=Math.floor(Math.random()*6)
        van=false
        for (let index = 0; index < meg.length; index++) {
            if (szamok==meg[index]){
                van=true
            }
            
        }
        if (van==false)
        {
            meg.push(szamok)
        }
        
    }
    console.log(meg)
    return meg
}
